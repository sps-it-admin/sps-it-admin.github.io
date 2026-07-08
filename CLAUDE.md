# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

This is a **Jekyll static site** for St Philomena School, hosted on GitHub Pages. There is no build step to run locally — GitHub Pages builds and publishes automatically on push. The site has two programme sections, `/day-school/` and `/distance-learning/`, plus a root landing page (`index.html`) that lets visitors choose between them.

## Jekyll Structure

- `_config.yml` — site title, description, URL
- `_layouts/` — three layouts: `day-school.html` (day school section), `distance-learning.html` (DL section), `landing.html` (the root landing page — minimal, no nav)
- `_data/settings.yml` — contact info (phone, email, address) injected via Liquid into layouts. The `day_school` and `distance_learning` keys hold programme-specific values (used by `day-school.html` and `distance-learning.html` respectively) — the two programmes have different contact emails and must not be merged
- `_data/faqs.yml` — FAQ content rendered on the FAQ pages
- `admin/config.yml` — Netlify CMS config for non-technical content editing

Pages use YAML frontmatter to select a layout:
```html
---
layout: distance-learning
title: About
---
```

## Design System: "The Cloister"

All visual work must follow the design system documented in `project/readme.md`. The `project/` directory is the canonical source for brand tokens and components.

**Brand identity:** Catholic, classical, reverent, scholarly. No emoji anywhere. No sans-serif fonts. No decorative animations (bounces, springs, infinite loops).

### Colour Palette (oklch)
| Role | Token | Value |
|------|-------|-------|
| Navy (primary ground) | `--color-navy` | `oklch(0.27 0.065 250)` |
| Crimson (header, CTAs) | `--color-crimson` | `oklch(0.38 0.13 22)` |
| Antique Gold (dividers, ornament only) | `--color-gold` | `oklch(0.72 0.12 80)` |
| Cream (page background) | `--color-cream` | `oklch(0.98 0.015 90)` |

### Typography (serif only — never sans-serif)
- **Playfair Display** — headings
- **Lora** — body copy at 17px / 1.75 line-height
- **Cinzel** — eyebrows, nav, buttons (always UPPERCASE, letter-spaced)

### Key Design Rules
- Sharp corners (base radius 0.25rem, mostly 0px)
- Hairline borders; restrained navy-tinted shadows
- Signature button: 1px crimson border + 1px gold outline offset 3px ("official seal")
- Hero images: Ken Burns slow drift (`scale(1)` → `scale(1.04)` over 10s)
- Scroll reveals: `.reveal` class → `.visible` via IntersectionObserver (fade-up)
- All motion must respect `prefers-reduced-motion`

### Token Files (`project/tokens/`)
```
colors.css       → all --color-* and semantic aliases
fonts.css        → @font-face / Google Fonts imports
typography.css   → font families, scale, weights, tracking
spacing.css      → radii, spacing scale, shadows, easing
utilities.css    → brand utility classes (.btn-primary, .section-label, .reveal, etc.)
```

`project/styles.css` is the single entry point that imports all tokens in order.

## Site Stylesheets

- `project/styles.css` — design system tokens (imported first in layouts)
- `site.css` — site-specific styles layered on top of tokens (header, nav, footer, sections, heroes, cards)
- Both are linked in `_layouts/distance-learning.html` and `_layouts/landing.html`

## JavaScript (`site.js`)

Three behaviours:
1. Sticky header shadow — toggles `.scrolled` on `<header>` when `scrollY > 40`
2. Mobile nav toggle — hamburger ↔ close icon, toggles `.open` on `<nav>`
3. Scroll-reveal — `IntersectionObserver` adds `.visible` to `.reveal` elements
4. Lucide icons — `window.lucide.createIcons()` called on load (`lucide.min.js` bundled locally)

## Reusable Components (`project/components/core/`)

React JSX components compiled into `project/_ds_bundle.js` (UMD bundle, namespace `window.StPhilomenaSchoolDesignSystem_b41775`). Each component ships with a `.d.ts` type definition and a `.prompt.md` usage guide. Components: `Button`, `Badge`, `SectionLabel`, `PillarCard`, `StatBlock`, `PullQuote`, `GoldDivider`.

The UI kit at `project/ui_kits/website/` contains full-screen JSX recreations of the live site pages — useful as reference for layout and component usage patterns.

## Content Editing

Contact details, copyright year → `_data/settings.yml` (set per-programme under the `day_school` and `distance_learning` keys)  
FAQ items → `_data/faqs.yml`  
Page body copy → frontmatter and inline HTML in each `.html` page file  
CMS-managed fields → `admin/config.yml` (Netlify CMS)

## Assets

All images and the school crest live in `project/assets/`. The logo with transparent background is `project/assets/logo-full.png`; the crest alone is `project/assets/crest.png`.
