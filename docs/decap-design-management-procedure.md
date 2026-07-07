# Procedure — Managing Website Design with Decap CMS (Day School and Distance Learning kept separate)

This procedure sets up **Decap CMS** so a non-technical editor can change the
**visual design** (colours, fonts, type sizes) of the two programme sites —
**Day School** (`/day-school/`) and **Distance Learning** (`/distance-learning/`) —
**independently**, so that a design change on one site can never alter the other.

It is written specifically for this repository. Every file path, token name and
snippet below is real and ready to paste.

---

## 1. Why this works — the isolation principle

The site already keeps the two programmes apart at the **content** level: for
example `_data/settings.yml` has separate `day_school:` and `distance_learning:`
keys, and the two layouts read only their own key. We extend exactly that pattern
to **design**.

Design values are CSS custom properties (`--navy`, `--gold`, `--font-body`, …).
Today they are hard-coded in `:root` inside stylesheets:

| Site | Layout | Stylesheet(s) linked | Where its `:root` tokens live |
|------|--------|----------------------|-------------------------------|
| Day School | `_layouts/day-school.html` | `/day-school.css` | top of `day-school.css` (self-contained) |
| Distance Learning | `_layouts/distance-learning.html` | `/project/styles.css` + `/site.css` | `project/tokens/*.css` |
| Root site | `_layouts/default.html` | `/project/styles.css` + `/site.css` | `project/tokens/*.css` (shared with DL) |

**The mechanism:** we move the *editable* tokens into **one design data file per
programme**, and each layout injects **only its own** data file as an inline
`<style>:root{ … }</style>` block placed *after* the linked stylesheet. Because an
inline `<style>` later in the document overrides the earlier `<link>` at equal
specificity, the data file wins; and because each layout reads a **different** data
file, editing one programme's design **cannot** touch the other.

```
day-school.html      →  reads _data/design_day_school.yml        →  affects Day School only
distance-learning.html → reads _data/design_distance_learning.yml →  affects Distance Learning only
```

> **Note on the root site.** `default.html` shares `project/styles.css` with
> Distance Learning. That is fine — the requirement is only that Day School and
> Distance Learning stay independent, and they do. If the root site should also be
> independently themable later, repeat Step 3 with a third file
> `_data/design_root.yml` injected into `default.html`. Until then the root site
> keeps using the stylesheet defaults and is unaffected by CMS design edits.

---

## 2. Prerequisites & decisions

1. **CMS engine.** `admin/index.html` currently loads **Sveltia CMS**, which reads
   the same `admin/config.yml` format. This procedure switches it to **Decap CMS**
   as requested (Step 5). The `config.yml` collections we add work identically on
   either engine, so the design-management work in Steps 3–4 is engine-agnostic.

2. **Authentication (the one real infrastructure step).** The backend is
   `github` and the site is hosted on **GitHub Pages**, which cannot run the OAuth
   handshake Decap's GitHub backend needs. You must provide an external OAuth
   broker. Choose one (see Step 5) **before** going live, or editors will not be
   able to log in. (Sveltia is currently in use precisely because it can talk to
   GitHub with a lighter-weight auth flow — keep that in mind when deciding.)

3. **Scope of "design management".** Expose **tokens** only — colours, font
   families, base type size/line-height. Do **not** expose raw CSS or structural
   layout through the CMS; that stays in the stylesheets and the design system
   documented in `project/readme.md`. This keeps edits safe and on-brand
   (no sans-serif, no emoji, sharp corners — per `CLAUDE.md`).

---

## 3. Create per-programme design data files

Create two new data files holding the editable tokens. Seed them with the
**current** values so the switch is visually a no-op.

**`_data/design_day_school.yml`** (values from the `:root` block in `day-school.css`):

```yaml
# ── Day School design tokens (edited in the CMS under "Day School — Design") ──
# Colours are oklch(L C H). Fonts must remain serif (brand rule: no sans-serif).
colors:
  primary:    "oklch(0.31 0.085 247)"   # --navy / --primary  (headers, primary ground)
  accent:     "oklch(0.55 0.16 245)"    # --accent            (links, CTAs)
  gold:       "oklch(0.72 0.12 80)"     # --gold              (rules, dividers, ornament)
  cream:      "oklch(0.98 0.015 90)"    # --cream / --background (page ground)
  foreground: "oklch(0.22 0.06 247)"    # --foreground        (body text)
fonts:
  display: "Playfair Display"            # headings
  body:    "Lora"                        # body copy
  label:   "Cinzel"                      # eyebrows / nav / buttons (UPPERCASE)
type:
  base_size:    "17px"                   # body font-size
  body_leading: "1.75"                   # body line-height
```

**`_data/design_distance_learning.yml`** (values from `project/tokens/colors.css`
and `typography.css`):

```yaml
# ── Distance Learning design tokens (edited under "Distance Learning — Design") ──
colors:
  primary:    "oklch(0.27 0.065 250)"   # --navy
  accent:     "oklch(0.38 0.13 22)"     # --crimson (header, CTAs)
  gold:       "oklch(0.72 0.12 80)"     # --gold
  cream:      "oklch(0.98 0.015 90)"    # --cream (page ground)
  foreground: "oklch(0.18 0.04 250)"    # --foreground (body text)
fonts:
  display: "Playfair Display"
  body:    "Lora"
  label:   "Cinzel"
type:
  base_size:    "17px"
  body_leading: "1.75"
```

> Keep the token **set** identical across both files so the CMS forms match and the
> include (below) is shared. The **values** differ per programme — that is the point.

---

## 4. Inject each file into its own layout

### 4a. Add a shared include

Create **`_includes/design-tokens.html`**. It renders a `:root` override from
whichever data object the caller passes in — it holds no values of its own:

```liquid
{%- comment -%}
  Emits a :root override block from a design data object.
  Usage: {% include design-tokens.html design=site.data.design_day_school %}
  Placed in <head> AFTER the stylesheet <link> so these values win.
{%- endcomment -%}
{%- assign d = include.design -%}
<style id="design-tokens">
:root{
  --navy: {{ d.colors.primary }};
  --primary: {{ d.colors.primary }};
  --accent: {{ d.colors.accent }};
  --crimson: {{ d.colors.accent }};
  --gold: {{ d.colors.gold }};
  --cream: {{ d.colors.cream }};
  --background: {{ d.colors.cream }};
  --foreground: {{ d.colors.foreground }};
  --text-body: {{ d.colors.foreground }};
  --font-display: "{{ d.fonts.display }}", Georgia, serif;
  --font-body: "{{ d.fonts.body }}", Georgia, serif;
  --font-label: "{{ d.fonts.label }}", "Times New Roman", serif;
  --text-base: {{ d.type.base_size }};
  --leading-body: {{ d.type.body_leading }};
}
</style>
```

> The include maps each editable token onto **every** stylesheet variable that
> depends on it (e.g. `primary` drives both `--navy` and `--primary`; `accent`
> drives `--crimson` on DL and `--accent` on Day School). Adjust the mapping if you
> expose more tokens later. Only `:root` variables are overridden — no structural
> CSS is touched.

### 4b. Wire Day School

In **`_layouts/day-school.html`**, immediately **after** line 14
(`<link rel="stylesheet" href="/day-school.css">`), add:

```liquid
  {% include design-tokens.html design=site.data.design_day_school %}
```

### 4c. Wire Distance Learning

In **`_layouts/distance-learning.html`**, immediately **after** line 16
(`<link rel="stylesheet" href="/site.css">`), add:

```liquid
  {% include design-tokens.html design=site.data.design_distance_learning %}
```

> **Do not** add the include to `_layouts/default.html` unless/until you also want
> the root site themable — leaving it out is what keeps the root site on the
> shared stylesheet defaults.

### 4d. Custom (non-Google) fonts — important guard-rail

The layouts load Playfair Display, Lora and Cinzel from Google Fonts via a fixed
`<link>`. If an editor types a **different** font name into the CMS, the CSS
variable will change but the font file will not be loaded, so the browser falls
back to `Georgia`/serif. To keep editors safe and on-brand, restrict the font
fields to the three approved families using a `select` widget (Step 4 of the CMS
config below). Only add a new font to the allowed list **and** to the Google Fonts
`<link>` in the same change.

---

## 5. Switch the admin to Decap CMS and set up login

### 5a. Point the admin at Decap

Replace the script tag in **`admin/index.html`** (currently Sveltia):

```html
<!-- was: <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script> -->
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
```

Pin a specific version in production (e.g. `decap-cms@3.x.y`) rather than a range,
to avoid a CDN update changing behaviour unexpectedly.

### 5b. Provide the GitHub OAuth broker (required on GitHub Pages)

Decap's `backend: github` needs a server to complete OAuth. Pick **one**:

- **Recommended — a small hosted OAuth relay.** Deploy a ready-made GitHub OAuth
  provider (e.g. a Cloudflare Worker or Netlify/Vercel function running the
  standard `netlify-cms-oauth-provider` / `decap` OAuth code). Then:
  1. Create a **GitHub OAuth App** (GitHub → Settings → Developer settings →
     OAuth Apps). Homepage `https://sps-it-admin.github.io`, callback URL =
     your relay's callback endpoint.
  2. Put the OAuth App's Client ID/Secret in the relay's environment.
  3. Add the relay host to `admin/config.yml`:
     ```yaml
     backend:
       name: github
       repo: sps-it-admin/sps-it-admin.github.io
       branch: main
       base_url: https://your-oauth-relay.example.com   # the relay origin
       # auth_endpoint: auth   # only if your relay uses a non-default path
     ```
- **Alternative — stay on Sveltia CMS**, which authenticates to GitHub without a
  separate relay. The `config.yml` from Steps 3–4 works unchanged; you would simply
  **not** do Step 5a. Choose this if standing up an OAuth relay is not worth it.

### 5c. Editor permissions

Anyone who logs in must have **write access** to
`sps-it-admin/sps-it-admin.github.io`. Add each content editor as a repository
collaborator (or via a team). Every CMS save is a real commit to `main`, which
GitHub Pages then rebuilds and publishes automatically.

---

## 6. Add the two "Design" collections to `admin/config.yml`

Append these two collections (they mirror each other, one file each). Colours use
`string` widgets with a validation `pattern` so a malformed value is rejected in
the form; fonts use a `select` restricted to the approved families.

```yaml
  - name: "day_school_design"
    label: "Day School — Design"
    files:
      - name: "design"
        label: "Colours, Fonts & Type"
        file: "_data/design_day_school.yml"
        fields:
          - label: "Colours"
            name: "colors"
            widget: "object"
            fields:
              - {label: "Primary (headers/ground)", name: "primary", widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value, e.g. oklch(0.31 0.085 247)"], hint: "Deep institutional blue/navy."}
              - {label: "Accent (links/buttons)",    name: "accent",  widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Gold (rules/ornament)",     name: "gold",    widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Cream (page background)",   name: "cream",   widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Body text",                 name: "foreground", widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
          - label: "Fonts"
            name: "fonts"
            widget: "object"
            hint: "Serif only — the brand never uses a sans-serif font."
            fields:
              - {label: "Headings", name: "display", widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Playfair Display"}
              - {label: "Body",     name: "body",    widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Lora"}
              - {label: "Labels/Nav", name: "label", widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Cinzel"}
          - label: "Type"
            name: "type"
            widget: "object"
            fields:
              - {label: "Body text size", name: "base_size", widget: "string", default: "17px", pattern: ['px$', "End with px, e.g. 17px"]}
              - {label: "Body line height", name: "body_leading", widget: "string", default: "1.75"}

  - name: "distance_learning_design"
    label: "Distance Learning — Design"
    files:
      - name: "design"
        label: "Colours, Fonts & Type"
        file: "_data/design_distance_learning.yml"
        fields:
          - label: "Colours"
            name: "colors"
            widget: "object"
            fields:
              - {label: "Primary (headers/ground)", name: "primary", widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Accent (links/buttons)",    name: "accent",  widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Gold (rules/ornament)",     name: "gold",    widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Cream (page background)",   name: "cream",   widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
              - {label: "Body text",                 name: "foreground", widget: "string", pattern: ['^oklch\(', "Use an oklch(L C H) value"]}
          - label: "Fonts"
            name: "fonts"
            widget: "object"
            hint: "Serif only — the brand never uses a sans-serif font."
            fields:
              - {label: "Headings", name: "display", widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Playfair Display"}
              - {label: "Body",     name: "body",    widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Lora"}
              - {label: "Labels/Nav", name: "label", widget: "select", options: ["Playfair Display", "Lora", "Cinzel"], default: "Cinzel"}
          - label: "Type"
            name: "type"
            widget: "object"
            fields:
              - {label: "Body text size", name: "base_size", widget: "string", default: "17px", pattern: ['px$', "End with px, e.g. 17px"]}
              - {label: "Body line height", name: "body_leading", widget: "string", default: "1.75"}
```

The two collections are deliberately separate top-level entries with separate
`file:` targets. In the CMS sidebar the editor sees **"Day School — Design"** and
**"Distance Learning — Design"** as distinct items and can never edit both at once.

---

## 7. Verify the isolation (acceptance test)

Run this before announcing the feature to editors:

1. **Baseline.** Commit Steps 3–4, let GitHub Pages publish. Confirm both sites
   look **exactly** as before (the seeded values equal the old hard-coded ones).
2. **Change Day School only.** In the CMS, open *Day School — Design*, change
   **Accent** to a clearly different colour (e.g. `oklch(0.55 0.18 30)`), save.
   After the rebuild:
   - Day School links/buttons change. ✅
   - Distance Learning and the root site are **unchanged**. ✅  ← the key check
3. **Change Distance Learning only.** Repeat in *Distance Learning — Design* with a
   distinct value and confirm Day School is untouched.
4. **Revert** the test edits (or keep them if intended).
5. **Malformed input.** Try saving a colour without `oklch(` — the form should
   block it via the `pattern` rule.

If step 2 or 3 ever changes the *other* site, the include was added to the wrong
layout or a shared stylesheet still hard-codes the token — recheck Step 4.

---

## 8. Roll-out checklist

- [ ] `_data/design_day_school.yml` and `_data/design_distance_learning.yml` created with current values (Step 3)
- [ ] `_includes/design-tokens.html` added (Step 4a)
- [ ] Include wired into `day-school.html` after the stylesheet link (Step 4b)
- [ ] Include wired into `distance-learning.html` after the stylesheet links (Step 4c)
- [ ] Two Design collections appended to `admin/config.yml` (Step 6)
- [ ] Admin switched to Decap and version pinned (Step 5a)
- [ ] GitHub OAuth broker deployed and `base_url` set — **or** decision made to stay on Sveltia (Step 5b)
- [ ] Editors added as repo collaborators (Step 5c)
- [ ] Isolation acceptance test passed (Step 7)
- [ ] Fonts list in CMS matches the Google Fonts `<link>` in the layouts (Step 4d)

---

## 9. Notes, limits & future extensions

- **What is editable vs. not.** Only the tokens listed are CMS-editable. Spacing
  scale, radii, shadows, motion and all structural CSS remain in
  `project/tokens/*.css`, `day-school.css` and `site.css`, governed by the design
  system in `project/readme.md`. This is intentional — it keeps non-technical edits
  safe and reversible (every save is a git commit that can be rolled back).
- **Colour format.** Values are `oklch(L C H)` to match the existing tokens. A
  hex-only `color` widget would silently break the palette, so we use validated
  `string` fields. If editors prefer a picker, add a curated `select` of named
  preset palettes instead of free entry.
- **Adding a token.** To expose another variable (e.g. `--gold-bright`): add it to
  both design data files, map it in `_includes/design-tokens.html`, and add a field
  to both Design collections. Keep the two programmes symmetrical.
- **Theming the root site too.** Create `_data/design_root.yml`, add a
  "Root Site — Design" collection, and include it in `_layouts/default.html`. This
  would decouple the root site from the Distance Learning stylesheet defaults.
- **Preview.** Design changes appear on the live site only after the GitHub Pages
  rebuild (typically under a minute). Decap's in-editor preview pane does not load
  the site stylesheets, so treat the published site as the source of truth when
  checking a design change.
