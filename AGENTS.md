# Repository Guidelines

## Project Structure & Module Organization

This is a personal portfolio built with Next.js 15 App Router and React 19. Routes and global styles live in `src/app/`; the homepage assembles sections in `src/app/page.js`. Reusable and section-specific UI lives in `src/components/`. Edit project and credential entries in `src/data/projects.js` and `src/data/credentials.js`. Static images, certificates, logos, and Helixa fonts live in `public/`. Read `DESIGN.md` for visual rules and `PRODUCT.md` for content context before changing either.

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local site at `http://localhost:3000`.
- `npm run lint` runs ESLint with Next.js Core Web Vitals rules.
- `npm run build` checks the production build; `npm run start` serves that build locally.

Run lint and build before opening a pull request. There is currently no `npm test` script or automated test suite.

## Coding Style & Naming Conventions

Follow the surrounding JavaScript and JSX style: two-space indentation, semicolons, and PascalCase component files such as `About.jsx`. Keep route files named according to App Router conventions (`page.js`, `layout.js`). Use the `@/` alias for imports from `src/` when it improves clarity. Put shared colors, spacing, and typography in `src/app/globals.css` using existing CSS tokens; avoid one-off values when a token already fits. Name new image assets descriptively in kebab-case.

## Design Collaboration

The user is exploring playful minimalism and is open to modifying any section to keep the portfolio coherent in both visual style and personality. Follow the "Design Evolution & Identity Checks" section in `DESIGN.md`. Whenever proposing or introducing a new design treatment (for example, icons between words or expressive text highlights), proactively flag any drift from the other sections, explain whether it can work as an intentional exception, and identify what else would need to evolve. Existing design rules are the current baseline, not permanent constraints against an agreed identity change.

## Testing Guidelines

No test framework or coverage threshold is configured. For UI changes, run `npm run lint` and `npm run build`, then inspect the affected route at desktop and mobile widths. Check keyboard focus, readable contrast, image loading, and links relevant to the change. If tests are introduced, keep them close to the behavior they verify and document the new test command in `package.json`.

## Commits & Pull Requests

Recent commits use short imperative subjects, such as “Harden credentials…” and “Update docs…”. Keep each commit focused and describe the user-visible change. Pull requests should explain the change, list validation performed, and include before/after screenshots for visual work. Link an issue when one exists. Do not add AI attribution trailers to commits.
