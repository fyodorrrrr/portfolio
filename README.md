This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Hero GitHub activity

The hero shows real contribution activity for `fyodorrrrr` from GitHub's public calendar without a token. An optional server-side `GITHUB_TOKEN` enables GraphQL as the preferred source; failed API requests fall back to the public calendar. Responses refresh hourly. On Vercel, set any optional token under Project Settings → Environment Variables and redeploy; local `.env` files are not uploaded by Git. Never use a `NEXT_PUBLIC_` prefix or commit the token.

Run `npm test` for contribution-calendar parsing and fallback tests. `npm run lint` and `npm run build` validate the application. Browser titles use “Jose Aquino” on Home and “Jose Aquino | About” (and equivalent section names) as navigation changes; credentials and case studies have their own route titles.

The graph displays the latest 12 calendar weeks, cached for one hour. If both GitHub sources are unavailable, the graph is omitted without interrupting the introduction. Optional tokens need read access only. The public-calendar fallback depends on GitHub’s HTML structure; parsing rejects incomplete data safely.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
