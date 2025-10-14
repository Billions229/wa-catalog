Form -> Google Sheets integration
===============================

Ce projet propose maintenant une route API prête à recevoir les données du formulaire et à les transmettre
vers un webhook (par exemple un Google Apps Script qui écrit dans une Google Sheet).

Où ?
- Route Next.js (App Router): `app/api/submit/route.ts` — elle attend un POST JSON avec les champs du formulaire.

Configuration requise
- Définir la variable d'environnement `GOOGLE_SHEETS_WEBHOOK` avec l'URL du webhook (Google Apps Script). Si elle n'est pas fournie, l'API renverra une erreur.

Exemple de Google Apps Script (Web App)
1. Créez une nouvelle Google Sheet.
2. Ouvrez Extensions → Apps Script et collez le script suivant :

```js
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = ss.getSheetByName('Responses') || ss.insertSheet('Responses')

    const body = JSON.parse(e.postData.contents)
    const headers = Object.keys(body)

    // Ensure header row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers)
    }

    const row = headers.map(h => body[h])
    sheet.appendRow(row)

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
```

3. Déployez → New deployment → Type: Web app. Choisissez "Anyone" (ou "Anyone with the link") selon votre besoin.
4. Copiez l'URL de déploiement et placez-la dans `GOOGLE_SHEETS_WEBHOOK`.

Tester localement
- Dans un environnement local (par ex. Vercel Preview ou votre machine), exportez la variable d'environnement :

```bash
export GOOGLE_SHEETS_WEBHOOK="https://script.google.com/macros/s/XXX/exec"
```

Puis démarrez l'application (`pnpm dev`) et soumettez le formulaire.

Remarques
- Le formulaire envoie actuellement toutes les données sous forme JSON et attend une réponse JSON avec { ok: true }.
- Vous pouvez améliorer la validation côté serveur (vérifier les champs, anti-spam, CAPTCHA, etc.).
