// China Trip 2026 — Vote Backend
// Deploy as a Web App: Execute as "Me", Who has access "Anyone"
// After deploying, paste the /exec URL into app.js as APPS_SCRIPT_URL

const SHEET_ID = '158NYj2sOzDp3mjzfae-cdD7xFMujgbTkGLesadmfrjQ';
const SHEET_NAME = 'Votes';

function doGet(e) {
  const out = ContentService.createTextOutput();
  const params = e.parameter || {};
  try {
    let data;
    if (params.token && params.activityId) {
      data = params.action === 'remove'
        ? removeVote(params.token, params.activityId)
        : recordVote(params.token, params.activityId);
    } else {
      data = getCounts();
    }
    if (params.callback) {
      // JSONP — avoids CORS redirect issues from GitHub Pages
      out.setMimeType(ContentService.MimeType.JAVASCRIPT);
      out.setContent(params.callback + '(' + JSON.stringify(data) + ')');
    } else {
      out.setMimeType(ContentService.MimeType.JSON);
      out.setContent(JSON.stringify(data));
    }
  } catch (err) {
    const errData = { ok: false, error: err.toString() };
    if (params.callback) {
      out.setMimeType(ContentService.MimeType.JAVASCRIPT);
      out.setContent(params.callback + '(' + JSON.stringify(errData) + ')');
    } else {
      out.setMimeType(ContentService.MimeType.JSON);
      out.setContent(JSON.stringify(errData));
    }
  }
  return out;
}

function recordVote(idToken, activityId) {
  const resp = UrlFetchApp.fetch(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken),
    { muteHttpExceptions: true }
  );
  const payload = JSON.parse(resp.getContentText());
  if (payload.error || !payload.email) return { ok: false, error: 'invalid token' };

  const email = payload.email;
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) === email && String(rows[i][3]) === activityId) {
      return { ok: true, alreadyVoted: true };
    }
  }
  sheet.appendRow([new Date().toISOString(), email, payload.name || email, activityId]);
  return { ok: true, alreadyVoted: false };
}

function removeVote(idToken, activityId) {
  const resp = UrlFetchApp.fetch(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken),
    { muteHttpExceptions: true }
  );
  const payload = JSON.parse(resp.getContentText());
  if (payload.error || !payload.email) return { ok: false, error: 'invalid token' };

  const email = payload.email;
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  for (let i = rows.length - 1; i >= 1; i--) {
    if (String(rows[i][1]) === email && String(rows[i][3]) === activityId) {
      sheet.deleteRow(i + 1);
      return { ok: true, removed: true };
    }
  }
  return { ok: true, removed: false };
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

// Run once to create the Votes sheet with correct headers
function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Email', 'Name', 'ActivityID']]);
  sheet.setFrozenRows(1);
  Logger.log('Done — Votes sheet ready');
}
