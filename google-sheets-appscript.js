function doGet() {
  return ContentService
    .createTextOutput("Austrix Migration Form API Running")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Website Leads");

    if (!sheet) {
      sheet = ss.insertSheet("Website Leads");
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone",
        "Email",
        "Preferred Service",
        "Current Location",
        "Current Visa Status",
        "Preferred Date",
        "Preferred Time",
        "Message",
        "Source Page",
        "Website"
      ]);
    }

    const data = e.parameter;

    sheet.appendRow([
      new Date(),
      data["Full Name"] || "",
      data["Phone"] || "",
      data["Email"] || "",
      data["Preferred Service"] || "",
      data["Current Location"] || "",
      data["Current Visa Status"] || "",
      data["Preferred Date"] || "",
      data["Preferred Time"] || "",
      data["Message"] || "",
      data["Source Page"] || "",
      data["Website"] || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
