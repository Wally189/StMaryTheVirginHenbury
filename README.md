# St Mary the Virgin, Henbury website

Astro + Tailwind + Decap CMS parish website for St Mary the Virgin, Henbury (Church of England).

## Stack

- Astro
- Tailwind CSS
- Decap CMS (Git-based content editing)
- Netlify deployment

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4321`.

## CMS editing (Decap)

- CMS path: `/admin`
- Config file: `public/admin/config.yml`
- Content folders:
  - News: `src/content/news`
  - Events: `src/content/events`
  - People: `src/content/people`
  - Pages: `src/content/pages`
  - Service times: `src/content/service-times/weekly.json`
  - Safeguarding: `src/content/safeguarding/contacts.json`
  - History timeline: `src/content/history/timeline.json`

### Local CMS testing

- Run site: `npm run dev`
- Run Decap local backend:
  ```bash
  npx decap-server
  ```
- Visit `/admin` and edit content.

## Add news and events

### Add news

1. In CMS: create a new News entry.
2. Fill title, date, summary, category, body.
3. Add image + alt text where possible.

### Add event

1. In CMS: create a new Event entry.
2. Fill start date, time label, category, location, summary.
3. Optional: set `featured` true for highlighted events.

The site automatically updates:
- `/news`
- `/events`
- Home latest blocks
- Services & Events search
- iCal feed at `/calendar.ics`

## Deploy to Netlify

1. Push repository to GitHub/GitLab/Bitbucket.
2. In Netlify:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20` (already in `netlify.toml`)
3. Enable Identity + Git Gateway for Decap CMS in Netlify.
4. Invite editors in Netlify Identity.
5. Confirm `/admin` login works on production URL.

## Accessibility and content governance

- Accessibility implementation checklist: `docs/accessibility-checklist.md`
- Content migration guide: `docs/migration-plan.md`

## Notes for parish admins

- Replace placeholder safeguarding PDFs in `public/documents/`.
- Replace temporary social links in footer/contact page.
- Add real parish photos in `public/images/uploads/` via CMS for best results.
