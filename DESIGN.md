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
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "min(16.75cqw, 25.5svh)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  section-title:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  index:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  group-heading:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  note:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.25rem, 2.1vw, 1.9rem)"
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  hero-lede:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.25rem, 2.1vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  modal-title:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  row-title:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.5
    letterSpacing: "normal"
  meta:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
  small-ui:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
  label:
    fontFamily: "Helixa, Helixa Fallback, Arial, Helvetica, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  hairline: "4px"
  tag: "8px"
  shot: "10px"
  plate: "12px"
  pill: "999px"
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
- One section skeleton: a **section intro** (small gray note left, large light-weight heading right, second line tinted) followed by content. The hero is the exception: its own composition (see Layout).
- A **pinned index** pattern (sticky left column of large names, active one dark, content scrolling on the right) for Projects.
- Wide layout, small margins: content up to 100rem with fluid `clamp(1rem, 2.5vw, 2.5rem)` side gutters; long-form pages cap at 72rem.
- Light weights throughout (400 for the hero name and every section heading); functional text distinguished by case and tracking, not a second typeface.
- Mostly flat: hairline borders and tonal contrast carry hierarchy; shadows exist only on a few floating or framed objects (see Elevation).
- One green accent, plus its lighter tint for heading emphasis.

## Colors

The palette is warm paper neutrals and near-black ink with one desaturated green.

### Primary
- **Pine Ink** (`#2c4a3e`): The accent. Used for small dot markers on labels, the focus outline, hover color on links, and the full-screen page curtain. It is also the dark base of the project stage gradients.
- **Pine Tint** (`#3f7a5d`, token `--accent-soft`): A lighter green used only for the tinted second line of large headings, so it reads as distinct from near-black (about 4.9:1 on paper). Don't use it for body text or small UI.

### Neutral
- **Warm Paper** (`#f7f7f5`): The page background and the background of every section; also the screenshot frame's fill.
- **Pure White** (`#ffffff`): Surfaces that sit "above" the page — plates, the tag pill on stage cards.
- **Near-Black Ink** (`#171717`): Primary text, active index entries, primary button backgrounds, and the footer background.
- **Soft Graphite** (`#656565`): Secondary text — notes, captions, nav links at rest, chip text.
- **Faint Ink** (`rgba(23, 23, 23, 0.62)`): Tertiary text — resting form labels and empty-plate captions. Keep above WCAG AA on paper (~4.8:1).
- **Pale Ink** (`rgba(23, 23, 23, 0.5)`): Inactive entries in the large pinned index only. Large text, ~3.2:1 on paper — don't use it for small text.
- **Hairline Grey** (`#e5e5e2`): The standard border and divider color.
- **Ghost Divider** (`rgba(23, 23, 23, 0.06)`): Barely-there separators in dense lists (the mobile nav panel).

### Named Rules
**The One Voice Rule.** Green is the only chromatic color (Pine Ink and its tint are one family). Don't introduce a second accent for a one-off emphasis; that is a system change.

**The No Fake Evidence Rule.** A project plate without a real screenshot shows the uppercase placeholder treatment, and a credential without a real scan shows no certificate image. Never a substitute image, gradient, icon, or logo standing in for evidence that doesn't exist.

## Typography

**Typeface:** Helixa (self-hosted from `public/fonts/`, Arial/Helvetica fallback), weights 400, 450 (Book, body default) and 700. One deliberate exception: the hero's hand-lettered margin notes use Gaegu 700 (`--font-hand`, via `next/font/google`, loaded by the hero component only so other routes don't download it).

**Character:** One family for everything. Functional text (labels, tags, buttons, metadata) is marked by uppercase case, letter-spacing and smaller size, never by a different font. (An earlier monospace functional face was retired on purpose; don't bring it back.)

### Hierarchy
- **Display** (400, `min(16.75cqw, 25.5svh)`, line-height 0.9, tracking −0.03em): the hero `<h1>` only, left-aligned and approximately 15% smaller than the former edge-to-edge treatment. The viewport-height cap protects short screens. The tagline above it is `clamp(1.35rem, 2.3vw, 2.1rem)`, weight 400, Soft Graphite, up to 54rem wide; the name itself is Near-Black Ink.
- **Section title** (400, `clamp(2.4rem, 5.2vw, 4.25rem)`, 1.05, tracking −0.02em): the heading in every section intro. Light weight on purpose; the second line is Pine Tint.
- **Index** (400, `clamp(2rem, 3.6vw, 3rem)`): names in the pinned index.
- **Group heading** (400, `clamp(1.5rem, 2.6vw, 2.25rem)`, tracking −0.02em): the category names above each group of credential rows (Certifications & Training, and so on), followed by a hairline rule.
- **Note** (450, `clamp(1.25rem, 2.1vw, 1.9rem)`): the gray note beside a section title. About uses this scale for its first-person introduction, with a 1.4 line-height. The hero's lede is at weight 500 (`clamp(1.25rem, 2.1vw, 1.75rem)`).
- **Title** (500, 1.3rem): card titles and short ledes.
- **Row title** (600, 1.05rem): credential row and card titles. **Modal title** (700, 1.45rem): the credential dialog heading.
- **Meta / small UI** (0.82rem / 0.78rem, tracked 0.06em / 0.04em): years, "view →" links, filter chips and other secondary functional text.
- **Body** (450, 1rem, 1.5): descriptions, captions, case-study copy.
- **Label** (400, 0.72rem, tracking 0.14em, uppercase): eyebrow labels and tags; siblings at other sizes share the same identity.

### Named Rules
**The Case & Tracking Rule.** If something needs to read as functional rather than prose, use uppercase and tracked `letter-spacing`, not a font-family swap. The single exception is the handwriting face on the hero margin notes; it stays limited to those notes.

**Fallback.** `Helixa Fallback` (`@font-face` over local Arial / Arial Bold, with `size-adjust` 96.63% / 92.75% and matching ascent/descent overrides, measured from the font files) sits in every font stack so text doesn't reflow or overflow before Helixa arrives; the two weights used on first paint (Regular, Book) are preloaded. Re-measure if the font changes.

**Implementation note.** Only three Helixa weights are loaded. A requested weight of 600 resolves to the Bold (700) face, and anything between 450 and 700 you ask for will snap to one of the loaded faces. If a true semibold is wanted, load a fourth weight; changing the number alone won't do it.

## Layout

Three tokens in `globals.css` own the page geometry; change them rather than adding per-section padding:
- `--gutter`: `clamp(1rem, 2.5vw, 2.5rem)` — left/right padding for sections, nav, and footer.
- `--content-max`: `100rem` — the widest any section's content, the nav row, or the footer gets.
- `--prose-max`: `72rem` — reading width for case-study pages and the `/credentials` page.
- `--topbar-h`: `4.5rem` (`5rem` below 720px) — the sticky nav's minimum height. The nav is given exactly this height, and the hero (`min-height: calc(100svh - var(--topbar-h))`) and anchor scroll offsets are built on it.

**Hero.** Empty space above, then a short tagline, then the large left-aligned name occupying approximately 85% of the available width, anchored to the bottom of the first screen (`min-height: calc(100svh - var(--topbar-h))`). The name reserves 0.2em below its tight line box for descenders, in addition to the hero's `clamp(.5rem, 1vw, 1rem)` bottom inset, so letters clear the About separator. A deliberate expanse of paper follows before About.

**Scrolling.** Fine-pointer devices ease wheel input on the native document with a light 90ms exponential damping time. No transformed page wrapper is used, preserving sticky elements, section tracking, anchors, and route restoration. Pointer presses, navigation keys, external scrolling, scroll locks, and route changes cancel inertia. Nested scroll containers and zoom gestures remain native. Touch devices and reduced-motion preferences use native scrolling; animation frames run only while settling toward a target.

Vertical rhythm comes from the shared `.entry` unit: 5.5rem top/bottom padding (3.25rem under 640px). About shares this padding; its supporting facts follow the introduction after 2.5rem. About and all later sections open with a 1px Hairline Grey rule at the top edge, inset to the content width so it lines up with the grid (backgrounds stay one flat paper tone; sections are separated by that rule and whitespace, not by color blocks). Sections fade and rise in on first scroll (14px, 0.6s, IntersectionObserver, one-shot), skipped under `prefers-reduced-motion`.

**Section intro row.** A two-column grid (`minmax(14rem, 0.8fr)` / `minmax(0, 1.7fr)`): a gray note on the left and the large heading on the right. Used by Projects and Contact (Contact's lede and channels sit under the note, and its form under the heading, on the same two columns). About shares these columns with a full-size section heading on the left and prose on the right. Credentials uses the large heading style left-aligned above its content, with no note.

**Pinned index split.** The same column ratio, with a sticky left column (below the nav, `top: 6.5rem`) holding the index and the content stacked on the right. The active entry follows scroll position (the card crossing the middle of the viewport); clicking an entry opens its project detail page, using the same transition as the card. Used by Projects.

**Responsive tiers:**
- **640px** — section padding compresses, About's facts stack into one column, and credential rows stack: year and "view →" share a top line and the title gets the full width below.
- **720px** — nav switches from hamburger panel to inline links.
- **900px** — intro, pinned split, About, and Contact collapse to one column. About's supporting facts retain two columns until 640px. The index is hidden and the heading leads.

**Page transition.** Project cards and the project page's Back link play a full-screen Pine Ink curtain that wipes left-to-right, navigates behind it, then wipes off (about 0.45s each way). It's skipped for modifier-clicks and reduced motion.

## Elevation & Depth

Mostly flat. Hierarchy comes from hairline borders and tonal steps between paper, white and ink. Shadows are the exception, allowed only for objects that read as physical or floating:
- the screenshot frame inside a project stage (a soft drop shadow on the dark panel),
- the certificate image inside the credential dialog (a soft drop shadow),
- a 1px accent underline-shadow on a credential row's "view →" link on hover.

### Named Rules
**The Earned-Shadow Rule.** Don't add a `box-shadow` to ordinary cards, buttons, or sections to signal elevation. If something sits above the page, lighten its background or give it a hairline border; reserve shadows for the framed-on-dark and modal cases above.

## Shapes

Square by default (buttons, chips, inputs, section containers are 0px). Radius is reserved for imagery, floating objects, and round controls:
- **Plates and stage cards:** 12px.
- **Screenshot frame inside a stage:** 10px.
- **Tag pill on a stage card:** 8px.
- **Round controls** (carousel prev/next): 50%.
- **Pills** (fully rounded, 999px): the credential filter chips, plus the credential modal's skill tags and its link button.
- **Hairline radius** (4px): the certificate image inside the credential dialog only.

### Named Rules
**The Reserved-Radius Rule.** A new component that isn't an image container, a floating object, or a round control gets 0px radius. Don't invent an in-between radius as a default.

## Components

### Buttons
- **Ghost / link CTA:** tracked uppercase text with a bottom hairline and a trailing arrow. Hover widens the text-to-arrow gap (and may shift to the accent color); no fill change.
- **Primary / solid** (contact submit): Near-Black Ink fill, Warm Paper text, 0px radius. The contact action uses a sentence-case 1rem label, a separate SVG arrow, and a minimum 48px height. Hover moves only the arrow, skipped under reduced motion; disabled is 0.6 opacity.

### Section intro
Gray note (left) + large light heading (right) with an optional tinted second line (`SectionIntro`). Notes are `clamp(1.25rem, 2.1vw, 1.9rem)`, weight 450.

### About facts
About fills at least one viewport below the sticky navigation (`min-height: calc(100svh - var(--topbar-h))`), with its content centered vertically. It grows naturally when the content needs more room. A near-black heading using the shared section-title typography sits on the left and the bio on the right, filling its grid column so the outer margins stay balanced. The opening paragraph uses `clamp(1.25rem, 1.8vw, 1.6rem)` at 1.45 line-height; the research paragraph follows after 1.5rem in Soft Graphite at `clamp(var(--text-detail), 1.3vw, 1.125rem)` with a 1.65 line-height. Education and Currently sit beneath the prose as two compact ruled columns. Values use `--text-detail` with a 1.5 line-height; the university and scholarship sit on separate secondary lines. Below 900px the heading and prose stack; below 640px the facts also stack. About is visible by default and does not depend on the scroll-reveal observer.

The About heading reads "about me," with "a little context" on a Pine Tint second line, using the existing shared section-heading treatment. No photograph appears in this section.

### Pinned index
Large light entries, Pale Ink at rest, Near-Black Ink when active or hovered, no markers or numbers. Keep inactive text no lighter than Pale Ink.

### Project stage card
A 12px dark gradient panel (Pine Ink-based, glossy radial highlights) containing a white pill of up to three tech tags at the top and the project thumbnail in a 10px frame with a soft shadow below it. Title, a visible "View project" cue, and caption sit under the panel. The title and cue wrap when text is enlarged. The frame lifts 4px on hover (disabled under reduced motion). With no thumbnail, the frame shows the uppercase placeholder.

### Margin notes (hero)
Hand-lettered marks in the hero's whitespace, in the one handwriting face (Gaegu, `--font-hand`). Three notes and two drawn strokes, no more:
- **"hey! see my work"** (sticker, links to projects) at the end of the tagline row and **"say hi"** (sticker, links to contact) floating in the top whitespace, with a longer looping Pine Ink arrow doodled beneath it pointing toward the name. Stickers are light gray (`--surface-muted`, 8px radius), rotated about 2–3°; hover straightens and lifts them and turns the text Pine Ink.
- **"open to roles"**, a static sticker with a small Pine Tint status dot, floating top-left. It's the one note that isn't a link.
- **A hand-drawn underline** in Pine Tint under "Software engineer" in the tagline.

Entrance is one authored moment, pure CSS and independent of JavaScript: the hero is visible from first paint (it opts out of the scroll-reveal fade), and at load the notes pop in (about 0.45s, staggered) and the strokes draw on (about 0.8s). Under reduced motion everything is simply present and hover only changes color. Notes are at least 44px tall. To keep the absolutely placed notes off the tagline and name: below 900px wide or under 760px tall "open to roles" drops into the flow above the tagline, and below 1100px wide or under 760px tall the "say hi" link moves into normal flow at the right and only its large doodle is hidden. The hero clips horizontal overflow so the giant name can never create a horizontal scrollbar.

### Chips
- **Tech tags** (case studies): transparent, Hairline Grey border, Soft Graphite label text, 0px radius; informational only.
- **Credential filter chips** (`/credentials`): rounded pills with a pressed/unpressed state. The credential modal's skill tags are also pills.

### Credential row and dialog
Rows (home page) are full-width hairline-separated lines: year, issuer and title, with a tracked "view →" link and a faint logo watermark. Hover tints the row, nudges the text, turns the title green and gently dims sibling rows (to 0.7 opacity, never lower). Rows with a certificate image open a native `<dialog>` (`showModal()`): the browser traps focus, makes the rest of the page inert, closes on Escape and restores focus, and we add a page scroll lock, click-outside-to-close and a 44px close button. Links that open a new tab announce it to screen readers. A credential with no real scan has no `image`, so it gets the compact dialog (or a plain verify link), never a logo posing as the certificate.

On desktop (above 900px), home-page credential rows with a real scan in `/assets/certificates/` reveal a small upright certificate preview beside the cursor. It follows pointer movement and flips to the left near the viewport edge. Keyboard focus shows a stationary preview above the row at the right. The preview preserves the scan's proportions with a thin border and a soft shadow, without tilting. Escape dismisses it until the next row entry or focus. Clicking the row opens the existing dialog. Reduced motion uses the stationary preview and removes its movement; narrow layouts retain tap-to-open. Logos never serve as certificate previews; failed images disappear gracefully.

### Cards / Plates
12px radius, Pure White, 1px Hairline Grey border, no shadow. Holds a real image (1.02× zoom on hover, off under reduced motion) or the placeholder.

### Inputs / Fields
Transparent, bottom-border only, floating labels (rest at Faint Ink, float up and tracked on focus/filled). Focus shifts the border to Near-Black Ink; no glow.

### Navigation
Sticky top bar on Warm Paper with a hairline bottom rule, contents on the shared `--content-max` column. Desktop: inline links with a scale-in underline, active link bold. Mobile (<720px): 44px hamburger opening a focus-trapped slide-down panel closed by Escape or outside click. A "Skip to content" link is the first focusable element.

### Footer
Near-Black Ink background (`--ink`) with Warm Paper text. A compact row places Jose Aquino at left, with Explore and Get in touch link columns at right. Height follows content with 2.5rem top and bottom padding and no minimum height. No location or bottom credit row. Under 640px, the identity spans the full width above two link columns. Every link has at least a 44px target and a visible light focus outline. Internal page links use the existing curtain transition; same-page anchors scroll normally.

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
- **Don't** fabricate evidence (screenshots, links, metrics, certificate images) to fill a visual gap; and don't hand-roll a modal when a native `<dialog>` does the focus and inert work.
