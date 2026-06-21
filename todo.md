# Day School Rebuild — Mirror of the zip site ✅ COMPLETE

**Objective:** Full wipe of `day-school/` and rebuild it in Jekyll as a visual + content
replica of the live React site (`stphilomenaschool-main` zip / colin-charles.github.io/stphilomenaschool).
Re-implemented in layouts/HTML/Liquid/CSS — not the built SPA. Root site and
`/distance-learning/` left untouched. Live route names adopted as filenames.

All work verified with a local `jekyll build` (clean build, no Liquid errors).

## Phase 1 · Foundation

- [x] 1. Wipe `day-school/` — removed the 16 previous pages.
- [x] 2. Port assets from the zip → `project/assets/` (8 images + 4 documents wired by URL + PDF). Oversized hero JPEGs recompressed (chapel 3.5MB→423KB, school-hero 1.3MB→444KB, etc.).
- [x] 3. `day-school.css` — self-contained theme (live site's blue/gold/cream palette, Tailwind-compatible utility layer, brand components, header/nav/footer chrome). Loaded only by the day-school layout, so root + `/distance-learning/` are unaffected.

## Phase 2 · Global chrome

- [x] 4. Rewrote `_layouts/day-school.html` — utility bar, header nav (dropdowns + Enrol Now), mobile nav, 4-column footer; "Home"/"Distance Learning" links point at this repo's `/` and `/distance-learning/`.

## Phase 3 · Content & data

- [x] 5. Rebuilt `_data/day_school_staff.yml` (39 faculty/staff by department); documents wired by URL; `_data/settings.yml` day-school contact details confirmed.

## Phase 4 · Rebuild the pages (mirror the 11 routes + 404)

- [x] 6. Home → `index.html`
- [x] 7. About → `about.html`
- [x] 8. Classical Education → `classical-education.html`
- [x] 9. Our Campus → `campus.html`
- [x] 10. Our Staff → `staff.html` (renders from the staff data file)
- [x] 11. School Life → `music.html`, `drama.html`, `sport.html`
- [x] 12. Admissions → `admissions.html`
- [x] 13. Community → `community.html` (uniform / parents-friends / policies / forms / portals)
- [x] 14. Pledge → `pledge.html`
- [x] 15. 404 → `404.html`

## Phase 5 · Wire-up, QA, ship

- [x] 16. Updated `admin/config.yml` (staff collection fields + removed deleted-page entry); confirmed no broken inbound links from the rest of the repo.
- [x] 17. QA pass: cross-checked every utility class against the CSS, verified all image refs resolve, clean `jekyll build`.
- [x] 18. Committed in logical chunks to `claude/cool-volta-0cx43b` and pushed.

## Notes

- Replicated from the zip's React source (the live site's actual code); live URL was fetch-blocked from this environment, so no pixel diff.
- Palette flipped from the repo's crimson to the live site's blue (`oklch(0.31 0.085 247)` primary, `oklch(0.55 0.16 245)` accent, gold, cream).
- Document links (Admissions, Community, Pledge) use the live site's source URLs; the pre-existing `_data/day_school_*` document files and their CMS entries remain available.
