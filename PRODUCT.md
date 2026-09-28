# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted roughly equally:
- Recruiters and hiring managers evaluating Jose for full-time software engineering roles.
- Prospective freelance/collaboration contacts considering him for a project.

Both should leave able to answer "what has this person actually built" and have a low-friction way to reach out (contact form or direct email/LinkedIn/GitHub).

## Product Purpose

A single-page personal portfolio for Jose Aquino, a computer science student and DOST scholar at Laguna State Polytechnic University. It exists to demonstrate applied engineering ability (not just coursework) and to convert a visit into a conversation — a job interview, a freelance inquiry, or a professional connection.

## Positioning

Practical systems builder across AI, data, and full-stack engineering — not a single-track "frontend portfolio" or a purely academic research page. The differentiator is breadth applied to real problems: a GIS-based agricultural decision-support platform, a multi-agent LLM evaluation pipeline, and production-style REST APIs/data models (Django + PostgreSQL) for a real organization (a church management system). The academic credentials (DOST scholarship, ongoing thesis) support this positioning but are not the lead story.

## Operating Context

- Single scrollable page (`home → about → projects → contact`) with anchor-based nav; no multi-page routing except individual project case-study pages (`/projects/[slug]`).
- Content (bio, skills, project list, links) is hardcoded directly in components — there is no CMS. Updates happen by editing source files directly (see CLAUDE.md).
- Contact form submits via FormSubmit.co's AJAX endpoint to `aquinojxse@gmail.com` — no backend of its own.
- Deployment target: implied Vercel (Next.js default), exact production domain not yet finalized.

## Capabilities and Constraints

- Next.js 15 (App Router) / React 19 / Tailwind CSS 4, no test suite configured.
- No CMS or database — all content edits are code edits.
- Contact form has no spam protection beyond a honeypot field; no rate limiting.
- Undecided: final production domain (currently placeholder `example.com` in `metadataBase`).
- Undecided: whether to pursue real GitHub/demo links and screenshots for AgriWise, EquipED, and SBCC Management System, or leave them as placeholder (the detail page already hides "#" links gracefully rather than showing dead ones).

## Brand Commitments

- Name: Jose Aquino (email `aquinojxse@gmail.com`, GitHub `fyodorrrrr`, LinkedIn `jose-aquino-a16884382`).
- Custom typeface: Helixa (self-hosted, not a public/licensed web font choice up for revisiting casually).
- Paper/editorial visual identity (warm neutral backgrounds, `#cc5a1f`-family accent, dateline/masthead motifs) is an established incumbent system — see the CSS in `src/app/globals.css` as current authority; not re-litigated here (that's DESIGN.md/new-work territory, not product truth).

## Evidence on Hand

- Real projects with confirmed facts (`src/data/projects.js`):
  - **AgriWise** — GIS + AI land-use decision support. No public repo/demo link yet; no screenshot.
  - **EquipED** — multi-agent LLM evaluation pipeline for small language models. No public repo/demo link yet; no screenshot.
  - **SBCC Management System** — Django/PostgreSQL church management system (academic project). No public repo/demo link yet; no screenshot.
  - **Haul Thrift Shop** — Flutter/Firebase mobile thrift app. Has a real GitHub link and a real screenshot (`public/assets/HAUL.png`).
- Do not fabricate repo links, demo URLs, screenshots, metrics, or testimonials for the three projects lacking them — the user has explicitly chosen to leave those as placeholders for now rather than invent evidence.
- `public/assets/about-me.jpg` and `public/assets/port.png` exist but are currently unused in any component — not yet decided whether to use them (e.g., an About photo) or remove them.

## Product Principles

1. Show real, specific work (named projects, named technologies, named outcomes) over generic claims — the "practical systems" positioning depends on concreteness.
2. Never paper over missing evidence with invented links, screenshots, or claims; an honestly incomplete project entry is preferred to a fabricated one.
3. Keep the two audiences (recruiters and collaborators) served by the same content — don't fork messaging or add audience-specific pages/sections.
4. Content changes are code changes (no CMS) — decisions about "how easy is this to update" should assume a developer, not a non-technical editor, is doing it.

## Accessibility & Inclusion

No formally required standard was specified, but WCAG 2.1 AA has been the working target during recent audit/hardening passes (contrast fixes, label associations, skip-to-content link, keyboard-accessible mobile nav with focus trapping). Preserve this bar in future work rather than treating it as optional polish.
