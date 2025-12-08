import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Normalize whatsappType for Google Sheets: send human-friendly values
    const mapped = { ...data }
    if (mapped.whatsappType) {
      const v = String(mapped.whatsappType).toLowerCase()
      if (v === 'business' || v.includes('business')) mapped.whatsappType = 'WhatsApp Business'
      else if (v === 'simple' || v.includes('simple')) mapped.whatsappType = 'WhatsApp Simple'
      else mapped.whatsappType = String(mapped.whatsappType)
    }

    // Add submitted timestamps so the sheet records when the form was sent
    try {
      const now = new Date()
      mapped.submittedAtISO = now.toISOString()
      // Human readable in French locale: DD/MM/YYYY HH:mm
      mapped.submittedAtHuman = now.toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })
    } catch (err) {
      mapped.submittedAtISO = ''
      mapped.submittedAtHuman = ''
    }

    // If a webhook URL is configured, forward to it (backwards compatible)
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK
    if (webhook) {
      const resp = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!resp.ok) {
        const text = await resp.text()
        return NextResponse.json({ error: 'Webhook error', details: text }, { status: 502 })
      }

      return NextResponse.json({ ok: true })
    }

    // Otherwise, try to use service account creds from env to write to Sheets directly
    const credsRaw = process.env.GOOGLE_CREDENTIALS_JSON
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

    if (!credsRaw || !spreadsheetId) {
      return NextResponse.json({ error: 'No webhook and no Google Sheets credentials configured' }, { status: 500 })
    }

    let creds
    try {
      creds = JSON.parse(credsRaw)
    } catch (err) {
      return NextResponse.json({ error: 'Invalid GOOGLE_CREDENTIALS_JSON' }, { status: 500 })
    }

    const client = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

  // Pass the GoogleAuth instance directly to google.sheets to satisfy typings
  // (avoid using the concrete client returned by getClient(), which can cause overload mismatch)
  const sheets = google.sheets({ version: 'v4', auth: client })

    // Prepare a row: use consistent column order (sorted keys) so the sheet is stable
    const keys = Object.keys(mapped)
    const values = keys.map((k) => {
      const v = mapped[k]
      if (Array.isArray(v)) return v.join(', ')
      if (v === null || v === undefined) return ''
      return String(v)
    })

    // Append header row if sheet empty is not guaranteed here; we'll just append data row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Responses',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('submit error', err)
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 })
  }
}
