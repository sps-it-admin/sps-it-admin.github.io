# St Philomena School — Design System

> **"The Cloister"** — a Gothic-Revival, institutional design language for St Philomena School's Distance Learning programme.
> *Sine Deo Nihil — Without God there is Nothing.*

This design system lets you generate well-branded interfaces, slides, and marketing assets for **St Philomena School** — a small independent Catholic school in Park Ridge, Queensland, offering an authentic **classical Catholic education** for Years 7 & 8, delivered to families across Australia through Distance Learning.

---

## Company context

St Philomena School was established in 1999 by Catholic families seeking a genuinely Catholic education, under the auspices of the Society of St Pius X (SSPX). Its mission: **"To provide excellence in Catholic and classical education, for the love of God and learning."**

The **Distance Learning** programme delivers the same rigorous classical curriculum — built on the **Trivium** (Grammar → Logic → Rhetoric) with Latin, Literature, History, Mathematics, Science and the Catholic Faith at its core — to students wherever they are. Year 7 is the *Grammar Phase*; Year 8 is the *Logic Phase*.

The audience is **Catholic parents** evaluating a serious, traditional education for their children. The brand must feel **reverent, scholarly, established, and warm** — never corporate, trendy, or casual.

### Source material

This system was reverse-engineered from the school's live Distance Learning website (a React + Tailwind v4 + shadcn/ui app). The original repository — worth exploring for deeper fidelity:

- **GitHub:** `sps-it-admin/st-philomena-dl-staging` (private) — see `client/src/index.css` for the source tokens, `client/src/components/Layout.tsx` for header/footer, `client/src/pages/*` for page layouts, and `CONTENT.md` for the full copy deck.

If you have access, read those files to extend this system faithfully.

---

## Content fundamentals — how the brand writes

- **Voice:** dignified, warm, and declarative. Speaks with quiet authority and conviction. Never breezy, never markety, no exclamation points.
- **Person:** addresses families as **"you"** and speaks for the school as **"we"** / **"our"**. ("We welcome families who share our commitment…")
- **Spelling:** **Australian/British** throughout — *programme, practise (verb), analyse, enrolment, recognise, behaviour.* Keep these spellings.
- **Casing:** Sentence case for body. Headings are title-ish but natural. **Eyebrows and labels are UPPERCASE** (set in Cinzel, letter-spaced). Proper reverence for **Faith, Catholic, Church, Trivium, Grammar Phase, Logic Phase.**
- **Latin & motto:** the motto **"Sine Deo Nihil"** appears in italic Playfair, always paired with its translation **"Without God there is Nothing"** in spaced uppercase. A dagger **†** sometimes precedes the tagline ("† Catholic · Classical · Distance Learning").
- **Tone examples:**
  - *"An Education Rooted in Truth & Tradition"*
  - *"Forming Catholics for Eternity"*
  - *"The most important part of education is the formation of character."*
  - *"Education for Education's Sake"*
- **Punctuation:** em dashes for asides; middot **·** between tagline words; ampersands **&** are welcome in headings ("Truth & Tradition", "Teaching & Learning").
- **No emoji.** Ornament comes from typography, the crest, the dagger †, and gold rules — never from emoji or playful icons.
- **Sentence length:** measured and a little long; this is unhurried, considered prose, set for sustained reading.

---

## Visual foundations

### Palette — "The Cloister"
Four families, all defined in `oklch` (see `tokens/colors.css`):
- **Navy** `--navy` `oklch(0.27 0.065 250)` — the primary institutional ground (section backgrounds, footer, inverse panels). `--navy-dark` is the deepest ground (footer); `--navy-light` for raised/hover.
- **Crimson** `--crimson` `oklch(0.38 0.13 22)` — the **header bar**, primary CTAs, section-label eyebrows, and pull-quote rules. The header is *crimson*, not navy.
- **Antique Gold** `--gold` `oklch(0.72 0.12 80)` — used **only** for rules, dividers, outlines, ornament and small accents. **Never** as a large fill.
- **Cream** `--cream` `oklch(0.98 0.015 90)` — warm parchment page ground. `--cream-dark` alternates sections; `--white` is for cards.

The default page is **cream**; sections alternate cream → cream-dark → navy for rhythm. Use **one or two grounds per view**, not a rainbow.

### Typography — three serif voices (never a sans-serif)
- **Playfair Display** (`--font-display`) — high-contrast didone for **headings & display**. Italics in gold or crimson carry emphasis ("in *Truth & Tradition*"). Leading ~1.15.
- **Lora** (`--font-body`) — warm book serif for **body copy**, set generously at **17px / 1.75** for sustained reading.
- **Cinzel** (`--font-label`) — Roman capitals for **eyebrows, nav, buttons, badges** — always UPPERCASE and letter-spaced (0.1–0.2em).

### Backgrounds & imagery
- **Photographic, full-bleed heroes** of the chapel, campus, gardens and classical books — warm, reverent, slightly desaturated. Overlaid with a **navy gradient** (≈0.5–0.92 alpha) so cream text reads.
- A slow **Ken Burns** drift (`scale 1 → 1.04` over 10s) animates hero images.
- A bottom **cream fade** gradient eases heroes into the page below.
- Decorative **offset gold square outlines** and **gold top-rules** frame image clusters and footers. No patterns, no textures, no purple gradients.

### Motion
- Slow and dignified. Entrance is **fade-up** (`translateY(40px) → 0`, opacity 0 → 1) with `cubic-bezier(0.22, 1, 0.36, 1)` easing, staggered in 0.1s steps.
- Scroll-reveal via an `IntersectionObserver` toggling `.visible`.
- **No bounces, no springs, no infinite decorative loops** (except the gentle hero Ken Burns).
- All motion respects `prefers-reduced-motion`.

### Hover / press states
- **Buttons:** primary darkens crimson (`--crimson` → `--crimson-deep`) and brightens its offset gold outline. Secondary fills with `oklch(1 0 0 / 0.1)`.
- **Nav links:** a **gold underline slides in** from the left (width 0 → 100%).
- **Cards:** lift with a soft shadow (`--shadow-lg`) — never scale or tilt.
- **Subject rows / dropdowns:** border shifts toward gold; text shifts to gold.

### Borders, corners, elevation
- **Sharp corners.** Radius base is `0.25rem` and most surfaces are **square** (`--radius-sm` = 0px). The institutional feel comes from rules and outlines, not rounding.
- **Hairline borders** (`--cream-dark` on light, `oklch(1 0 0 / 0.1)` on navy) define cards and rows.
- **Shadows are restrained** and navy-tinted — reserved mostly for hover. No heavy drop shadows.
- Signature button geometry: a 1px crimson border **plus** a 1px gold `outline` offset 3px — a double-rule "official seal" look.

### Cards
- White ground, 1px `--cream-dark` border, **square corners**, ~1.75rem padding, no shadow at rest, soft shadow on hover. A crimson icon, Playfair title, Lora body.

### Transparency & blur
- Used sparingly: navy gradient overlays on photos, and faint white overlays (`oklch(1 0 0 / 0.05–0.1)`) on hover over dark grounds. No glassmorphism / backdrop-blur.

---

## Iconography

- **Lucide** (`lucide-react` in production, pinned `0.453.0`) is the icon set — thin, 2px-stroke line icons. In static HTML, load it from CDN: `https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js`, then `lucide.createIcons()`. The UI-kit `shared.jsx` wraps this in an `<Icon name="…" />` helper.
- Common glyphs: `phone`, `mail`, `chevron-down`, `menu`, `x`, `arrow-right`, `cross`, `book-open`, `graduation-cap`, `map-pin`, `check`, `file-check`.
- Icons are typically **crimson on light grounds**, **gold on navy**, small (11–22px).
- The **dagger †** (U+2020) is used as a typographic ornament before taglines.
- **The crest** (`assets/logo-full.png`) is the school's coat of arms — the "P", a fern and olive branch, and the *Sine Deo Nihil* banner. Transparent ground; sits on cream or navy. **Do not redraw or recolour it.**
- **No emoji** as iconography anywhere.

---

## Repository index

| Path | What it is |
|---|---|
| `styles.css` | **Entry point.** `@import`s every token + utility file. Consumers link this. |
| `tokens/fonts.css` | Google Fonts import — Playfair Display, Lora, Cinzel. |
| `tokens/colors.css` | The Cloister palette + semantic aliases (oklch). |
| `tokens/typography.css` | Font families, modular type scale, weights, tracking. |
| `tokens/spacing.css` | Radii (sharp), spacing scale, restrained shadows, motion easing. |
| `tokens/utilities.css` | Brand utility classes: `.btn-primary`, `.section-label`, `.crimson-rule`, `.gold-divider`, `.nav-link`, `.ken-burns`, `.fade-up`, `.reveal`. |
| `components/core/` | React primitives — `Button`, `SectionLabel`, `Badge`, `PillarCard`, `StatBlock`, `PullQuote`, `GoldDivider`. Each has `.d.ts` + `.prompt.md`. |
| `ui_kits/website/` | Interactive recreation of the DL website — `index.html` (Home / About / Enrolments, navigable) + `Header`, `Footer`, screen JSX. |
| `guidelines/` | Foundation specimen cards rendered in the Design System tab. |
| `assets/` | `logo-full.png` (crest), `crest.png`, `chapel-interior.jpg`, `st-philomena-statue.jpg`, `og-image.png`, `favicon.ico`. |
| `SKILL.md` | Agent-Skill manifest for using this system in Claude Code. |

### Using the components
Link `styles.css`, load `_ds_bundle.js` (generated), then:
```js
const { Button, SectionLabel, PillarCard, Badge, StatBlock, PullQuote, GoldDivider }
  = window.StPhilomenaSchoolDesignSystem_b41775;
```
See each component's `.prompt.md` for usage and variants.

### Key facts (for accurate copy)
- **Founded:** 1999 · **Year levels:** 7 & 8 · **Location:** 61 Koplick Road, Park Ridge QLD 4125
- **Phone:** (07) 3802 0088 · **Email (Distance Learning):** dladmin@stphilomena.qld.edu.au · **Email (Day School):** admin@stphilomena.qld.edu.au
- Contact details are kept separately per programme in `_data/settings.yml`, under the `day_school` and `distance_learning` keys — do not merge them, the two programmes use different inboxes.
- **Principal:** Fr Joseph Ockerse (2024–present) · **Motto:** Sine Deo Nihil

---

## Caveats
- **Fonts** are served from **Google Fonts** (the production site does the same), not self-hosted — so the compiler reports 0 `@font-face` rules. They load reliably; swap to self-hosted `@font-face` if you need offline assets.
- A handful of homepage photographs (classroom, garden, books, campus) are referenced from the school's **CloudFront CDN** rather than copied locally; only the chapel and statue images live in `assets/`.
