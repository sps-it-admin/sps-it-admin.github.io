---
name: st-philomena-design
description: Use this skill to generate well-branded interfaces and assets for St Philomena School (a Catholic classical school, Distance Learning programme for Years 7 & 8), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the "The Cloister" Gothic-Revival institutional style.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** St Philomena School — Distance Learning. Catholic, classical, reverent, scholarly, warm. Motto: *Sine Deo Nihil*.
- **Entry point:** link `styles.css` (it `@import`s all tokens + brand utilities).
- **Palette:** Navy / Crimson / Antique Gold / Cream — all in `tokens/colors.css`. Header is crimson; footer navy; page ground cream.
- **Type:** Playfair Display (headings), Lora (body, 17px/1.75), Cinzel (UPPERCASE labels/nav). Never a sans-serif.
- **Corners are sharp; gold is for rules/ornament only; no emoji; Australian/British spelling.**
- **Components:** `window.StPhilomenaSchoolDesignSystem_b41775` after loading `_ds_bundle.js` — `Button`, `SectionLabel`, `Badge`, `PillarCard`, `StatBlock`, `PullQuote`, `GoldDivider`. See `components/core/*.prompt.md`.
- **Reference UI:** `ui_kits/website/index.html` — a navigable recreation of the live site (Home / About / Enrolments).
- **Icons:** Lucide via CDN. **Crest:** `assets/logo-full.png` (do not redraw).

Read `readme.md` for the full content voice, visual foundations, and iconography rules before producing anything.
