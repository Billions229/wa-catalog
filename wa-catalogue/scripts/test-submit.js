#!/usr/bin/env node
// Quick script to simulate form submission using GOOGLE_CREDENTIALS_JSON and GOOGLE_SPREADSHEET_ID
const { google } = require('googleapis')
const fs = require('fs')

function loadEnv() {
  const envPath = require('path').resolve(process.cwd(), '..', '.env')
  if (!fs.existsSync(envPath)) {
    console.error('.env not found at', envPath)
    process.exit(1)
  }
  const content = fs.readFileSync(envPath, 'utf8')
  const lines = content.split(/\n+/)
  const env = {}
  for (const l of lines) {
    const m = l.match(/^\s*([A-Z0-9_]+)=(.*)$/)
    if (m) env[m[1]] = m[2]
  }
  return env
}

async function main() {
  const env = loadEnv()
  const credsRaw = env.GOOGLE_CREDENTIALS_JSON
  const spreadsheetId = env.GOOGLE_SPREADSHEET_ID
  if (!credsRaw || !spreadsheetId) {
    console.error('Missing creds or spreadsheet id in .env')
    process.exit(1)
  }

  let creds
  try { creds = JSON.parse(credsRaw) } catch (e) { console.error('Invalid JSON in GOOGLE_CREDENTIALS_JSON'); process.exit(1) }
  console.log('Using service account:', creds.client_email)

  const client = new google.auth.GoogleAuth({ credentials: creds, scopes: ['https://www.googleapis.com/auth/spreadsheets'] })
  const authClient = await client.getClient()
  const sheets = google.sheets({ version: 'v4', auth: authClient })

  const now = new Date().toISOString()
  const values = [[now, 'TestShop', 'https://wa.me/c/22953211030', 'Cotonou', 'Mode', 'test keywords']]

  const range = 'Responses!A1'
  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values }
    })
    console.log('Append result:', res.status || 'ok')
  } catch (err) {
    console.error('Sheets append error:', (err && err.message) || err)
    // If parse range error, try to create the sheet tab named 'Responses'
    if (err && String(err).includes('Unable to parse range')) {
      console.log('Sheet tab "Responses" not found — attempting to create it...')
      try {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [{ addSheet: { properties: { title: 'Responses' } } }],
          },
        })
        console.log('Created sheet tab "Responses". Retrying append...')
        const retry = await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          requestBody: { values }
        })
        console.log('Append result after create:', retry.status || 'ok')
      } catch (e2) {
        console.error('Failed to create tab or append:', e2.message || e2)
        if (e2 && e2.code === 403) {
          console.error('\nPermission denied: share the spreadsheet with the service account email above (Editor role).')
        }
        process.exit(1)
      }
    } else {
      if (err && err.code === 403) {
        console.error('\nPermission denied: share the spreadsheet with the service account email above (Editor role).')
      }
      process.exit(1)
    }
  }
}

main()
