# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (next/core-web-vitals config)
```

There is no test suite configured in this repo.

## Architecture

Personal portfolio built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS 4**. No backend and no data fetching. The home page (`src/app/page.js`) renders a fixed stack of section components in order:

```
Navbar → Hero → About → Projects → Credentials → Contact → Footer
```

Other routes: `/projects/[slug]` (case study), and `/credentials` (all credentials, filterable grid). The case-study route is statically generated (`generateStaticParams`).

Each home section component (`src/components/*.jsx`) is self-contained, sets its own `<section id="...">` anchor, and uses the shared `.entry` class for vertical padding and the scroll-reveal fade (`data-reveal`, driven by `ScrollReveal.jsx`). Home-page navigation is anchor scrolling: `Navbar.jsx` calls `scrollIntoView` against `document.getElementById(sectionId)` and does its own scroll-spy (`offsetTop` against scroll position) to highlight the active item.

Path alias `@/*` maps to `src/*` (see `jsconfig.json`); imports are a mix of `@/components/...` and relative paths. Both work.

### Section layout patterns

- **`SectionIntro`**: the shared section header (small note on the left, large light-weight heading on the right, with a tinted second line). Used by About, Projects, and Contact. The Hero does *not* use it (it has its own composition: a tagline above a giant edge-to-edge name sized with container-query units), and Credentials uses only its heading style, left-aligned above the rows. `SectionHeading.jsx` is the older centered "dateline" header and is currently unused.
- **Pinned index (`.split` + `.pin-col` + `.pin-index`)**: a sticky left column with a large index of items and a right column of content. Used by Projects (project names). Active-item tracking comes from `useScrollSpy.js` (IntersectionObserver on the middle band of the viewport, matching `data-spy` values); `scrollToTarget` handles index clicks. Below 900px the index is hidden and the layout collapses to one column.
- **Projects** shows each project as a dark gradient "stage" card (tech-tag pill + framed thumbnail) with title and caption underneath. `Projects.jsx` is a client component because of the scroll-spy.
- **Credentials**: `CredentialsList.jsx` has two variants. `rows` is the home-page list (grouped by category with large category headings, limited per category, shown full-width under a left-aligned "credentials, training & recognition" heading; nothing is pinned) and `grid` is the `/credentials` page (cards with category filter chips). Rows or cards with an `image` or `modal: true` open `CredentialModal.jsx` (no `image` gives the compact details-only layout), a native `<dialog>` opened with `showModal()` (the browser handles the focus trap, inert background, Escape, and focus return; the component adds the scroll lock and click-outside-to-close). Items with neither link straight to their `verifyUrl`.

### Page transition (curtain)

`PageCurtain.jsx` (mounted once in `layout.js`) is a fixed full-screen accent-colored overlay. `CurtainLink.jsx` is a drop-in `next/link` replacement that, on a plain left-click, wipes the curtain across (left to right), navigates behind it, waits for the new route, then wipes it off. It is skipped for modifier-clicks, reduced motion, or while a run is in progress. Used by project cards and the project page's Back link. It deliberately avoids the View Transitions API: the browser pauses rendering during a view transition's update callback, which broke an earlier attempt.

### Styling

- Tailwind CSS 4 via `@import "tailwindcss"` in `src/app/globals.css`. There is no `tailwind.config.js`; theme values live in `globals.css` (`@theme inline` and `:root`). Most styling is hand-written CSS classes in `globals.css`, with Tailwind utilities used sparingly (e.g. `Footer.jsx`).
- The typeface is `Helixa`, self-hosted from `public/fonts/` via `@font-face` in `globals.css` (weights 400, 450, 700). The one exception is the hero's hand-lettered margin notes, which use Gaegu (700) loaded through `next/font/google` in `layout.js` as the `--font-hand` variable; don't use it anywhere else. Functional text (labels, tags, buttons) is marked by uppercase + letter-spacing, not by a different font.
- Core tokens in `:root`: `--paper` (`#f7f7f5`) page background, `--paper-deep` (`#ffffff`), `--ink` (`#171717`), `--ink-soft` (`#656565`), `--accent` (`#2c4a3e`, pine green), `--accent-soft` (`#3f7a5d`, tint for the second line of big headings), `--line` hairline borders.
- **Page margins and widths come from three tokens**: `--gutter` (`clamp(1rem, 2.5vw, 2.5rem)`, left/right padding for sections, navbar, footer), `--content-max` (`100rem`, widest a section's content gets), `--prose-max` (`72rem`, reading width for case-study and `/credentials` pages). Change these instead of adding per-section padding.
- Design intent and rules live in `DESIGN.md`; product context in `PRODUCT.md`.

### Content/data

There is no CMS. Content is edited in source:

- `src/data/projects.js`: projects (title, caption, case-study copy, tech, `thumbnail`, `gallery`, links). Home-page cards use the `thumbnail` (`public/assets/thumbnails/<slug>.png`, 3600×2025); the case-study page uses `gallery` screenshots. Links set to `"#"` are hidden on the detail page.
- `src/data/credentials.js`: credentials (category, title, issuer, date, `verifyUrl`, `logo`, `image`, `description`, `skills`, optional `fullDate`/`credentialId`/`result`/`related`). **Array order is display order within a category, and Data Analytics Certification is kept first.** The category `"Participations & Events"` is hidden from the home page and shown only on `/credentials`.
- Bio text (About), contact details, and the hero copy are hardcoded in their components.

Images live in `public/assets/`. Project thumbnails and gallery screenshots use `next/image`; small logos and the credential watermark use plain `<img>`. Certificate images are lossy WebP (about 50–190 KB each; keep new ones that size) in `public/assets/certificates/` with kebab-case filenames, and logos are in `public/assets/logo/`. A credential's `image` must be a real certificate scan, never a logo; leave it out until one exists.

The contact form posts to FormSubmit.co (`Contact.jsx`); there is no server code.

## Git commits

Do not add a `Co-Authored-By: Claude ...` (or any AI attribution) line to commit messages in this repo.
