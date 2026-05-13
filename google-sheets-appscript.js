/**
 * Austrix website enquiry form → Google Sheets
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code and save.
 * 4. Deploy > New deployment > Web app.
 * 5. Execute as: Me. Who has access: Anyone.
 * 6. Copy the Web App URL and paste it into contact.html in data-script-url="...".
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Enquiries');
  const fields = [
    'Submitted At',
    'Full Name',
    'Phone',
    'Email',
    'Preferred Service',
    'Current Location',
    'Current Visa Status',
    'Preferred Date',
    'Preferred Time',
    'Message',
    'Source Page',
    'Website'
  ];
  if (sheet.getLastRow() === 0) sheet.appendRow(fields);
  const params = e.parameter || {};
  const row = fields.map(field => params[field] || '');
  sheet.appendRow(row);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
