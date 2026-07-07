# Managing website design through the CMS (Day School and Distance Learning kept separate)

The CMS (**Sveltia CMS**, loaded from `admin/index.html`) lets a non-technical
editor change the **visual design** — colours, fonts, base type — of the two
programme sites **independently**:

- **Day School** (`/day-school/`)
- **Distance Learning** (`/distance-learning/`)

A design change on one programme **cannot** affect the other. This document
explains how that isolation works, how an editor uses it, and how to verify it.

> This feature is engine-agnostic: it lives entirely in the site's data files,
> layouts and CMS config, which Sveltia reads directly. (Sveltia supports the same
> built-in widgets and `config.yml` format as Netlify/Decap CMS, so nothing here is
> tied to a particular CMS engine.)

---

## 1. How the isolation works

The site already keeps the two programmes apart at the **content** level — e.g.
`_data/settings.yml` has separate `day_school:` and `distance_learning:` keys, and
each layout reads only its own key. Design uses exactly that pattern.

Editable design values live in **one data file per programme**. Each layout injects
**only its own** file as an inline `<style>:root{ … }</style>` block placed *after*
the linked stylesheet, so those values override the stylesheet defaults. Because
each layout reads a **different** data file, editing one programme's design cannot
touch the other.

```
_layouts/day-school.html         → reads _data/design_day_school.yml         → affects Day School only
_layouts/distance-learning.html  → reads _data/design_distance_learning.yml  → affects Distance Learning only
```

### Files that implement it

| File | Role |
|------|------|
| `_data/design_day_school.yml` | Day School's editable tokens (seeded from `day-school.css`) |
| `_data/design_distance_learning.yml` | Distance Learning's tokens (seeded from `project/tokens/`) |
| `_includes/design-tokens-day-school.html` | Day School's `:root` override — emits **only** the variables `day-school.css` uses (e.g. `--accent`, never `--crimson`) |
| `_includes/design-tokens-distance-learning.html` | Distance Learning's `:root` override — emits **only** the variables the DL stylesheets use (e.g. `--crimson`; `--primary`/`--accent` follow via `var()` aliases) |
| `_layouts/day-school.html` | Injects the Day School token block after its stylesheet link |
| `_layouts/distance-learning.html` | Injects the Distance Learning token block after its stylesheet links |
| `admin/config.yml` | Two collections: **"Day School — Design"** and **"Distance Learning — Design"** |

> **The root site** (`_layouts/default.html`) shares `project/styles.css` with
> Distance Learning and is intentionally left on the stylesheet defaults — it is not
> CMS-themable and is unaffected by design edits. To make it independently themable
> later, repeat the pattern with a `_data/design_root.yml` file injected into
> `default.html`.

---

## 2. Who can edit, and how

- Editors log in to the CMS at **`/admin/`** with GitHub (Sveltia handles the login
  directly — no external auth service to run).
- Anyone editing must have **write access** to
  `sps-it-admin/sps-it-admin.github.io` (add them as a repository collaborator).
- Every save is a real commit to `main`; GitHub Pages then rebuilds and publishes
  automatically (usually under a minute).

In the CMS sidebar the editor sees **"Day School — Design"** and
**"Distance Learning — Design"** as two separate items and can only ever edit one at
a time.

### What's editable

Per programme:

- **Colours** — Primary, Accent, Gold, Cream (page background), Body text. Entered
  as `oklch(L C H)` values; the form rejects anything that isn't (validation
  `pattern`).
- **Fonts** — Headings, Body, Labels/Nav, each locked to the three approved serif
  families (Playfair Display, Lora, Cinzel) via a dropdown. Sans-serif is not
  selectable — this enforces the brand rule.
- **Type** — Body text size and line height.

Structural CSS, spacing, radii, shadows and motion are **not** exposed — they stay
in the stylesheets, governed by the design system in `project/readme.md`. This keeps
edits safe and on-brand, and every change is a git commit that can be rolled back.

> **Note on type size.** The colour and font-family fields are fully wired. The
> body-size / line-height fields are wired too, but `day-school.css` and parts of
> `site.css` set body `font-size` as a literal value in places, so a size change may
> not take effect everywhere until those rules are switched to use the
> `--text-base` / `--leading-body` variables.

---

## 3. Verify the isolation (acceptance test)

1. **Baseline.** Both sites should look exactly as before — the seeded token values
   equal the previous hard-coded ones, so enabling this changed nothing visually.
2. **Change Day School only.** In the CMS, open *Day School — Design*, change
   **Accent** to a clearly different colour (e.g. `oklch(0.55 0.18 30)`), save. After
   the rebuild:
   - Day School links/buttons change. ✅
   - Distance Learning and the root site are **unchanged**. ✅  ← the key check
3. **Change Distance Learning only.** Repeat in *Distance Learning — Design* and
   confirm Day School is untouched.
4. **Revert** the test edits (or keep them if intended).
5. **Malformed input.** Try saving a colour without `oklch(` — the form should block
   it.

If step 2 or 3 ever changes the *other* site, the include was added to the wrong
layout — recheck the layout wiring in Section 1.

---

## 4. Extending it

- **Add a token** (e.g. `--gold-bright`): add it to **both** design data files, map
  it in **each** site's include (`_includes/design-tokens-day-school.html` and
  `_includes/design-tokens-distance-learning.html`) — emitting only the variable
  names that site's stylesheet actually uses — and add a field to **both** Design
  collections in `admin/config.yml`. Keep the two programmes symmetrical.
- **Theme the root site too:** create `_data/design_root.yml`, add a
  "Root Site — Design" collection, and include it in `_layouts/default.html`.
- **Add a new font:** add it to the `select` options **and** to the Google Fonts
  `<link>` in the layouts in the same change, or it won't load.
- **Preview:** design changes appear on the live site after the GitHub Pages
  rebuild. The CMS preview pane does not load the site stylesheets, so treat the
  published site as the source of truth.
