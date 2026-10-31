# Readability and contrast audit — 2026-10-31

Scope: homepage, credentials collection, all four case studies. Code inspection, fresh production build, browser layout measurements at 375px and 1440px, screenshots, and Impeccable detector. This is a focused audit, not a WCAG certification. No UI changes made. Contrast values use sRGB compositing against #f7f7f5; paper texture and ambient backgrounds introduce small local variations. Zoom, screen-reader behavior, and every dialog/hover combination were not exhaustively tested.

Implementation integrity: PASS with minor drift. Helixa, paper neutrals, pine headings, consistent spacing and real project imagery express a coherent portfolio. Detector returned 20 advisories, largely type-scale differences plus documented project-stage colors. Stage colors are intentional exceptions, not defects. Later 24px credential radii differ from the documented scale; reconcile only if intentionally retained. Earlier overridden font declarations are not effective rendered sizes.

| Dimension | Provisional score | Evidence |
|---|---:|---|
| Accessibility | 2/4 | Good baseline contrast; opacity creates contrast failures in hover states |
| Performance | 3/4 | Production build passes; optimized images and font loading; no runtime profiling |
| Responsive design | 3/4 | No horizontal overflow at tested widths across six routes; mobile justification hurts reading |
| Theming | 3/4 | Central palette; localized documented gradient exception; light-only design is intentional |
| Implementation integrity | 3/4 | Coherent system; documented scale and current implementation differ |
| Total | 14/20 | Good; focused fixes needed |

Five actionable findings: P0: 0, P1: 1, P2: 4. Scores are scoped estimates, not a full accessibility or performance assessment.

## Findings

1. **P1 — Hover dims other credential rows below text contrast requirements.** `src/app/globals.css:926`, selector `.credentials-list:has(...) .credential-row:not(:hover)`. Opacity .7 composites #656565 to approximately 2.95:1 on paper. Dates, issuer labels and view text are small, requiring 4.5:1 under WCAG 1.4.3. Keep neighboring text opaque; emphasize the current row through its existing highlight. Suggested command: `$impeccable harden`.

2. **P2 — Justified mobile case-study paragraphs create uneven word spacing.** `src/app/globals.css:669`, `.project-case-study` prose rule. Confirmed visually on AgriWise at 375px: stretched gaps and forced hyphenation make scanning harder. Use left alignment at mobile widths; consider it throughout case studies. The current justification was a deliberate documented preference, so changing it should be an explicit decision. This is a readability recommendation, not an AA failure. Suggested command: `$impeccable typeset`.

3. **P2 — Floating form labels become very small.** `src/app/globals.css:1344`, populated/focused label rule. Labels start at 12.48px and shrink to 10.56px, uppercase with added tracking. Contrast passes, but essential instructions become harder to read after entry. Keep labels around 13–14px and reserve sufficient space above fields. No WCAG minimum font size is implied. Suggested command: `$impeccable typeset`.

4. **P2 — Resting form boundaries are difficult to distinguish.** `src/app/globals.css:1315`, `.form-field input, .form-field textarea`. The #e5e5e2 bottom border is approximately 1.18:1 against paper. Labels help identify fields, so this is not automatically a proven 1.4.11 failure; however, transparent-looking fields and faint underlines weaken discoverability. Use a dedicated stronger field-border token, targeting 3:1 if the line identifies the control. Preserve faint decorative section rules. Suggested command: `$impeccable harden`.

5. **P2 — Reveal animation temporarily reduces reading contrast.** `src/app/globals.css:1515`, `.entry.reveal-pending`, and `src/components/ScrollReveal.jsx`. At opacity .55, secondary text is approximately 2.25:1 until the entry reveals. IntersectionObserver normally restores opacity as the section enters, so this is transient rather than a persistent text failure. Preserve full text opacity and animate movement instead. Reduced-motion and missing-IntersectionObserver fallbacks already show content. Suggested command: `$impeccable animate`.

## Contrast reference

| Pair on paper | Ratio | Interpretation |
|---|---:|---|
| #171717 | 16.71:1 | Excellent primary text; AAA |
| #656565 | 5.43:1 | AA normal text; below AAA normal-text threshold |
| 62% ink | 4.89:1 | AA normal text; limited margin |
| #3f7a5d | 4.71:1 | AA normal text on flat paper; headings comfortably meet large-text threshold |
| #2c4a3e | 9.08:1 | AAA normal text |
| 50% ink | 3.35:1 | Passes large text only; current project index is 32–48px |
| #656565 within row at .7 opacity | 2.95:1 | Fails normal text |
| #e5e5e2 border | 1.18:1 | Fine for decorative dividers; weak control boundaries |

The dark footer reverses the primary paper/ink pair and retains excellent contrast. Education uses opaque primary and secondary text on a faint neutral surface; the container does not create a contrast concern. Handwritten hero links use secondary ink on muted paper; preserve their generous type size. Disabled carousel buttons are exempt from minimum contrast requirements and should not be counted as text failures.

## Readability positives and tradeoffs

About is readable: desktop 34px introduction, mobile 24px, generous leading, left alignment, restrained highlights. Education fits its content on desktop and fills the mobile column. Project summaries render at 14.72px/22.08px: compact but legible; 16px would improve comfort if larger text is desired. Case-study prose is 17px/28.05px, with a shared 768px desktop column; this is broad for sustained reading but intentionally matches images. A narrower prose measure is optional, not a necessary correction. Credential titles render at 16.8px/23.52px with clear metadata hierarchy. Focus indicators, labeled fields, native dialogs, font fallbacks and reduced-motion paths are present in the implementation.

## Recommended order

1. `$impeccable harden`: remove credential dimming and strengthen field identification.
2. `$impeccable typeset`: resolve mobile justification and tiny floating labels.
3. `$impeccable animate`: keep reading surfaces opaque while revealing.
4. `$impeccable polish`: final desktop/mobile consistency check after approved fixes.

These refinements preserve the playful editorial identity; no new color family, typeface or card system is needed. You can ask me to run these one at a time, all at once, or in any order you prefer. Re-run `$impeccable audit` after fixes to compare findings.

## Fix verification

All five findings above were addressed in the follow-up implementation. Neighboring credential rows retain opacity 1 on hover; section reveal states retain opacity 1; contact labels remain 14px before and after entry with measured clearance above entered text; field borders now measure 3.46:1 on paper; case-study prose is left-aligned at 720px and below. Hero links and long words wrap when text is enlarged.

Validation: ESLint and fresh production build passed. Browser checks passed across the six routes at 375px, 768px, and 1440px without horizontal overflow. Populated contact fields and keyboard focus were visually inspected on mobile and desktop. Homepage at 200% root text size passed the horizontal-overflow check. Reduced-motion verification confirmed no pending section reveals and no spatial label transition. No browser page errors were recorded. The detector's 14px label advisory is an intentional, documented type role; pre-existing type-scale/radius advisories remain outside this focused change. This verification does not establish full WCAG compliance or exhaustive screen-reader coverage.
