// China Trip 2026 — Vote Backend
// Deploy as a Web App: Execute as "Me", Who has access "Anyone"
// After deploying, paste the /exec URL into app.js as APPS_SCRIPT_URL

// TODO: Replace with your Google Sheet ID (the long string in the Sheet URL)
const SHEET_ID = 'REPLACE_WITH_SHEET_ID';
const SHEET_NAME = 'Votes';

// Handles both read (no params) and write (token + activityId params)
// Using GET avoids the CORS preflight that would block POST from GitHub Pages
function doGet(e) {
  const out = ContentService.createTextOutput();
  out.setMimeType(ContentService.MimeType.JSON);
  try {
    const params = e.parameter || {};
    if (params.token && params.activityId) {
      out.setContent(JSON.stringify(recordVote(params.token, params.activityId)));
    } else {
      out.setContent(JSON.stringify(getCounts()));
    }
  } catch (err) {
    out.setContent(JSON.stringify({ ok: false, error: err.toString() }));
  }
  return out;
}

function recordVote(idToken, activityId) {
  // Verify the Google ID token server-side
  const resp = UrlFetchApp.fetch(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken),
    { muteHttpExceptions: true }
  );
  const payload = JSON.parse(resp.getContentText());
  if (payload.error || !payload.email) {
    return { ok: false, error: 'invalid token' };
  }

  const email = payload.email;
  const name = payload.name || email;
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();

  // Check for duplicate vote (skip header row)
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) === email && String(rows[i][3]) === activityId) {
      return { ok: true, alreadyVoted: true };
    }
  }

  sheet.appendRow([new Date().toISOString(), email, name, activityId]);
  return { ok: true, alreadyVoted: false };
}

function getCounts() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const counts = {};
  for (let i = 1; i < rows.length; i++) {
    const id = String(rows[i][3]);
    if (id) counts[id] = (counts[id] || 0) + 1;
  }
  return { ok: true, counts };
}

// Run once to create the Sheet with correct headers
function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Email', 'Name', 'ActivityID']);
    sheet.setFrozenRows(1);
  }
}
