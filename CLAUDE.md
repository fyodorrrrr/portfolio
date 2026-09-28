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

Single-page personal portfolio built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS 4**. No backend, no data fetching, no routing beyond the one page — the entire site is `src/app/page.js` rendering a fixed stack of section components in order:

```
Navbar → Hero → About → Skills → Projects → Contact → Footer
```

Each section component (`src/components/*.jsx`) is self-contained, sets its own `<section id="...">` anchor, and owns its own background color/spacing. Navigation works entirely by anchor scrolling — `Navbar.jsx` calls `scrollIntoView`/`scrollTo` against `document.getElementById(sectionId)` rather than using Next.js routing. `Navbar.jsx` also does scroll-spy (tracks scroll position to highlight the active nav item) and needs `"use client"`; most other section components are server components except where interactivity is required.

Path alias `@/*` maps to `src/*` (see `jsconfig.json`); imports in the codebase are inconsistent between `@/components/...` and relative `../components/...` — both work.

### Styling

- Tailwind CSS 4 via `@import "tailwindcss"` in `src/app/globals.css` (no traditional `tailwind.config.js` content/theme wiring needed for v4, though one exists defining `sans`/`heading` font families that are largely superseded).
- Actual body font is `Helixa` (custom `@font-face` in `globals.css`, files in `public/fonts/`), loaded ahead of the Tailwind config's `Inter`/`Sora` and the `next/font` Geist fonts wired up in `layout.js` — Helixa wins via the `body { font-family }` override. Be aware there are three font systems layered here; when touching typography, check which one is actually rendering.
- Shared visual language across sections: warm neutral backgrounds alternating between `#f2f0ea` and `#ece9e2`, accent color `#cc5a1f`, text colors `#111111`/`#555555`. Section headers follow a repeated `/ heading` + horizontal divider pattern (see About/Skills/Projects/Contact for the pattern to copy when adding sections).

### Content/data

Content (bio text, skills list, project list, social links) is hardcoded directly inside each component — there is no CMS, JSON data file, or MDX source. Update copy by editing the relevant component in `src/components/`.

Images referenced by components live in `public/assets/` and are loaded via plain `<img>` tags (not `next/image`).

## Git commits

Do not add a `Co-Authored-By: Claude ...` (or any AI attribution) line to commit messages in this repo.
