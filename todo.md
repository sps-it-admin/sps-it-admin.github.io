# Day School Rebuild — Mirror of the zip site

**Objective:** Full wipe of `day-school/` and rebuild it in Jekyll as a visual + content
replica of the live React site (`stphilomenaschool-main` zip / colin-charles.github.io/stphilomenaschool).
Re-implement in layouts/HTML/Liquid/CSS — do **not** drop in the built SPA. Leave the root
site and `/distance-learning/` untouched. Adopt the live site's route names as filenames.

## Phase 1 · Foundation

- [ ] 1. Wipe `day-school/` — delete all 16 existing pages (recoverable via git history; nothing carried over).
- [ ] 2. Port assets from the zip → `project/assets/`: 8 images + 4 documents + the PDF (compress oversized JPEGs). Keep the repo's local logo.
- [ ] 3. Create a **day-school-scoped** theme stylesheet (`day-school.css`) with the live site's blue / gold / cream palette + component styles, linked **only** from the day-school layout so the root site and `/distance-learning/` stay untouched. (Fonts already load site-wide.)

## Phase 2 · Global chrome

- [ ] 4. Rewrite `_layouts/day-school.html` — utility bar, header (logo + "Sine Deo Nihil" motto), primary nav (Home · About▾ · Classical Education▾ · School Life▾ · Admissions · Community▾ · Pledge · Enrol Now), mobile nav, and 4-column footer — matching the live site. Point "Home"/"Distance Learning" links at this repo's own `/` and `/distance-learning/`.

## Phase 3 · Content & data

- [ ] 5. Convert the 39 staff bios → `_data/day_school_staff.yml`; wire the 4 documents to the `_data/day_school_*` settings; set `_data/settings.yml` day-school contact details (phone, email, 61 Koplick Road) to match.

## Phase 4 · Rebuild the pages (mirror the 11 routes + 404)

- [ ] 6. Home → `index.html` (Ken Burns hero, intro, pillars/stats, CTAs)
- [ ] 7. About → `about.html` (philosophy / vision / history / principal)
- [ ] 8. Classical Education → `classical-education.html` (history / latin / literature / logic)
- [ ] 9. Our Campus → `campus.html`
- [ ] 10. Our Staff → `staff.html` (renders from the staff data file)
- [ ] 11. School Life → `music.html`, `drama.html`, `sport.html`
- [ ] 12. Admissions → `admissions.html`
- [ ] 13. Community → `community.html` (uniform / parents-friends / policies / forms / portals)
- [ ] 14. Pledge → `pledge.html`
- [ ] 15. 404 → `404.html`

## Phase 5 · Wire-up, QA, ship

- [ ] 16. Update links into day-school from the rest of the repo + `admin/config.yml` (Netlify CMS) for the new structure.
- [ ] 17. QA pass vs the React source — nav/dropdowns, mobile menu, scroll-reveal, Ken Burns, `prefers-reduced-motion`, icons, page titles/meta, link check — page by page.
- [ ] 18. Commit in logical chunks to `claude/cool-volta-0cx43b` and push.

## Notes

- Live URL is fetch-blocked from this environment; replicate from the zip's React source (the live site's actual code), not a pixel diff.
- Biggest visual change: palette flips from the repo's crimson to the live site's blue (`oklch(0.31 0.085 247)` primary, `oklch(0.55 0.16 245)` accent, gold, cream).
