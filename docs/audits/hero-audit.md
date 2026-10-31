# Hero technical audit

Scope: `Hero.jsx`, `GitHubActivity.jsx`, `ClaudeMascot.jsx`, and the relevant rules in `globals.css`. Audit only; no UI fixes applied.

## Implementation integrity verdict

Pass with maintenance findings. The paper palette, Helixa, handwritten navigation, real contribution data, and localized mascot color follow the documented identity. The mascot and decorative hover motion are deliberate choices, not generic detector failures.

## Health score

| Dimension | Score | Evidence |
| --- | --- | --- |
| Accessibility | 4/4 | Semantic h1, labeled graphics, visible keyboard focus, working anchor links, reduced-motion alternatives, readable text colors. |
| Performance | 3/4 | CSS/SVG effects and server-cached data; graph has no reserved Suspense space. |
| Responsive design | 4/4 | Hero fits tested normal viewports and enlarged text without hero clipping. |
| Theming | 4/4 | Existing tokens plus the documented localized mascot color. Single light theme is intentional. |
| Implementation integrity | 3/4 | Repeated superseded hero rules and stale design-system typography records. |
| Total | 18/20 | Excellent; targeted maintenance recommended. |

Scores describe the inspected hero and tested conditions, not formal whole-site WCAG certification.

## Findings

### P2: Unreserved asynchronous contribution graph

- Location: `src/components/Hero.jsx`, Suspense around GitHubActivity; `src/components/GitHubActivity.jsx`, early null return and server fetch.
- Category: Performance / responsive stability.
- Evidence: Suspense fallback is null and neither the fallback nor its parent reserves the graph's inline space. The 12-week graphic inserts a box approximately 87px wide and 52px tall when data resolves.
- Impact: A streamed or delayed response can change line wrapping after the introduction first appears. Cached production rendering was stable in this audit; a real CLS regression was not measured. This is a structural risk, not a measured performance failure.
- Recommendation: Reserve matching inline dimensions while loading; keep the unavailable-data treatment intentional. Test delayed and unavailable API responses before selecting the final fallback.
- Suggested command: `$impeccable optimize`.

### P2: Hero rules are duplicated and partially superseded

- Location: `src/app/globals.css`, original `.masthead-role` and mobile grid rules, followed by the restored editorial refinements and final mobile overrides.
- Category: Implementation integrity.
- Evidence: Earlier 54rem width and typography are overridden by later 62rem declarations; the earlier mobile grid is overridden by flex flow; removed status-note selectors remain. Final mobile text sizing differs from an intermediate mobile declaration.
- Impact: An edit to the apparent primary rule may have no visible effect, making future responsive refinements error-prone. Current rendering passed the tested sizes.
- Recommendation: Consolidate hero rules into one block with one set of breakpoint overrides, preserving the computed values verified here. Update the design-system typography records to those values.
- Suggested command: `$impeccable extract`.

## Verified checks

- Current production build passed.
- Viewports: 320×740, 375×812, 768×900, 1440×900, 1440×700.
- At standard sizes there was no document horizontal overflow. Hero link rectangles were at least 44px in both dimensions.
- At 375px with a 200% root font size, the hero itself had no overflowing or clipped descendants. It grew vertically as expected. Document overflow observed in that stress test was outside the hero and was excluded from this scoped audit.
- Reduced-motion emulation left no active hero CSS animations.
- The real GitHub graph rendered in the inspected build; its token remains server-side, with 24-hour caching and a five-second fetch timeout.
- Keyboard focus was visibly outlined. Contact and work anchors point to existing sections.
- Decorative SVG strokes are hidden from assistive technology; the name uses the page's h1.
- Main prose uses graphite on paper, approximately 5.4:1 contrast. Sticker labels use graphite on muted gray, approximately 4.5:1; no verified AA text contrast failure was found.

## Detector triage

The detector returned 22 stylesheet advisories; most belong to other sections and were excluded. Hero-related typography advisories include old overridden sizes and current sizes whose records differ between DESIGN.md's prose/token ramp/sidecar. They support the consolidation finding, not a claim that the visible font sizes are wrong. The documented terracotta mascot is a sanctioned exception. No detector suppressions were added and no unrelated drift was repaired.

## Positive findings

The hero stays visible before JavaScript, uses compact vector assets, avoids continuous idle animation, respects reduced motion, and preserves real evidence instead of invented contribution activity. Both standard mobile and desktop captures fit the intended layout.

## Recommended order

1. `$impeccable optimize`: stabilize the asynchronous graph's inline space.
2. `$impeccable extract`: consolidate the hero CSS and its responsive declarations.
3. `$impeccable polish`: confirm the resulting spacing and interaction states.

No P0 or P1 issues were verified. Two P2 findings remain; there are no fixes or suppressions in this audit.

## Resolution after optimize → extract → polish

Both P2 findings were addressed. A shared hidden placeholder reserves the graph's approximately 87×52px inline box during loading and unavailable data. Hero CSS is consolidated into one block; obsolete status and overridden mobile-grid declarations were removed. Hero Lede documentation and its sidecar metadata now reflect the actual desktop/mobile sizes. No generic components or additional client JavaScript were introduced.

Browser verification at 320×740, 375×812, 768×900, 1440×900, and 1440×700 found identical introduction height/top position for loaded and placeholder states (0px change). Removing the inline slot in a controlled comparison changed introduction height by approximately 15–60px depending on viewport, establishing the risk this reservation addresses. This measures layout geometry, not field Core Web Vitals. Loaded screenshots retained the audited composition. Enlarged text, reduced motion, visible focus, and the contact anchor passed; there were no runtime errors. Lint and production build passed; home route JavaScript remained 7.82kB in the build output.

No new audit score is assigned by this resolution check.
