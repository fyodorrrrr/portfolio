# Portfolio content enrichment — design

Date: 2026-08-02

## Context

The portfolio (`src/app/page.js` → `Navbar → Hero → About → Skills → Projects → Contact → Footer`) recently moved from a dark theme to a warm-paper "editorial" aesthetic (commit `eecb70f light mode`): dateline section headers (`/ heading` + divider), a fixed nav rail with scroll-spy, monospace accent details, and scroll-reveal animation via `ScrollReveal.jsx`. This visual direction is distinctive and already above the bar for a CS-student portfolio — the redesign work here is **not** a visual overhaul.

The gap, from a recruiter-screening perspective, is content: no Education, Certifications, or Resume access, and the two Projects entries lack the challenge/impact framing that signals engineering judgment rather than tutorial-following.

## Goals

1. Add Education + Certifications content without cluttering the nav or breaking the established visual pattern.
2. Make the résumé a persistent, one-click action rather than a section a recruiter has to scroll to find.
3. Deepen the two existing project write-ups with challenge/impact framing.
4. Land basic SEO metadata and a quick accessibility check on the new markup.

## Non-goals

- No visual redesign (no dark mode, no glassmorphism, no color/typography changes).
- No Experience section (no formal experience to list yet, per author).
- No fabricated project entries — only the two real projects are enriched, not padded with a third.
- No full Lighthouse/performance audit — out of scope for this pass.

## Design

### 1. New "Background" section (Education + Certifications)

- New component: `src/components/Background.jsx`, `<section id="background" className="entry" data-reveal>`.
- Inserted in `page.js` between `About` and `Skills`.
- Structure mirrors `About.jsx`:
  - `.dateline` header: `/ background`
  - Lede paragraph (reuse `.about-lede`-equivalent styling) with placeholder education text: school, degree, expected graduation date. Example placeholder: `Bachelor of Science in Computer Science — [University Name], Expected [Month Year]`.
  - `.marginalia` list below, repurposed for certifications: each `.row` shows cert name on the left (`.k`) and issuer + year on the right (`.v`), same pattern as About's key/value rows. 2-3 placeholder rows, e.g. `[Certification Name]` / `[Issuer], [Year]`.
- No new CSS classes required — reuses `.entry`, `.dateline`, `.about-lede`, `.marginalia .row` from `globals.css`.
- Section alternation: About (plain) → Background (plain) → Skills (`alt`) → Projects (plain) → Contact (`alt`). Background does **not** get the `alt` class, preserving the existing alternating rhythm since Skills already carries `alt`.
- Navbar: add `{ id: "background", label: "background" }` to `navItems` in `Navbar.jsx`, positioned between `about` and `skills`. This is the only new nav-rail entry (rail goes from 5 to 6 items).

### 2. Résumé CTA (not a section)

- **Hero** (`Hero.jsx`): add a second CTA link next to the existing "Read the notes ↓", same `.masthead-cta` styling, e.g. "Download résumé ↓", `href="/resume.pdf"`, opening in a new tab (`target="_blank" rel="noreferrer"`) since it's a download rather than in-page navigation.
- **Navbar rail-foot** (`Navbar.jsx`): add a small résumé link in `.rail-foot`, near the social icons, so it's reachable from any scroll position on desktop. Mobile panel gets the same link near its social row.
- No PDF is generated as part of this work — `/resume.pdf` is a placeholder path. The links are fully wired so they work the moment a real `resume.pdf` is dropped into `public/`. Until then the link will 404, which is acceptable for a placeholder-content pass (explicitly called out in this spec, not silently shipped as broken without documentation).

### 3. Projects enrichment

- `Projects.jsx`: add two fields to each project object — `challenge` and `impact` (strings).
- Render both under the existing `.desc` paragraph, using the `.eyebrow` label style for a small heading (`Challenge`, `Impact`) followed by a plain paragraph, matching the visual weight already used for `.case-tech`. No new grid or layout changes — both blocks sit in the existing right-hand column of `.case`.
- Placeholder copy for both existing projects (Haul Thrift Shop, Portfolio Website), written as clearly-swappable placeholders (e.g. `[Describe the hardest technical problem you solved and how]`), not fabricated specifics.

### 4. SEO / accessibility pass

- `layout.js`: replace generic `metadata` (`title: "Portfolio"`, `description: "Showcasing my work and projects"`) with real values (name-based title, a real one-line description) plus `openGraph` (title, description, image using `/assets/port_jose.jpg`) and `metadataBase`.
- Add a favicon if a simple one can be produced from existing assets without fabricating a logo; otherwise leave Next's default and note it as a follow-up.
- Audit only the new markup (Background section, résumé links) for accessible names/labels — existing components already have reasonable `alt` text and `aria-label`s per current code and are not being re-audited in this pass.

## Testing / verification

No test suite exists in this repo (per `CLAUDE.md`). Verification is manual:
- `npm run lint` passes.
- `npm run dev` — visually confirm: Background section renders with correct alternation, nav rail scroll-spy includes `background`, résumé links present in Hero + rail-foot + mobile panel, Projects cards show Challenge/Impact, page `<title>` reflects new metadata.
- Manual responsive check at mobile/tablet/desktop breakpoints (existing breakpoints in `globals.css`: 640px, 780px, 900px).
- Manual keyboard-nav check on new interactive elements (résumé links, cert rows are non-interactive) — focus-visible styling already defined globally.

## Open items for the author to fill in later

- Real education details (school, degree, graduation date).
- Real certification names/issuers/dates.
- Real `public/resume.pdf` file.
- Real challenge/impact copy for both projects.
