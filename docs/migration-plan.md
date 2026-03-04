# Content migration plan (old site -> new site)

1. Export and archive existing content
- Save a full backup of the old site and media files.
- Create a spreadsheet with current page URLs and destination routes in the new site.

2. Move core newcomer information first
- Update `service-times/weekly.json`.
- Confirm `welcome.md` details: parking, accessibility, children, communion wording.
- Check all phone/email details on Contact and Safeguarding pages.

3. Migrate news and events
- Add recent items to `src/content/news/*.md`.
- Add future events to `src/content/events/*.md`.
- Include short summaries and accurate dates.

4. Migrate people and ministries
- Update `src/content/people/*.md` with names, roles, and photos.
- Review `church-life.md` cards for current groups and leaders.

5. Migrate history carefully
- Move historical text into `history/timeline.json` and `pages/history.md`.
- Keep wording factual and sensitive for memorials linked to slavery and enslavement.
- Verify references to the churchyard and the LGBT landmark grave wording.

6. Replace placeholders before launch
- Upload real safeguarding PDFs into `public/documents/`.
- Replace temporary social links and map/contact details if needed.
- Replace placeholder photos with current parish images.

7. Launch checks
- Run `npm run build`.
- Run Lighthouse on mobile for Home, Welcome, Services & Events, Contact.
- Set Netlify redirects from old URLs to new routes.
