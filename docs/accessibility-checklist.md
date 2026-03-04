# Accessibility checklist (implemented)

This build is designed around WCAG 2.2 AA practices:

- Semantic structure in all templates (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Skip link included at top of every page.
- Keyboard focus styles are visible on links, buttons, and form controls.
- Mobile menu is keyboard accessible using native `<details>/<summary>`.
- Form fields include explicit `<label>` elements and required attributes.
- Images include alt text through CMS fields (`image.alt`, `photoAlt`).
- Colour palette uses high-contrast text against light backgrounds.
- Links are descriptive (not "click here").
- Map embed includes a meaningful `title`.
- Language set to `en-GB`.

Recommended manual checks before launch:

- Run Lighthouse accessibility audit on home + key templates.
- Test with keyboard only on desktop and mobile widths.
- Test with VoiceOver/NVDA on Home, Services & Events, Safeguarding, Contact.
- Verify final photography alt text reflects actual images.
