---
name: Jose Aquino — Portfolio
description: A quiet editorial portfolio with a product-site structure — big light-weight headings, a pinned index beside stacked project stages, hairline rules, and one muted green accent, in service of showing real work plainly.
colors:
  pine-ink: "#2c4a3e"
  pine-tint: "#3f7a5d"
  paper: "#f7f7f5"
  paper-deep: "#ffffff"
  near-black-ink: "#171717"
  soft-graphite: "#656565"
  faint-ink: "rgba(23, 23, 23, 0.62)"
  pale-ink: "rgba(23, 23, 23, 0.5)"
  hairline-grey: "#e5e5e2"
  ghost-divider: "rgba(23, 23, 23, 0.06)"
typography:
  display:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.5rem, 9.5vw, 8.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  section-title:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  index:
    fontFamily: "Helixa, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
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
  tag: "8px"
  shot: "10px"
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

**Creative North Star: "The Engineer's Masthead", grown into a showcase**

The system started as a newspaper masthead's discipline applied to an engineer's portfolio — hierarchy through typography and hairline rules, not ornament. It has since picked up the *structure* of a modern product site: every section opens with the same intro row, the work is presented as large stacked cards beside a pinned index, and the page runs wider with small side margins. The surface stays quiet (warm paper, near-black ink, one muted green); the layout logic is what changed.

Two moods coexist on purpose. The page is calm, light-weight and typographic. The one dramatic element is the dark gradient "stage" panel that frames each project screenshot — it is the deliberate contrast, and it should stay the only one.

The system also keeps its honesty constraint: when a project has no real screenshot, the design shows an explicit uppercase placeholder inside the frame rather than a stock image or gradient standing in for content that doesn't exist. The visual system refuses to fake evidence.

**Key Characteristics:**
- One section skeleton: a **section intro** (small gray note left, large light-weight heading right, second line tinted) followed by content. The hero is the exception and keeps its own bold masthead.
- A **pinned index** pattern (sticky left column of large names, active one dark, content scrolling on the right) for Projects and the home Credentials list.
- Wide layout, small margins: content up to 100rem with fluid `clamp(1rem, 2.5vw, 2.5rem)` side gutters; long-form pages cap at 72rem.
- Light display weights for headings (400) against a bold hero (700); functional text distinguished by case and tracking, not a second typeface.
- Mostly flat: hairline borders and tonal contrast carry hierarchy; shadows exist only on a few floating or framed objects (see Elevation).
- One green accent, plus its lighter tint for heading emphasis.

## Colors

The palette is warm paper neutrals and near-black ink with one desaturated green.

### Primary
- **Pine Ink** (`#2c4a3e`): The accent. Used as emphasized text color (About's bold terms), small dot markers on labels, the focus outline, hover color on links, and the full-screen page curtain. It is also the dark base of the project stage gradients.
- **Pine Tint** (`#3f7a5d`, token `--accent-soft`): A lighter green used only for the tinted second line of large headings, so it reads as distinct from near-black (about 4.9:1 on paper). Don't use it for body text or small UI.

### Neutral
- **Warm Paper** (`#f7f7f5`): The page background and the background of every section; also the screenshot frame's fill.
- **Pure White** (`#ffffff`): Surfaces that sit "above" the page — plates, the tag pill on stage cards.
- **Near-Black Ink** (`#171717`): Primary text, active index entries, and the footer background (the system's one inversion).
- **Soft Graphite** (`#656565`): Secondary text — notes, captions, nav links at rest, chip text.
- **Faint Ink** (`rgba(23, 23, 23, 0.62)`): Tertiary text — resting form labels and empty-plate captions. Keep above WCAG AA on paper (~4.8:1).
- **Pale Ink** (`rgba(23, 23, 23, 0.5)`): Inactive entries in the large pinned index only. Large text, ~3.2:1 on paper — don't use it for small text.
- **Hairline Grey** (`#e5e5e2`): The standard border and divider color.
- **Ghost Divider** (`rgba(23, 23, 23, 0.06)`): Barely-there separators in dense lists (About marginalia, mobile nav).

### Named Rules
**The One Voice Rule.** Green is the only chromatic color (Pine Ink and its tint are one family). Don't introduce a second accent for a one-off emphasis; that is a system change.

**The No Fake Evidence Rule.** A project plate without a real screenshot shows the uppercase placeholder treatment, never a substitute image, gradient, or icon.

## Typography

**Typeface:** Helixa (self-hosted from `public/fonts/`, Arial/Helvetica fallback) — the only typeface, weights 400, 450 (Book, body default) and 700.

**Character:** One family for everything. Functional text (labels, tags, buttons, metadata) is marked by uppercase case, letter-spacing and smaller size, never by a different font. (An earlier monospace functional face was retired on purpose; don't bring it back.)

### Hierarchy
- **Display** (700, `clamp(2.5rem, 9.5vw, 8.5rem)`, 1.05): the hero `<h1>` only. Sized to fill the wide layout; its lede is `clamp(1.25rem, 2.1vw, 1.75rem)`.
- **Section title** (400, `clamp(2.4rem, 5.2vw, 4.25rem)`, 1.05, tracking −0.02em): the heading in every section intro. Light weight on purpose; the second line is Pine Tint.
- **Index** (400, `clamp(2rem, 3.6vw, 3rem)`): names in the pinned index. The compact variant (`clamp(1.35rem, 2.1vw, 1.8rem)`) is for long labels such as credential categories.
- **Title** (500, 1.3rem): lede paragraphs and card titles.
- **Body** (450, 1rem, 1.5): descriptions, captions, case-study copy.
- **Label** (400, 0.72rem, tracking 0.14em, uppercase): eyebrow labels and tags; siblings at other sizes share the same identity.

### Named Rules
**The Case & Tracking Rule.** If something needs to read as functional rather than prose, use uppercase and tracked `letter-spacing`, not a font-family swap.

**Implementation note.** Only three Helixa weights are loaded. A requested weight of 600 resolves to the Bold (700) face, and anything between 450 and 700 you ask for will snap to one of the loaded faces. If a true semibold is wanted, load a fourth weight; changing the number alone won't do it.

## Layout

Three tokens in `globals.css` own the page geometry; change them rather than adding per-section padding:
- `--gutter`: `clamp(1rem, 2.5vw, 2.5rem)` — left/right padding for sections, nav, and footer.
- `--content-max`: `100rem` — the widest any section's content, the nav row, or the footer gets.
- `--prose-max`: `72rem` — reading width for case-study pages and the `/credentials` page.

Vertical rhythm comes from the shared `.entry` unit: 5.5rem top/bottom padding (3.25rem under 640px). Sections fade and rise in on first scroll (14px, 0.6s, IntersectionObserver, one-shot), skipped under `prefers-reduced-motion`.

**Section intro row.** A two-column grid (`minmax(14rem, 0.8fr)` / `minmax(0, 1.7fr)`): a gray note on the left and the large heading on the right. Used by About, Projects, Credentials, and Contact.

**Pinned index split.** The same column ratio, with a sticky left column (below the nav, `top: 6.5rem`) holding the index and the content stacked on the right. The active entry follows scroll position (the card crossing the middle of the viewport); clicking an entry smooth-scrolls to it. Used by Projects and the home Credentials list.

**Responsive tiers:**
- **640px** — section padding compresses.
- **720px** — nav switches from hamburger panel to inline links.
- **900px** — all two-column grids (intro row, pinned split, About, Contact) collapse to one column; the index is hidden and the heading leads.

**Page transition.** Project cards and the project page's Back link play a full-screen Pine Ink curtain that wipes left-to-right, navigates behind it, then wipes off (about 0.45s each way). It's skipped for modifier-clicks and reduced motion.

## Elevation & Depth

Mostly flat. Hierarchy comes from hairline borders and tonal steps between paper, white and ink. Shadows are the exception, allowed only for objects that read as physical or floating:
- the screenshot frame inside a project stage (a soft drop shadow on the dark panel),
- the credential modal,
- a 1px accent underline-shadow on a credential row's "view →" link on hover.

### Named Rules
**The Earned-Shadow Rule.** Don't add a `box-shadow` to ordinary cards, buttons, or sections to signal elevation. If something sits above the page, lighten its background or give it a hairline border; reserve shadows for the framed-on-dark and modal cases above.

## Shapes

Square by default (buttons, chips, inputs, section containers are 0px). Radius is reserved for imagery, floating objects, and round controls:
- **Plates and stage cards:** 12px.
- **Screenshot frame inside a stage:** 10px.
- **Tag pill on a stage card:** 8px.
- **Round controls** (carousel prev/next): 50%.
- **Pills** (fully rounded): the credential filter chips, plus the credential modal's skill tags and its link button.

### Named Rules
**The Reserved-Radius Rule.** A new component that isn't an image container, a floating object, or a round control gets 0px radius. Don't invent an in-between radius as a default.

## Components

### Buttons
- **Ghost / link CTA:** tracked uppercase text with a bottom hairline and a trailing arrow. Hover widens the text-to-arrow gap (and may shift to the accent color); no fill change.
- **Primary / solid** (contact submit): Near-Black Ink fill, Warm Paper text, 0px radius. Hover widens the gap; disabled is 0.6 opacity.

### Section intro
Gray note (left) + large light heading (right) with an optional tinted second line (`SectionIntro`). Notes are `clamp(1.25rem, 2.1vw, 1.9rem)`, weight 450.

### Pinned index
Large light entries, Pale Ink at rest, Near-Black Ink when active or hovered, no markers or numbers. Keep inactive text no lighter than Pale Ink.

### Project stage card
A 12px dark gradient panel (Pine Ink-based, glossy radial highlights) containing a white pill of up to three tech tags at the top and the project thumbnail in a 10px frame with a soft shadow below it. Title and caption sit under the panel. The frame lifts 4px on hover (disabled under reduced motion). With no thumbnail, the frame shows the uppercase placeholder.

### Chips
- **Tech tags** (About, case studies): transparent, Hairline Grey border, Soft Graphite label text, 0px radius; informational only.
- **Credential filter chips** (`/credentials`): rounded pills with a pressed/unpressed state. The credential modal's skill tags are also pills.

### Cards / Plates
12px radius, Pure White, 1px Hairline Grey border, no shadow. Holds a real image (1.02× zoom on hover, off under reduced motion) or the placeholder.

### Inputs / Fields
Transparent, bottom-border only, floating labels (rest at Faint Ink, float up and tracked on focus/filled). Focus shifts the border to Near-Black Ink; no glow.

### Navigation
Sticky top bar on Warm Paper with a hairline bottom rule, contents on the shared `--content-max` column. Desktop: inline links with a scale-in underline, active link bold. Mobile (<720px): 44px hamburger opening a focus-trapped slide-down panel closed by Escape or outside click. A "Skip to content" link is the first focusable element.

### Footer
The system's one color inversion: Near-Black Ink background with Warm Paper text — the closing rule of the page.

## Do's and Don'ts

### Do:
- **Do** open every new section with the section intro and keep the second line to the soft green tint.
- **Do** use the pinned-index split only when the right column is long enough to scroll past the index (projects, long lists); a short list gains nothing from pinning.
- **Do** default new interactive elements to 0px radius (The Reserved-Radius Rule).
- **Do** signal hover on links and buttons through motion (gap widening, underline scale-in) or a text/border color shift, not a background fill.
- **Do** keep text over the large light headings and the pale index at the contrast documented above.
- **Do** show the explicit placeholder for a project without a real screenshot (The No Fake Evidence Rule).

### Don't:
- **Don't** add a `box-shadow` to ordinary surfaces (The Earned-Shadow Rule).
- **Don't** introduce a second accent color; extend the green family or ask first.
- **Don't** lighten the pinned index's inactive color below Pale Ink, or use gradient text for headings (the second line is a solid tint).
- **Don't** let the nav go full-bleed or hard-code section padding; use `--gutter` and `--content-max`.
- **Don't** apply the wide `--content-max` to long-form reading pages; use `--prose-max`.
- **Don't** fabricate a project's evidence (screenshots, links, metrics) to fill a visual gap.
