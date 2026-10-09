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

- Single scrollable home page (`home → about → projects → credentials → contact`) with anchor-based nav. Extra routes: project case studies (`/projects/[slug]`) and a credentials index (`/credentials`); credential details open in an on-page dialog.
- Content is edited in source — there is no CMS. Projects and credentials live in `src/data/projects.js` and `src/data/credentials.js`; bio, contact details, and hero copy are hardcoded in their components (see CLAUDE.md).
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
- Warm-paper editorial visual identity with a single muted pine-green accent (`#2c4a3e`) is the established system — `DESIGN.md` describes it and `src/app/globals.css` is the final authority; not re-litigated here (that's DESIGN.md/new-work territory, not product truth).

## Evidence on Hand

- Real projects with confirmed facts (`src/data/projects.js`), each with a home-page thumbnail and case-study screenshots in `public/assets/`:
  - **AgriWise** — GIS + AI land-use decision support; Top 3 at DOST Hack4AProgress 2026. No public repo/demo link yet (links are `"#"` and hidden).
  - **EquipED** — AI-assisted evaluation and continuous-learning pipeline for Self-Paced Learning Modules. No public repo/demo link yet.
  - **SBCC Management System** — Django/PostgreSQL church management system (academic project). No public repo/demo link yet.
  - **Haul Thrift Marketplace** — Flutter/Firebase mobile thrift app. Has a real GitHub link and a screenshot.
- Real credentials (`src/data/credentials.js`): Pearson VUE Data Analytics certification (kept first), DeepLearning.AI "AI For Everyone", Coursera "Introduction to AI", CodeChum Java, DAPh Python fundamentals, hackathon placements/participation, and DICT/SEAMEO/AI Ready ASEAN events. Verify links exist only where the issuer provides one.
- Do not fabricate repo links, demo URLs, screenshots, metrics, or testimonials for projects lacking them — the user has explicitly chosen to leave those as placeholders rather than invent evidence.
- `public/assets/about-me.jpg`, `port.png`, and `port_jose.jpg` exist but are not used by the current components — not yet decided whether to use them or remove them.

## Product Principles

1. Show real, specific work (named projects, named technologies, named outcomes) over generic claims — the "practical systems" positioning depends on concreteness.
2. Never paper over missing evidence with invented links, screenshots, or claims; an honestly incomplete project entry is preferred to a fabricated one.
3. Keep the two audiences (recruiters and collaborators) served by the same content — don't fork messaging or add audience-specific pages/sections.
4. Content changes are code changes (no CMS) — decisions about "how easy is this to update" should assume a developer, not a non-technical editor, is doing it.

## Accessibility & Inclusion

No formally required standard was specified, but WCAG 2.1 AA has been the working target during recent audit/hardening passes (contrast fixes, label associations, skip-to-content link, keyboard-accessible mobile nav with focus trapping). Preserve this bar in future work rather than treating it as optional polish.
