# Design System — NOCTE

Seeded from brand brief. Re-run `/impeccable document` once the visual system
is implemented in code to capture real tokens.

---

## Design Dials

- **Creativity**: 7 — editorial confidence, every choice intentional; not maximalist
- **Density**: 3 — generous spacing, curated presence; negative space is active
- **Variance**: 6 — asymmetric type scale, varied rhythm; not chaotic
- **Motion Intent**: 3 — subtle and purposeful only; ease-out, no theatrics

---

## Color Strategy

**Restrained monochromatic.** No accent color. No gradients. Contrast is achieved
entirely through value — the step from surface-3 to foreground must feel like
light on obsidian. Every tint carries a near-zero cool-blue chroma (0.006) to
prevent the palette from reading as pure printer black.

| Token | OKLCH | Approx Hex | Role |
|---|---|---|---|
| `canvas` | `oklch(6.5% 0.006 264)` | `#0A0A0A` | Page background |
| `surface-1` | `oklch(10.5% 0.006 264)` | `#1A1A1A` | Primary surfaces, cards |
| `surface-2` | `oklch(17% 0.006 264)` | `#2A2A2A` | Elevated surfaces, drawers |
| `surface-3` | `oklch(23% 0.006 264)` | `#3A3A3A` | Borders, dividers, inputs |
| `muted` | `oklch(56% 0.005 264)` | `#888888` | Secondary text, metadata |
| `subtle` | `oklch(81% 0.005 264)` | `#CCCCCC` | Tertiary text, labels, captions |
| `foreground` | `oklch(98% 0.006 264)` | `#FAFAFA` | Primary text |
| `accent` | none | — | Monochromatic only |

**Rules:**
- Never use pure `#000` or `#fff` — always tinted toward `264` (cool blue)
- Hover states: raise surface value by one step (canvas → surface-1)
- Active/selected states: invert locally (foreground bg, canvas text)
- No border-left/border-right accents — full borders or nothing

---

## Typography

**Display:** Playfair Display — serif, editorial, high contrast strokes.
Use for all headings, hero text, section titles, product names at large sizes.
- Weights: 400 (regular), 400 italic (for editorial pull-quotes), 700 (bold, use sparingly)
- Do NOT use Playfair Display below 20px

**UI:** DM Sans — geometric, tight, neutral. Use for all UI chrome, prices,
labels, navigation links, form elements, data.
- Weights: 300 (light, for metadata), 400 (regular), 500 (medium, for CTAs)
- Letter-spacing: +0.02em for uppercase labels, 0 for all other use

**Mono:** JetBrains Mono — for order numbers, SKUs, technical identifiers only.

### Type Scale

| Step | Size | Font | Weight | Use |
|---|---|---|---|---|
| `display` | 72–96px | Playfair Display | 400 | Hero headings |
| `h1` | 48px | Playfair Display | 400 | Page titles |
| `h2` | 32px | Playfair Display | 400 | Section titles |
| `h3` | 22px | Playfair Display | 400 | Sub-sections |
| `lead` | 18px | DM Sans | 300 | Lede/intro paragraphs |
| `body` | 15px | DM Sans | 400 | Body copy |
| `label` | 12px | DM Sans | 500 | All-caps labels, UI chrome |
| `caption` | 11px | DM Sans | 400 | Metadata, timestamps |
| `mono` | 13px | JetBrains Mono | 400 | SKUs, order numbers |

**Rules:**
- Body line length: max 65ch
- Display headings: max 45ch (line breaks are editorial choices)
- Line height: 1.1 for display, 1.3 for h2/h3, 1.6 for body
- No text-transform: uppercase except `label` step

---

## Layout

**Grid:** 12-column, 24px gutters, max-width 1440px. Do not center everything
in a narrow container. Let content breathe against the dark canvas.

**Spacing scale (8px base):**
- `xs`: 4px — tight inline gaps
- `sm`: 8px — component internals
- `md`: 16px — between related elements
- `lg`: 32px — between sections within a block
- `xl`: 64px — between major page sections
- `2xl`: 128px — hero breathing room

**Rules:**
- Vary spacing for rhythm — uniform padding is monotony
- Full-bleed sections are valid and preferred over boxed containers
- Cards only when they are the best affordance; nested cards never
- No modal as first solution — exhaust inline alternatives first

---

## Components

### Buttons
- Primary: `foreground` bg, `canvas` text — inversion of the page
- Secondary: transparent bg, `surface-3` border, `subtle` text
- No rounded corners — `border-radius: 0` or `2px` maximum
- No shadows — elevation is handled by surface steps, not drop shadows
- Hover: opacity 0.85 on primary; border steps up to `muted` on secondary

### Inputs / Forms
- Background: `surface-1`, border: `surface-3`
- Focus border: `muted` (single step up, no glow, no color)
- Label: `label` typescale, `subtle` color, spaced above field
- Error state: `subtle` text + `surface-3` border with indicator — never red

### Navigation
- Top-level nav: DM Sans 500, 13px, letter-spacing +0.08em, all-caps optional
- No sticky nav shadows — use opacity transition if needed
- Mobile: drawer from left, `surface-2` background

### Product Cards
- No traditional card shape — present on `canvas` or `surface-1` directly
- Product name: Playfair Display h3 size
- Price: DM Sans mono-weight, `subtle`
- No star ratings in the primary view — credibility comes from curation, not social proof
- Hover: subtle scale (1.01) or border reveal — never color change

### Dividers
- `surface-3` color, 1px — used sparingly
- Prefer whitespace over dividers wherever possible

---

## Motion

- Default: no animation unless it communicates state
- Transition duration: 180ms for state changes, 280ms for layout shifts
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) — everything
- Never animate: layout properties (width, height, margin, padding)
- Page transitions: opacity fade only, 200ms

**Banned motion:**
- Bounce, elastic, spring overshoot
- Looping decorative animations
- Scroll-triggered entrance animations unless they serve information

---

## Anti-patterns

- Side-stripe borders — rewrite with full borders or surface steps
- Gradient text — single foreground color, emphasis via weight/size
- Glassmorphism — transparent blur effects; not on brand
- Hero-metric template — large number, small label, gradient accent
- Identical card grids — same-sized icon + heading + text repeated
- Color accent on hover — hover is structural, not chromatic
- Poppins, Inter as heading font — UI sans only; Playfair Display for display
- White or light-gray backgrounds — canvas is always dark
- Lifestyle photography as decoration — if photography, it must earn its place
- Social proof clusters (star ratings, review counts) in primary product views
