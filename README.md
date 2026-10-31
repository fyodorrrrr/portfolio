# Jose Aquino — Portfolio

Personal portfolio showcasing projects across software engineering, AI, and data. Built with Next.js 15 App Router, React 19, and Tailwind CSS 4, and deployed on Vercel.

## Features

- Homepage with About, Projects, Credentials, and Contact sections.
- Individual project case studies with screenshot galleries.
- Filterable credentials with list/card views and accessible certificate dialogs.
- Live GitHub contribution calendar with hover and tap interactions.
- Custom pixel mascot: sleeping by default, hopping on hover or tap, plus a static mascot favicon.
- Responsive layouts, keyboard navigation, reduced-motion support, and section-aware browser titles.
- Contact form powered by FormSubmit.

## Local development

Use Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Changes to source files reload automatically.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm test` | Test contribution parsing and source fallbacks |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |

Before pushing, run lint, tests, and a production build. For interface changes, inspect desktop and mobile layouts, keyboard focus, and reduced-motion behavior.

## Project structure

```text
src/app/                  Routes, global styles, metadata, and favicon
src/components/           Homepage sections and shared interface components
src/data/projects.js      Project content, links, thumbnails, and galleries
src/data/credentials.js   Certifications, training, and recognition
src/lib/                  Contribution loading, parsing, and tests
public/assets/            Project images, certificates, logos, and mascot sprites
public/fonts/             Self-hosted Helixa fonts
```

Read [DESIGN.md](DESIGN.md) for visual rules and [PRODUCT.md](PRODUCT.md) for content and product context before changing the interface.

## Editing content

Update project entries in `src/data/projects.js` and credential entries in `src/data/credentials.js`. Bio, hero text, and contact details live in their section components. Replace the contact recipient in `src/components/Contact.jsx` when adapting the site for another person.

Certificate images open at full size when clicked in a credential dialog. Verification and project links appear when supplied. Missing project URLs are hidden rather than rendered as dead links.

## GitHub contributions

The hero displays the latest 12 calendar weeks for `fyodorrrrr`. It reads GitHub's public contribution calendar without requiring a token, with hourly revalidation.

Optionally set `GITHUB_TOKEN` in `.env.local` to prefer the GraphQL API. If the API fails or no token is configured, the public calendar is used instead. The token stays server-side; never prefix it with `NEXT_PUBLIC_` or commit its value.

The public fallback depends on GitHub's HTML structure. If both sources are unavailable or the markup cannot be parsed, the graph leaves a fixed-size empty slot to preserve the sentence layout. Contribution values are never fabricated.

## Mascot animations

Editable sources are `public/assets/sleeping_animation.piskel` and `public/assets/hoping_animation.piskel`. The browser uses their exported horizontal sprite sheets:

- `mascot-sleeping-sheet.png`: four 32px frames, looping at 3 FPS.
- `mascot-hopping-sheet.png`: nine 32px frames, playing once at 12 FPS and holding the last pose.

Desktop hover starts the hop; leaving restores sleeping. On touch screens, tapping toggles between hopping and sleeping. Animation pauses offscreen and when the tab is hidden. Reduced motion displays still poses. Sprite timing and sizing live in the masthead block of `src/app/globals.css`; interaction lives in `src/components/Mascot.jsx`.

The browser-tab icon is a static mascot frame in `src/app/favicon.ico`.

## Deployment

The site deploys on Vercel from the connected GitHub repository. Use the Next.js framework preset with the standard build command and output settings. Push changes to the configured production branch to trigger deployment.

No environment variables are required for the public contribution calendar. If using an optional `GITHUB_TOKEN`, add it separately to the relevant Vercel deployment environments and redeploy; local environment files are excluded from Git.

After deployment, check contribution loading, page titles, certificate links, and the contact form. Browsers may cache the favicon, so a refresh or reopening the tab may be needed after changing it.
