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
    fontSize: "clamp(2.4rem, 4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
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
    fontSize: "clamp(1.5rem, 2.55vw, 2.35rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.01em"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
---

# Design System: Jose Aquino — Portfolio

## Design Evolution & Identity Checks

User preference recorded on 2026-10-30:

- The portfolio is exploring **playful minimalism**.
- Any section may be modified, including Hero, About, Projects, Credentials, Contact, and Footer, so the portfolio stays coherent in both visual language and personality. Do not assume only the hero is open to change.
- Whenever proposing or introducing a new treatment, proactively compare it with the rest of the portfolio. If it moves away from the shared identity, remind the user and explain the specific mismatch, whether it could be an intentional exception, and which other sections or system rules would need to evolve for it to belong.
- Judge coherence through typography, color, shapes, depth, illustration/icon style, motion, and writing voice. Sections may have different levels of expression; coherence does not require repeating the same decoration everywhere.
- The rules below document the current implementation and remain the baseline until a replacement direction is agreed. They are revisable as part of that direction.

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
- **Pine Ink** (`#2c4a3e`): The accent. Used for small dot markers on labels, the focus outline, hover color on links. It is also the dark base of the project stage gradients.
- **Pine Tint** (`#3f7a5d`, token `--accent-soft`): A lighter green used only for the tinted second line of large headings, so it reads as distinct from near-black (about 4.9:1 on paper). Don't use it for body text or small UI.

### Neutral
- **Warm Paper** (`#f7f7f5`): The page background and the background of every section; also the screenshot frame's fill. The page and navigation add a faint static paper texture via `--paper-texture` (`public/assets/paper-grain.png`), repeated at its native 256px size. This original procedural tile uses neutral ink at no more than 8/255 alpha (about 3.1%); it adds fine grain without animation or an overlay over content. Light sections inherit the continuous body texture. Behind the grain, `--paper-ambient` adds broad, softly fading radial light/shade and a gentle 125-degree light/shadow variation. These layers derive only from existing `--paper-deep` and `--ink` tokens using transparent color mixes (`--paper-light`: 32% white; `--paper-shade`: 1.2% ink); `--paper` remains the unchanged base. All layers are static CSS backgrounds, scale with the viewport/page, and use no filters, fixed overlays, canvas, JavaScript, or animations. Navigation retains grain alone to keep it even while scrolling. Images, project stages, form fields, dialogs, and the dark footer retain clean surfaces.
- **Pure White** (`#ffffff`): Surfaces that sit "above" the page — plates, the tag pill on stage cards.
- **Near-Black Ink** (`#171717`): Primary text, active index entries, primary button backgrounds, and the footer background.
- **Soft Graphite** (`#656565`): Secondary text — notes, captions, nav links at rest, chip text.
- **Faint Ink** (`rgba(23, 23, 23, 0.62)`): Tertiary text — resting form labels and empty-plate captions. Keep above WCAG AA on paper (~4.8:1).
- **Pale Ink** (`rgba(23, 23, 23, 0.5)`): Inactive entries in the large pinned index only. Large text, ~3.2:1 on paper — don't use it for small text.
- **Hairline Grey** (`#e5e5e2`): The standard border and divider color.
- **Ghost Divider** (`rgba(23, 23, 23, 0.06)`): Barely-there separators in dense lists (the mobile nav panel).

### Named Rules
**The One Voice Rule.** Green is the interface's chromatic accent (Pine Ink and its tint are one family). The hero's personal glasses mascot uses the same green family and near-black glasses; it replaces the former terracotta Clawd exception. Additional accent colors are system changes.

**The No Fake Evidence Rule.** A project plate without a real screenshot shows the uppercase placeholder treatment, and a credential without a real scan shows no certificate image. Never a substitute image, gradient, icon, or logo standing in for evidence that doesn't exist.

## Typography

**Typeface:** Helixa (self-hosted from `public/fonts/`, Arial/Helvetica fallback), weights 400, 450 (Book, body default) and 700. Expressive annotations use Gaegu 700 (`--font-hand`) and may appear in any section where they support the content. Currently, Gaegu is loaded through `next/font/google` in `Hero.jsx`; reuse outside the hero requires making the font available to those components.

**Character:** One family for everything. Functional text (labels, tags, buttons, metadata) is marked by uppercase case, letter-spacing and smaller size, never by a different font. (An earlier monospace functional face was retired on purpose; don't bring it back.)

### Hierarchy
- **Display** (400, `clamp(2.4rem, 4vw, 3.75rem)`, line-height 1.1, tracking −0.03em): the compact hero name above the introduction. The introduction beneath it uses `clamp(1.5rem, 2.55vw, 2.35rem)`, weight 400, line-height 1.35, Soft Graphite; on mobile it uses `clamp(1.5rem, 6.5vw, 1.825rem)` with line-height 1.4. The hero column is at most 48rem wide.
- **Section title** (400, `clamp(2.4rem, 5.2vw, 4.25rem)`, 1.05, tracking −0.02em): the heading in every section intro. Light weight on purpose; the second line is Pine Tint.
- **Index** (400, `clamp(2rem, 3.6vw, 3rem)`): names in the pinned index.
- **Group heading** (400, `clamp(1.5rem, 2.6vw, 2.25rem)`, tracking −0.02em): the category names above each group of credential rows (Certifications & Training, and so on), followed by a hairline rule.
- **Note** (450, `clamp(1.25rem, 2.1vw, 1.9rem)`): the gray note beside a section title. About uses this scale for its first-person introduction, with a 1.4 line-height. The hero's introduction uses the separate Hero Lede role: weight 400, `clamp(1.5rem, 2.55vw, 2.35rem)` with 1.35 line-height; mobile uses `clamp(1.5rem, 6.5vw, 1.825rem)` and 1.4 line-height.
- **Title** (500, 1.3rem): card titles and short ledes.
- **Row title** (600, 1.05rem): credential row and card titles. **Modal title** (700, 1.45rem): the credential dialog heading.
- **Meta / small UI** (0.82rem / 0.78rem, tracked 0.06em / 0.04em): years, "view →" links, filter chips and other secondary functional text.
- **Body** (450, 1rem, 1.5): descriptions, captions, case-study copy.
- **Label** (400, 0.72rem, tracking 0.14em, uppercase): eyebrow labels and tags; siblings at other sizes share the same identity.

### Named Rules
**The Case & Tracking Rule.** If something needs to read as functional rather than prose, use uppercase and tracked `letter-spacing`, not a font-family swap. Handwritten annotations are a deliberate expressive exception and may appear across sections; keep functional labels and body copy in Helixa.

**Fallback.** `Helixa Fallback` (`@font-face` over local Arial / Arial Bold, with `size-adjust` 96.63% / 92.75% and matching ascent/descent overrides, measured from the font files) sits in every font stack so text doesn't reflow or overflow before Helixa arrives; the two weights used on first paint (Regular, Book) are preloaded. Re-measure if the font changes.

**Implementation note.** Only three Helixa weights are loaded. A requested weight of 600 resolves to the Bold (700) face, and anything between 450 and 700 you ask for will snap to one of the loaded faces. If a true semibold is wanted, load a fourth weight; changing the number alone won't do it.

## Layout

Three tokens in `globals.css` own the page geometry; change them rather than adding per-section padding:
- `--gutter`: `clamp(1rem, 2.5vw, 2.5rem)` — left/right padding for sections, nav, and footer.
- `--content-max`: `100rem` — the widest any section's content, the nav row, or the footer gets.
- `--prose-max`: `72rem` — reading width for case-study pages and the `/credentials` page.
- `--topbar-h`: `4.5rem` (`5rem` below 720px) — the sticky nav's minimum height. The nav is given exactly this height, and the hero (`min-height: calc(100svh - var(--topbar-h))`) and anchor scroll offsets are built on it.

**Hero.** A 48rem content column is centered horizontally and vertically within the first viewport below the nav. The smaller name appears first, then the left-aligned introduction with its inline graph and mascot, then the location on a separate line. A wrapping handwritten action row places "hey! see my work" before "say hi" below the introduction. All elements follow document flow; the previous floating doodle and oversized bottom name are removed. The hero grows naturally on small or enlarged-text screens.

**Scrolling.** Fine-pointer devices ease wheel input on the native document with a light 90ms exponential damping time. No transformed page wrapper is used, preserving sticky elements, section tracking, anchors, and route restoration. Pointer presses, navigation keys, external scrolling, scroll locks, and route changes cancel inertia. Nested scroll containers and zoom gestures remain native. Touch devices and reduced-motion preferences use native scrolling; animation frames run only while settling toward a target.

Vertical rhythm comes from the shared `.entry` unit: 5.5rem top/bottom padding (3.25rem under 640px). About shares this padding; its supporting facts follow the introduction after 2.5rem. About and all later sections open with a 1px Hairline Grey rule at the top edge, inset to the content width so it lines up with the grid (backgrounds stay one flat paper tone; sections are separated by that rule and whitespace, not by color blocks). Sections stay readable before JavaScript loads. Offscreen sections use a one-time, 600ms opacity/rise reveal through IntersectionObserver; there is no section blur or scroll-linked animation. Reduced motion and browsers without IntersectionObserver show content immediately.

**Section intro row.** A two-column grid (`minmax(14rem, 0.8fr)` / `minmax(0, 1.7fr)`): a gray note on the left and the large heading on the right. Used by Projects and Contact (Contact's lede and channels sit under the note, and its form under the heading, on the same two columns). About shares these columns with a full-size section heading on the left and prose on the right. Credentials uses the large heading style left-aligned above its content, with no note.

**Pinned index split.** The same column ratio, with a sticky left column (below the nav, `top: 6.5rem`) holding the index and the content stacked on the right. The active entry follows scroll position (the card crossing the middle of the viewport); clicking an entry opens its project detail page, using the same transition as the card. Used by Projects.

**Responsive tiers:**
- **640px** — section padding compresses, About's facts stack into one column, and credential rows stack: year and "view →" share a top line and the title gets the full width below.
- **720px** — nav switches from hamburger panel to inline links.
- **900px** — intro, pinned split, About, and Contact collapse to one column. About's supporting facts retain two columns until 640px. The index is hidden and the heading leads.

**Page transition.** Internal route links use a 850ms blur crossfade: an inert visual copy of the outgoing route blurs and fades while the incoming route sharpens. The snapshot is removed after animation or timeout. Same-page anchors, modifier-clicks, and reduced motion use normal navigation. The green wipe is removed.

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
**The Reserved-Radius Rule.** Contact form fields and Send note use the shared 8px `--radius-control` treatment. Other new components that are not image containers, floating objects, or round controls default to 0px radius. Don't invent an in-between radius as a default.

## Components

### Buttons
- **Ghost / link CTA:** tracked uppercase text with a bottom hairline and a trailing arrow. Hover widens the text-to-arrow gap (and may shift to the accent color); no fill change.
- **Primary / solid** (contact submit): Near-Black Ink fill, Warm Paper text, 0px radius. The contact action uses a sentence-case 1rem label, a separate SVG arrow, and a minimum 48px height. Hover moves only the arrow, skipped under reduced motion; disabled is 0.6 opacity.

### Section intro
Gray note (left) + large light heading (right) with an optional tinted second line (`SectionIntro`). Notes are `clamp(1.25rem, 2.1vw, 1.9rem)`, weight 450.

### About facts
About fills at least one viewport below the sticky navigation (`min-height: calc(100svh - var(--topbar-h))`), with its content centered vertically and natural growth when needed. Its grid uses a quieter left heading column (`minmax(10rem, .55fr)`) and a wider prose column (`minmax(0, 1.95fr)`). The heading reads "about me," with "a little context" in Pine Tint, at `clamp(1.5rem, 2.3cqw, 2rem)` with 1.2 line-height. It can wrap naturally.

The opening paragraph leads at `clamp(1.75rem, 2.4vw, 2.125rem)` (28–34px), 1.55 line-height, and a maximum 45ch measure (constrained by the available column width). The opening paragraph describes making complex information understandable and useful, followed by the breadth of backend, data-driven, and AI-powered work. A short research paragraph uses `clamp(1.125rem, 1.4vw, 1.25rem)` (18–20px), 1.65 line-height, Soft Graphite, and a maximum 65ch measure. Both are left-aligned with pretty wrapping. Copy leads with engineering breadth and closes with current academic research on practical, reliable AI agents. AgriWise's Top 3 at DOST Hack4AProgress 2026 appears in its Projects caption and case-study outcome rather than About. No inline graphic is included. The three capability phrases ("backend development", "data-driven applications", "AI-powered systems") use a flat marker treatment: existing `--surface-muted` fill, ink text, .22em rounding, and slight inline padding. Helixa and font weight remain unchanged. These are noninteractive prose highlights, not controls; fragments can wrap on small screens with cloned backgrounds and padding. This is an explicit exception to square-by-default shapes for text emphasis.

A compact ruled Education row sits beneath the prose, showing computer science at Laguna State Polytechnic University and the DOST scholarship. Below 900px, heading and prose stack; below 640px, the introduction uses 1.5rem text. No photo appears. About stays visible without scroll-reveal JavaScript.

### Pinned index
Large light entries, Pale Ink at rest, Near-Black Ink when active or hovered, no markers or numbers. Keep inactive text no lighter than Pale Ink.

### Project stage card
A 12px dark gradient panel (Pine Ink-based, glossy radial highlights) containing a white pill of up to three tech tags at the top and the project thumbnail in a 10px frame with a soft shadow below it. Title, a visible "View project" cue, and caption sit under the panel. The title and cue wrap when text is enlarged. The frame lifts 4px on hover (disabled under reduced motion). With no thumbnail, the frame shows the uppercase placeholder.

### Expressive details across sections

Playfulness is not restricted to the hero. Handwritten annotations, drawn marks, inline icons/objects, and expressive text highlights may appear in any section when they support the content and the shared personality. There is no fixed count of notes or strokes; use the fewest details needed for a clear effect, preserve whitespace and reading flow, and avoid competing focal points. Sections may vary in intensity without introducing unrelated visual styles.

Use the existing palette, typography, shape, and depth rules as the baseline. Flag any proposed treatment that departs from them or feels disconnected from other sections, and explain the related changes needed for coherence. Decorative details must not obscure text, disrupt mobile wrapping, or carry essential meaning only through animation or hover. Preserve keyboard access for interactive details and provide reduced-motion alternatives.

#### Current hero implementation

The word "AI" is accompanied by a small Clawd (Claude Code) pixel mascot, rendered as authored SVG geometry in its terracotta brand color with ink eyes. It uses a compact, taller silhouette in a square 1.15em box, sits inline without a frame or background, and stays with "AI" during wrapping. On hover-capable devices its eyes squeeze into inward-facing chevrons (> <) and the character makes a single small hop with a tilt. Reduced motion keeps the eye change but disables movement; touch retains the resting face. It has an accessible mascot label and is not a link. This is a deliberate brand-color exception; the remaining interface keeps its green palette. Pixel geometry relates it to the contribution graph without repeating its container or hover effect.

An inline GitHub contribution graph follows "building" in the tagline. It shows the latest 12 calendar weeks for `fyodorrrrr`, using real daily contribution levels rendered as flat pine-green squares. The grid is 35px tall on desktop and 40px tall on mobile inside a compact white floating object with an 8px radius, hairline border, and 5px vertical / 8px horizontal padding. It is a non-linked image with an accessible date-range/count label and no pointer-hand cursor or shadow. On hover-capable devices, squares lift slightly in a single staggered ripple per pointer entry, retaining their real contribution colors. There is no idle loop. Reduced motion replaces the ripple with a subtle green color response; touch devices retain the static graph. Data is fetched on the server and cached for 24 hours. During Suspense loading or unavailable data, an invisible, aria-hidden slot reserves the same responsive outer dimensions (approximately 78×47px on desktop and 87×52px on mobile) as the graph, preventing the sentence from rewrapping. No contribution cells or invented values appear in those states.

The hero currently uses hand-lettered marks in its whitespace, in Gaegu (`--font-hand`). These describe the existing composition rather than a fixed limit:

- **"hey! see my work"** and **"say hi"** form an in-flow action row below the introduction. Both use light-gray handwritten stickers, small arrow icons, and the established lift/color hover treatment.
- A Pine Tint drawn underline emphasizes "Software engineer".

The hero is visible from first paint. The notes pop in once and the underline draws on at load; reduced motion presents them immediately. Actions remain at least 44px tall, wrap on narrow screens, and retain visible focus outlines.

### Chips
- **Tech tags** (case studies): transparent, Hairline Grey border, Soft Graphite label text, 0px radius; informational only.
- **Credential filter chips** (`/credentials`): rounded pills with a pressed/unpressed state. The credential modal's skill tags are also pills.

### Credential row and dialog
Credential rows have 24px rounded corners, a deliberate exception to the square-by-default rule. The hover/focus background and clipped watermark layer inherit the row radius so their edges align. The row itself retains visible overflow to preserve certificate previews. Existing preview behavior and layout remain intact.

Rows (home page) are full-width hairline-separated lines: year, issuer and title, with a tracked "view →" link and a faint logo watermark. Hover tints the row, nudges the text, turns the title green and gently dims sibling rows (to 0.7 opacity, never lower). Rows with a certificate image open a native `<dialog>` (`showModal()`): the browser traps focus, makes the rest of the page inert, closes on Escape and restores focus, and we add a page scroll lock, click-outside-to-close and a 44px close button. Links that open a new tab announce it to screen readers. A credential with no real scan has no `image`, so it gets the compact dialog (or a plain verify link), never a logo posing as the certificate.

On desktop (above 900px), home-page credential rows with a real scan in `/assets/certificates/` reveal a small upright certificate preview beside the cursor. It follows pointer movement and flips to the left near the viewport edge. Keyboard focus shows a stationary preview above the row at the right. The preview preserves the scan's proportions with a thin border and a soft shadow, without tilting. Escape dismisses it until the next row entry or focus. Clicking the row opens the existing dialog. Reduced motion uses the stationary preview and removes its movement; narrow layouts retain tap-to-open. Logos never serve as certificate previews; failed images disappear gracefully.

### Full credentials collection

The `/credentials` page defaults to a list with a sticky right-hand preview on desktop. Rows show the title, issuer, and year with a 24px rounded, low-contrast active/hover/focus background. Hover and keyboard focus update the preview; the first item in the current filter is shown initially. The right-hand panel shows the certificate image, title, description, and a "Verify credential" link when an issuer URL exists. Entries without a scan may display their issuer icon as an icon, including Data Analytics; never label that icon as a certificate. Failed images are omitted. Verification opens in a new tab with an accessible announcement. Selection changes use a subtle 360ms fade-and-rise entrance. A single rounded background glides between hovered/focused rows over 420ms, persists across gaps and while the pointer remains inside the list/preview container, and fades when leaving the container. Its dimensions follow row layout changes immediately; only transform and opacity animate, avoiding height-driven layout work. Changing filter/view clears it. Reduced motion disables these effects. Full metadata remains available through the detail dialog; home-page certificate previews remain intact. Row activation retains existing dialogs or issuer verification links. Category filters apply to both layouts. A labeled List / Cards button group with pressed states switches to the existing card grid; filters are retained when switching. At 900px and below the preview panel is hidden and rows remain directly actionable. The home-page rows use the same 420ms sliding highlight within each category group and retain their cursor-following certificate previews. View selection is local to the current page visit.

### Cards / Plates
12px radius, Pure White, 1px Hairline Grey border, no shadow. Holds a real image (1.02× zoom on hover, off under reduced motion) or the placeholder.

### Inputs / Fields
Solid Warm Paper to keep grain out of the fields, bottom-border only, floating labels (rest at Faint Ink, float up and tracked on focus/filled). Focus shifts the border to Near-Black Ink; no glow.

### Navigation
Sticky top bar on Warm Paper with a hairline bottom rule, contents on the shared `--content-max` column. Desktop: inline links with a scale-in underline, active link bold. Mobile (<720px): 44px hamburger opening a focus-trapped slide-down panel closed by Escape or outside click. A "Skip to content" link is the first focusable element.

### Footer
Near-Black Ink background (`--ink`) with Warm Paper text. A compact row places Jose Aquino at left, with Explore and Get in touch link columns at right. Height follows content with 2.5rem top and bottom padding and no minimum height. No location or bottom credit row. Under 640px, the identity spans the full width above two link columns. Every link has at least a 44px target and a visible light focus outline. Internal page links use the neutral route fade; same-page anchors scroll normally.

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
- **Don't** introduce a second interface accent color; extend the green family. The Clawd mascot's terracotta is a localized brand exception only.
- **Don't** lighten the pinned index's inactive color below Pale Ink, or use gradient text for headings (the second line is a solid tint).
- **Don't** let the nav go full-bleed or hard-code section padding; use `--gutter` and `--content-max`.
- **Don't** apply the wide `--content-max` to long-form reading pages; use `--prose-max`.
- **Don't** fabricate evidence (screenshots, links, metrics, certificate images) to fill a visual gap; and don't hand-roll a modal when a native `<dialog>` does the focus and inert work.


## Audit refinements

About stacks into one column at 900px and below, with extra inner side padding removed on tablet and phone. The hero has no availability/status note; mobile composition follows natural flex flow. Page metadata exports and the placeholder domain were removed at the user's request. Contact validates required fields before submission. The mobile navigation traps keyboard focus and closes when resized to desktop.


## Project case-study composition

Detailed project routes use a centered 48rem column (`--case-study-max`, scoped through `--prose-max` on `.project-case-study`). The Back link, title, screenshots, and narrative sections align to that column, creating generous desktop side margins. Descriptions and narrative paragraphs fill this shared width rather than applying narrower independent maximum widths; prose is justified with automatic hyphenation. Screenshots shrink with the column to maintain a consistent reading measure. Narrative headings stack above their content at every screen size, with a 1rem gap. The problem, What I built, and Outcome use the existing small Helixa heading treatment; dividers and larger spacing separate sections. Existing fluid page gutters remain on mobile. The credentials collection retains its wider 72rem layout.


The hero introduction stays left-aligned. "Based in Laguna, Philippines" appears on its own line with .35em separation from the introduction.


## Hero maintenance

Hero layout, inline graphics, responsive rules, and motion live together in the masthead block of `globals.css`. There is one desktop introduction rule and one mobile override; removed status-note styles and the former mobile grid are deleted. `GitHubActivityPlaceholder` is shared by the loading and unavailable-data states. Its fixed inline dimensions match the loaded graph, with no added client JavaScript.

## Readability and contrast refinements

Contact field boundaries use `--field-border` (`#858580`, about 3.4:1 on paper); decorative dividers retain `--line`. Contact labels stay at .875rem (14px at the default root size) in both resting and populated states, with reserved space above inputs and sentence case. Floating labels move without shrinking, and reduced motion removes their movement transition. Credential hover emphasis retains full opacity on neighboring rows. Section reveals animate movement only, preserving text contrast. Case-study prose remains justified on desktop and becomes left-aligned without automatic hyphenation at 720px and below.

At enlarged text sizes, long words may wrap as needed to preserve the reading column. Hero note links can shrink and wrap within their container, with arrows retaining their size.


## Contact form: soft minimalism

Contact fields and Send note share `--radius-control: 8px`. Fields use a full `--field-border` outline, clean paper fill, .875rem vertical and 1rem horizontal padding, and permanent .875rem sentence-case labels above the controls. Labels follow normal document flow, replacing the floating-label interaction. Keyboard focus uses a pine outline with a 3px offset. The textarea can resize vertically. Contact links remain simple divided rows; the section has no outer card or shadow. This supersedes earlier square-contact-control and floating-label guidance while preserving the editorial layout.


## Current hero mascot

The location line ends with a decorative pine-green glasses mascot, kept beside “Philippines” when wrapping. It uses a 2.125em square sprite viewport with pixel rendering.

Editable sources are `public/assets/sleeping_animation.piskel` and `public/assets/hoping_animation.piskel`. Browser exports are `mascot-sleeping-sheet.png` (four 32px frames) and `mascot-hopping-sheet.png` (nine 32px frames). Sleeping loops at 3 FPS. Hover plays the hop once at 12 FPS, holds its last frame, and pointer leave restores sleeping. Reduced motion uses still poses. The Mascot component pauses playback offscreen and when the tab is hidden.

## Contact form: soft minimalism

Contact fields and Send note share `--radius-control: 8px`. Fields use a full `--field-border` outline, clean paper fill, .875rem vertical and 1rem horizontal padding, and permanent .875rem sentence-case labels above the controls. Labels follow normal document flow, replacing the floating-label interaction. Keyboard focus uses a pine outline with a 3px offset. The textarea can resize vertically. Contact links remain simple divided rows; the section has no outer card or shadow. This supersedes earlier square-contact-control and floating-label guidance while preserving the editorial layout.

At enlarged text sizes, long words may wrap as needed to preserve the reading column. Hero note links can shrink and wrap within their container, with arrows retaining their size.

Details-only credential dialogs use `credential-dialog--compact` to constrain the native dialog wrapper to the same 36rem maximum as the visible panel. This keeps the panel centered and its backdrop hit area aligned; certificate dialogs retain the wider 66rem wrapper.


Credential modal certificate images link directly to the full-size asset in a new tab, with a visible keyboard focus outline and zoom cursor. The separate full-size text link and certificate-on-file note are omitted. Facts show only the issue date; Result and Credential ID are not displayed. Verification and related-project links remain available.

Haul uses a refined three-phone presentation mockup in `public/assets/thumbnails/haul-thrift-shop.png` (1672×941), shared by its homepage thumbnail and case study. The user approved minor interface changes from image editing because original screenshots are unavailable; this is a localized exception to exact screenshot preservation. Treat this asset as a presentation mockup rather than a pixel-exact interface capture.
