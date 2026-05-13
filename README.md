# Austrix Migration & Education Consulting Website

Flat-file, Bootstrap-based website prepared for GitHub Pages or any static hosting provider.

## Publish on GitHub Pages
1. Upload all files in this folder to the root of your GitHub repository.
2. Go to Settings → Pages.
3. Select the main branch and root folder.
4. Add the custom domain `www.austrixmigration.com` when DNS is ready.

## Included
- Multi-page SEO-friendly HTML pages
- Shared `style.css` and `main.js`
- Google Form enquiry integration
- Sitemap and robots file
- Mobile-first responsive layout

## Final business checks
- Confirm team names, professional credentials and MARN display details.
- Connect analytics/Search Console after domain launch.
- Replace or add professional team photography when available.


Google Sheets form connection
-----------------------------
The contact page keeps the built-in website form UI. To save enquiries into Google Sheets, create a Google Sheet, open Extensions > Apps Script, paste the code from `google-sheets-appscript.js`, deploy it as a Web App, then paste the Web App URL into `contact.html` where it says `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`.
