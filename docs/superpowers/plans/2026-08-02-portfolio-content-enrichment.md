# Portfolio Content Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Education/Certifications content, a persistent résumé CTA, deeper project write-ups, and basic SEO metadata to the portfolio, without changing its existing visual direction.

**Architecture:** Pure frontend content/markup additions to an existing Next.js 15 App Router single-page site. New `Background` section component follows the same `.entry`/`.dateline`/`.marginalia` CSS pattern already used by `About.jsx`. Résumé links reuse existing `.masthead-cta` and `.eyebrow` classes plus two small new CSS rules. No new dependencies, no routing changes, no test suite (per `CLAUDE.md` — verification is `npm run lint` + manual browser check).

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4, plain CSS in `src/app/globals.css`.

## Global Constraints

- Preserve the existing paper/editorial visual direction — no dark mode, no glassmorphism, no color/typography changes (per spec Non-goals).
- No fabricated content — all placeholder text must read as an obvious placeholder (e.g. `[University Name]`), never as invented specifics.
- No third project — only the two existing projects (Haul Thrift Shop, Portfolio Website) are enriched.
- No new nav-rail items beyond the single `background` entry (spec: keep rail lean, 6 items total).
- Reuse existing CSS classes/patterns wherever the spec calls for it; only add new CSS where explicitly specified below.
- `npm run lint` must pass after every task.

---

### Task 1: Background section (Education + Certifications)

**Files:**
- Create: `src/components/Background.jsx`
- Modify: `src/app/page.js`
- Modify: `src/components/Navbar.jsx:6-12` (the `navItems` array)

**Interfaces:**
- Produces: `Background` default export, a zero-prop React component rendering `<section id="background" className="entry" data-reveal>`.
- Consumes: existing global CSS classes `.entry`, `.dateline`, `.about-lede`, `.about-grid`, `.marginalia`, `.row` (already defined in `src/app/globals.css`, used identically by `src/components/About.jsx`). No new CSS.

- [ ] **Step 1: Create `src/components/Background.jsx`**

```jsx
export default function Background() {
  return (
    <section id="background" className="entry" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>background</h2>
        <span className="rule"></span>
      </div>

      <div className="about-grid">
        <p className="about-lede">
          <strong>[University Name]</strong> — Bachelor of Science in Computer
          Science, Expected [Month Year].
        </p>

        <div className="marginalia">
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
          <div className="row">
            <span className="k">[Certification Name]</span>
            <span className="v">[Issuer], [Year]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Insert `Background` between `About` and `Skills` in `src/app/page.js`**

Replace the full file contents with:

```jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Background from "@/components/Background";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-[15.5rem_minmax(0,1fr)] md:min-h-screen">
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <About />
        <Background />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollReveal />
    </div>
  );
}
```

- [ ] **Step 3: Add `background` to `navItems` in `src/components/Navbar.jsx`**

Replace lines 6-12:

```jsx
const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "background", label: "background" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];
```

(This single array drives both the desktop rail and the mobile panel, so no further Navbar changes are needed for this task.)

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run dev`, open `http://localhost:3000`.
Expected: a new "background" entry appears in the desktop nav rail (and mobile menu) between "about" and "skills"; clicking it scrolls to a new section with header `/ background`, a placeholder education line, and three placeholder certification rows styled like About's marginalia rows; the section does **not** have the alternate darker background (About and Background are both plain, Skills stays `alt`).

- [ ] **Step 5: Commit**

```bash
git add src/components/Background.jsx src/app/page.js src/components/Navbar.jsx
git commit -m "$(cat <<'EOF'
Add Background section for education and certifications

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Résumé CTA in Hero and Navbar

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/app/globals.css` (masthead CTA rules, around line 224-237)

**Interfaces:**
- Consumes: existing `.masthead-cta` class (defines link styling/hover), existing `.eyebrow` class (small uppercase mono label styling, already used for skill category headers).
- Produces: new CSS classes `.masthead-cta-row` (flex wrapper for two CTAs) used only in `Hero.jsx`.

- [ ] **Step 1: Add `.masthead-cta-row` rules to `src/app/globals.css`**

Find the existing block (originally lines 224-237):

```css
.masthead-cta {
  margin-top: 2.4rem;
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  font-size: .82rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  font-family: ui-monospace, monospace;
  padding-bottom: .3rem;
  border-bottom: 1px solid var(--ink);
  transition: gap .2s ease, color .2s ease, border-color .2s ease;
}
.masthead-cta:hover { gap: .9rem; color: var(--rust); border-color: var(--rust); }
```

Replace it with:

```css
.masthead-cta-row {
  margin-top: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
}
.masthead-cta {
  margin-top: 0;
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  font-size: .82rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  font-family: ui-monospace, monospace;
  padding-bottom: .3rem;
  border-bottom: 1px solid var(--ink);
  transition: gap .2s ease, color .2s ease, border-color .2s ease;
}
.masthead-cta:hover { gap: .9rem; color: var(--rust); border-color: var(--rust); }
```

- [ ] **Step 2: Wrap the Hero CTA and add the résumé link in `src/components/Hero.jsx`**

Replace:

```jsx
          <a href="#about" className="masthead-cta">
            Read the notes ↓
          </a>
```

with:

```jsx
          <div className="masthead-cta-row">
            <a href="#about" className="masthead-cta">
              Read the notes ↓
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="masthead-cta"
            >
              Download résumé ↓
            </a>
          </div>
```

- [ ] **Step 3: Add a résumé link to the desktop rail in `src/components/Navbar.jsx`**

Replace:

```jsx
        <div className="rail-foot">
          <SocialLinks className="flex gap-4 social" iconClassName="w-[17px] h-[17px]" />
          <span className="eyebrow">Manila, PH — GMT+8</span>
        </div>
```

with:

```jsx
        <div className="rail-foot">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="eyebrow hover:text-[var(--rust)] transition-colors duration-200"
          >
            Résumé ↗
          </a>
          <SocialLinks className="flex gap-4 social" iconClassName="w-[17px] h-[17px]" />
          <span className="eyebrow">Manila, PH — GMT+8</span>
        </div>
```

- [ ] **Step 4: Add a résumé link to the mobile panel in `src/components/Navbar.jsx`**

Replace:

```jsx
            <SocialLinks className="flex gap-5" />
```

with:

```jsx
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="eyebrow hover:text-[var(--rust)] transition-colors duration-200"
            >
              Résumé ↗
            </a>
            <SocialLinks className="flex gap-5" />
```

- [ ] **Step 5: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run dev`.
Expected: Hero shows two CTAs side by side ("Read the notes ↓" and "Download résumé ↓") wrapping to a new line on narrow viewports; desktop rail shows a "Résumé ↗" link above the social icons; mobile menu shows the same link above its social icons. Clicking any résumé link opens `/resume.pdf` in a new tab (expected to 404 until a real `public/resume.pdf` is added — this is documented, not a bug).

- [ ] **Step 6: Commit**

```bash
git add src/app/globals.css src/components/Hero.jsx src/components/Navbar.jsx
git commit -m "$(cat <<'EOF'
Add persistent resume CTA to Hero and nav rail

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Projects challenge/impact enrichment

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/app/globals.css` (new `.case-note` rule)

**Interfaces:**
- Consumes: existing `.eyebrow` class for the small label.
- Produces: new CSS class `.case-note` used only in `Projects.jsx`.

- [ ] **Step 1: Add `.case-note` rule to `src/app/globals.css`**

Add immediately after the existing `.case p.desc { ... }` rule:

```css
.case-note { margin-top: .9rem; }
.case-note .eyebrow { display: block; margin-bottom: .3rem; }
.case-note p { margin: 0; color: var(--ink-soft); line-height: 1.6; max-width: 34rem; }
```

- [ ] **Step 2: Add `challenge`/`impact` fields to both project objects in `src/components/Projects.jsx`**

Replace the `projects` array with:

```jsx
  const projects = [
    {
      id: 1,
      title: "Haul Thrift Shop",
      description:
        "A mobile thrift shop application built with Flutter and Firebase, featuring buyer and seller flows, wishlist, checkout, and real-time updates.",
      challenge:
        "[Describe the hardest technical problem you solved on this project and how you approached it]",
      impact:
        "[Describe the outcome, what you learned, or measurable impact of this project]",
      tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
      image: "/assets/HAUL.png",
      github: "https://github.com/fyodorrrrr/haul-app",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Tailwind CSS, and Next.js showcasing projects and skills with modern UI.",
      challenge:
        "[Describe the hardest technical problem you solved on this project and how you approached it]",
      impact:
        "[Describe the outcome, what you learned, or measurable impact of this project]",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "/assets/port.png",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];
```

- [ ] **Step 3: Render the new fields under the description**

Replace:

```jsx
            <h3>{project.title}</h3>
            <p className="desc">{project.description}</p>

            <div className="case-tech">
```

with:

```jsx
            <h3>{project.title}</h3>
            <p className="desc">{project.description}</p>

            <div className="case-note">
              <span className="eyebrow">Challenge</span>
              <p>{project.challenge}</p>
            </div>
            <div className="case-note">
              <span className="eyebrow">Impact</span>
              <p>{project.impact}</p>
            </div>

            <div className="case-tech">
```

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run dev`, scroll to Projects.
Expected: each project card shows "Challenge" and "Impact" labels with placeholder paragraphs beneath the description, above the tech tag list, styled consistently with the rest of the card.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css src/components/Projects.jsx
git commit -m "$(cat <<'EOF'
Add challenge/impact framing to project cards

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: SEO metadata

**Files:**
- Modify: `src/app/layout.js`

**Interfaces:**
- Produces: updated `metadata` export consumed by Next.js App Router's built-in `<head>` rendering (no other code depends on this export).

- [ ] **Step 1: Replace the `metadata` export in `src/app/layout.js`**

Replace:

```jsx
export const metadata = {
  title: "Portfolio",
  description: "Showcasing my work and projects",
};
```

with:

```jsx
export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jose Aquino — Computer Science Student & Developer",
  description:
    "Portfolio of Jose Aquino, a computer science student building web and mobile apps with React, Next.js, and Flutter.",
  openGraph: {
    title: "Jose Aquino — Computer Science Student & Developer",
    description:
      "Portfolio of Jose Aquino, a computer science student building web and mobile apps with React, Next.js, and Flutter.",
    images: ["/assets/port_jose.jpg"],
  },
};
```

(`metadataBase` uses a placeholder domain — replace `https://example.com` with the real deployed URL once known; this is called out again below as an open item.)

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.

Run: `npm run dev`, view page source or the browser tab title.
Expected: tab title reads "Jose Aquino — Computer Science Student & Developer"; view-source shows `<meta property="og:title" ...>`, `<meta property="og:description" ...>`, and `<meta property="og:image" content="https://example.com/assets/port_jose.jpg">`.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.js
git commit -m "$(cat <<'EOF'
Add real title, description, and Open Graph metadata

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Explicitly out of scope (per spec)

- Favicon: no suitable existing asset to repurpose without fabricating a logo; left as a follow-up.
- Full accessibility re-audit of pre-existing components (About, Skills, Contact, etc.) — only new markup introduced by this plan was designed with accessible names (`aria-label`/link text) in mind.
- Any visual/theme changes, dark mode, Experience section, or a third project entry.

## Open items for the author to fill in later

- Real education details in `Background.jsx` (school, degree, graduation date).
- Real certification rows in `Background.jsx`.
- Real `public/resume.pdf` file.
- Real challenge/impact copy in `Projects.jsx` for both projects.
- Real deployed domain in `src/app/layout.js`'s `metadataBase` (currently `https://example.com`).
