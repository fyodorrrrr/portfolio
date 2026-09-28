---
name: Jose Aquino — Portfolio
description: An engineer's editorial masthead — dateline headings, hairline rules, and one rare accent, in service of showing real work plainly.
colors:
  pine-ink: "#2c4a3e"
  paper: "#f7f7f5"
  paper-deep: "#ffffff"
  near-black-ink: "#171717"
  soft-graphite: "#656565"
  faint-ink: "rgba(23, 23, 23, 0.62)"
  hairline-grey: "#e5e5e2"
  ghost-divider: "rgba(23, 23, 23, 0.06)"
typography:
  display:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.25rem, 7.2vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  plate: "12px"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  section: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.near-black-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 0.4rem 0"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.soft-graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.55rem"
  card:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.plate}"
    padding: "0"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
---

# Design System: Jose Aquino — Portfolio

## Overview

**Creative North Star: "The Engineer's Masthead"**

This is a newspaper masthead's discipline applied to a practical-systems engineer's portfolio. The vocabulary is literally editorial — the codebase's own class names call section headers `.dateline` and the hero `.masthead` — but the discipline is what carries over, not the decoration. Dateline-style headings, small tracked-caps "eyebrow" labels, and hairline rules organize the page the way a broadsheet organizes a story: hierarchy through typography and rule-lines, not through color, shadow, or ornament.

The mood is quiet and restrained by construction: flat surfaces, square corners everywhere except photographic frames, borders instead of shadows, and exactly one accent color used so rarely it functions as punctuation rather than decoration. Nothing about this system is loud. Confidence comes from the display type's scale and the mono labels' certainty, not from visual noise.

The system also enforces an honesty constraint that started as a product principle and became a visual one: when a project has no real screenshot, the design shows an explicit uppercase mono placeholder inside the plate frame rather than a stock image or gradient standing in for content that doesn't exist yet. The visual system refuses to fake evidence.

**Key Characteristics:**
- Editorial structure (dateline headings, eyebrow labels, hairline dividers) borrowed from print, not screen-native card/shadow conventions
- Flat by construction — no shadows anywhere in the system; depth comes from tonal contrast (paper vs. paper-deep vs. ink) and hairline borders only
- Square by default — 0px radius on every interactive element and every text container; radius is reserved for two narrow exceptions (photo frames, icon-only circular controls)
- One accent, used as punctuation — Pine Ink appears only as emphasized text color, never as a background or a UI-state color
- A single typeface (Helixa) for everything, with functional text (labels, tags, buttons, metadata) distinguished by case and tracking — uppercase, letter-spaced, smaller scale — rather than by a separate mono font

## Colors

The palette is almost entirely achromatic — warm paper neutrals and near-black ink — with a single desaturated accent held in reserve.

### Primary
- **Pine Ink** (`#2c4a3e`): The only accent in the system. Used exclusively as a text color for a single emphasized word in the hero headline and for bolded terms in the About copy. Never used as a background, a border, a button color, or a state color (hover/focus/active). Its rarity is what gives it weight.

### Neutral
- **Warm Paper** (`#f7f7f5`): The default page background everywhere except the footer.
- **Pure White** (`#ffffff`): Slightly brighter than Warm Paper; used for surfaces that sit "above" the page — image/screenshot plates and the hover state of circular icon buttons.
- **Near-Black Ink** (`#171717`): Primary text color, and the one place the palette inverts — the footer uses it as a background with Warm Paper text.
- **Soft Graphite** (`#656565`): Secondary text — subheads, muted copy, nav links at rest, tag/chip text.
- **Faint Ink** (`rgba(23, 23, 23, 0.62)`): Tertiary text — resting-state form labels and the "no image yet" placeholder caption inside empty project plates. Deliberately kept just above WCAG AA contrast on Warm Paper (~4.8:1); don't drop it further.
- **Hairline Grey** (`#e5e5e2`): The system's only border color at full opacity — dividers, plate frames, chip/tag outlines, the sticky nav's bottom rule.
- **Ghost Divider** (`rgba(23, 23, 23, 0.06)`): A barely-there divider used only inside dense stacked lists (the About marginalia rows, the mobile nav panel's link separators) where a full Hairline Grey rule would be too heavy.

### Named Rules
**The One Voice Rule.** Pine Ink is the system's only chromatic color. If a second accent color is ever needed, that is a deliberate system change, not a per-component decision — don't reach for an arbitrary hex to solve a one-off emphasis problem.

**The No Fake Evidence Rule.** A project plate without a real screenshot shows the uppercase mono placeholder treatment, never a substitute image, gradient, or icon standing in for content that doesn't exist. This is a visual expression of a product-level commitment: don't fabricate proof.

## Typography

**Display/Body/Label Font:** Helixa (self-hosted, with Arial/Helvetica/sans-serif fallback) — the system's only typeface.

**Character:** Helixa carries every surface on the page, reading and functional alike, at a single family with three loaded weights (400 Regular, 450 Book as the body default, 700 Bold for display and emphasis). Functional text (labels, tags, buttons, metadata) doesn't switch typeface — it's marked instead by uppercase case, letter-spacing, and a smaller size. One voice, two postures.

**Prior state (changed):** this system previously used a system monospace stack (`ui-monospace, 'SF Mono', 'Consolas', 'Menlo', monospace`) for all functional text, rendering as Consolas on most Windows/Chrome setups. That distinction was intentionally retired in favor of Helixa everywhere — noted here so a future pass doesn't "fix" the label font back to mono thinking it drifted.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 7.2vw, 5.5rem)`, line-height 1.05): The hero `<h1>` only. Also reused at a smaller clamp (`clamp(2.25rem, 5vw, 3.5rem)`) for project case-study page titles.
- **Headline** (600 requested / renders as the Bold 700 face — see note below, `clamp(1.6rem, 3.4vw, 2.35rem)`): Section dateline headings (About, Projects, Contact).
- **Title** (500, 1.3rem, line-height 1.6): Lede paragraphs directly under a section heading (About's opening paragraph). Contact's lede uses a related but distinct treatment at 1.5rem/line-height 1.4.
- **Body** (450, 1rem, line-height 1.5): Section descriptions, project captions, case-study body copy. Sizes flex slightly by context (0.92rem–1.15rem) but stay at the Book weight.
- **Label** (400, 0.72rem, letter-spacing 0.14em, uppercase): Eyebrow labels above section headings. Sibling treatments at other sizes (0.68rem for tags, 0.76–0.95rem for buttons) share the same uppercase/tracked identity at different scale — all in Helixa, same as prose.

### Named Rules
**The Case & Tracking Rule.** Functional text (buttons, tags, labels, nav metadata) is marked as functional by uppercase case and letter-spacing, not by a separate typeface — the whole system runs on Helixa. If a new functional element needs to read as "not prose," reach for `text-transform: uppercase` and tracked `letter-spacing`, not a font-family swap.

**Implementation note (not a design decision — a rendering fact to know):** only three Helixa weights are loaded (400, 700, 450 Book — declared as CSS weight 450, a keyword `font-weight: 450` won't match a named `600` request either). Any place calling for `font-weight: 600` (the section `<h2>` dateline headings) has no matching face; per the CSS font-matching algorithm, browsers resolve a requested weight above 500 to the *nearest heavier* available face first, which lands on the Bold (700) face here. Section headings therefore render visually identical in weight to Display text. If a true distinct semibold is ever wanted, a fourth weight must be loaded — don't try to fix it by changing the requested weight number alone.

## Layout

The page is a single fluid column: `--content-max: 72rem` centered via `margin: 0 auto`, with fluid side gutters (`clamp(1.5rem, 6vw, 5rem)`) rather than fixed breakpoint padding. This same column governs the sticky nav's inner row, the hero, and every section body — chrome and content share one alignment grid rather than nav being full-bleed. The hero narrows further to a 56rem reading column (`--masthead-grid`) since its job is a single punchy statement, not a content-dense layout.

Vertical rhythm comes from a single reusable `.entry` unit: 5.5rem top/bottom padding on desktop, dropping to 3.25rem under 640px. Every major section is one `.entry`, so the page's vertical cadence is consistent by construction rather than tuned per-section.

**Responsive tiers** (three independent breakpoints, not one universal one):
- **640px** — section padding compresses, and the project carousel switches from a centered 78vw/60rem-max panel width to an 88vw edge-aligned one.
- **720px** — the primary nav switches from a hamburger-triggered slide-down panel to the full inline nav + social icons. Chosen deliberately lower than the content-grid breakpoint below, since the nav needs less horizontal room than a two-column content grid does.
- **900px** — two-column content grids (About's text/marginalia split, Contact's copy/form split) collapse to a single stacked column.

Section entry uses a fade + rise-in reveal on scroll (14px translateY, 0.6s ease, IntersectionObserver-triggered, one-shot) — respected only when the visitor hasn't requested reduced motion; the reveal is skipped (elements simply appear in place) under `prefers-reduced-motion: reduce`.

## Elevation & Depth

Flat, deliberately. There are no `box-shadow` declarations anywhere in the system. Depth and hierarchy come entirely from two devices: hairline borders (`--line` at full or low opacity) marking a surface's edge, and tonal contrast between three adjacent neutrals (Warm Paper, Pure White, Near-Black Ink). A "raised" surface — a photo plate, a hovered icon button — gets a slightly brighter background and/or a hairline border, never a shadow.

### Named Rules
**The Flat-By-Construction Rule.** Do not introduce `box-shadow` to signal elevation or interactivity. If something needs to read as "above" the page, lighten its background (Pure White against Warm Paper) or give it a hairline border — that vocabulary is already established and a shadow would be a foreign material in this system.

## Shapes

Square by default, with exactly two named exceptions. Every button, chip, form field, and section container has 0px radius — sharp, printed-matter corners. The two departures are both deliberate and narrow: **plates** (image/screenshot frames) get a 12px radius, marking them as the system's one "photographic" material distinct from the flat typographic page around them; and **icon-only circular controls** (the project carousel's prev/next buttons) are fully round (50%), marking them as physical, tappable objects rather than text.

### Named Rules
**The Two-Exception Rule.** Radius exists only on photographic containers (12px) and icon-only round controls (50%). A new component that isn't one of those two things gets 0px radius, full stop — don't introduce an in-between radius (8px, "rounded-md," etc.) as a default.

## Components

### Buttons
Two variants, both uppercase/tracked Helixa — never a color-fill-on-hover pattern.
- **Ghost / Link CTA** (hero's "let's talk," case-study "Visit live site"): No visible container at rest — just tracked uppercase text with a bottom hairline border and a trailing arrow glyph. **Hover:** the gap between text and arrow increases (0.65rem → 0.9rem) rather than any color change — motion communicates interactivity, not color.
- **Primary / Solid** (contact form's submit button): Filled Near-Black Ink background, Warm Paper text, 0.85rem/1.6rem padding, 0px radius. **Hover:** same gap-widening animation as the ghost variant, not a background color shift. **Disabled:** opacity 0.6, `cursor: not-allowed` — no other visual treatment.

### Chips
- **Style:** Transparent background, Hairline Grey border, Soft Graphite text, Helixa at 0.68rem, 0.3rem/0.55rem padding, 0px radius. Used for tech-stack tags (About) and case-study tech lists — always plain, informational metadata, never a filter/selectable state (no selected/unselected variants exist in the system yet).

### Cards / Plates
- **Corner Style:** 12px radius (the system's one rounded container type).
- **Background:** Pure White, with a Hairline Grey 1px border.
- **Shadow Strategy:** None — see Elevation & Depth. Depth comes from the Pure White vs. Warm Paper tonal step plus the hairline border.
- **Content:** A real image (subtle 1.02x scale-up on hover, disabled under reduced motion) or, when no image exists yet, an uppercase Helixa placeholder caption centered in the frame — never a substitute graphic. See The No Fake Evidence Rule.

### Inputs / Fields
- **Style:** No visible container — transparent background, no side/top borders, a single Hairline Grey bottom border. Labels sit inline at rest (Faint Ink, 0.78rem) and float up on focus or once filled (shrinking to 0.66rem, tracked, uppercase, Near-Black Ink) — a floating-label pattern, not a placeholder-as-label pattern.
- **Focus:** Border color shifts from Hairline Grey to Near-Black Ink; no glow, no shadow.
- **Disabled (submitting state):** Not yet a distinct input treatment — currently only the submit button reflects in-flight state.

### Navigation
- **Style:** Sticky top bar, Warm Paper background, single Hairline Grey bottom border, contents constrained to the shared `--content-max` column (not full-bleed).
- **Desktop (≥720px):** Inline nav links (Soft Graphite at rest) with an animated underline that scales in from the left on hover/active (`scaleX(0) → scaleX(1)`, 0.2s ease); the active link is additionally bolded (700). Social icons sit right-aligned in the same row.
- **Mobile (<720px):** A single hamburger toggle (44×44px minimum hit area, right-aligned) opens a slide-down panel with stacked nav links (Ghost Divider row separators) and the same social icons. The panel traps focus and closes on Escape or an outside click.
- **Accessibility:** A visually-hidden "Skip to content" link is the first focusable element in the header, revealed on keyboard focus.

### Footer (signature component)
The system's one deliberate color inversion: Near-Black Ink background with Warm Paper text, where every other surface on the page is light-on-dark's opposite. It's the visual equivalent of a masthead's closing rule — a clear "this is the end of the page" signal that no other section provides.

## Do's and Don'ts

### Do:
- **Do** keep Pine Ink to text-only emphasis — never a background, border, or button fill (The One Voice Rule).
- **Do** default every new interactive element to 0px radius; only photo plates (12px) and icon-only round controls (50%) get an exception (The Two-Exception Rule).
- **Do** signal hover/interactivity on buttons and links through motion (gap widening, underline scale-in) rather than a background color swap — the system has no hover-fill button anywhere.
- **Do** use the uppercase/tracked treatment for anything functional (labels, tags, buttons, nav metadata) — Helixa carries both registers now, so case and tracking (not font-family) are what mark something as functional rather than prose.
- **Do** show the explicit placeholder treatment for a project without a real screenshot rather than any stand-in graphic (The No Fake Evidence Rule).

### Don't:
- **Don't** add `box-shadow` anywhere to signal elevation — this system conveys depth through tonal contrast and hairline borders only (The Flat-By-Construction Rule).
- **Don't** introduce a second accent color for a one-off emphasis need; that's a system-level decision, not a component-level one.
- **Don't** let the nav's content go full-bleed — it shares the same `--content-max` column as every section below it.
- **Don't** fabricate a project's evidence (screenshots, repo links, metrics) to fill a visual gap; an honest placeholder is the correct component state, not a temporary embarrassment to hide.
