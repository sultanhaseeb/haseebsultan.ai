# HaseebSultan.ai

A personal homepage for Haseeb Sultan, AI Platform Engineer. Built with Astro and TypeScript, styled with plain CSS. Astro generates plain HTML and CSS; this page ships no executable browser JavaScript and needs no backend, database, authentication, or environment variables.

## Local development

Use Node.js 22.12+ (a supported LTS release is recommended).

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

```sh
npm run check    # Check Astro and TypeScript
npm run build    # Type-check and generate dist/
npm run preview  # Serve the production output locally
```

## Update content

- **Portrait:** replace `public/images/haseeb.jpg`. The file is an optimized JPEG of the provided photo; the homepage shows it cropped to a 4:5 portrait (square on phones). A square image works best; update width/height in `src/components/home/HomeHero.astro` if its dimensions change.
- **Social links:** update your GitHub, LinkedIn, Topmate, and email in `src/data/site.ts`. These are shared by the navigation, hero, and footer.
- **Current experiments and topics:** edit `src/data/site.ts`. The topics appear in the AI platforms layer of the homepage stack.
- **Writing and Learning:** both are listed in `src/data/writing.ts`. `writingArticles` holds opinion articles about AI (pages in `src/pages/writing/`); `learningLessons` holds lessons from what you are studying (pages in `src/pages/learning/`), numbered in the order listed, so add new lessons to the end. To move a page between the two, move its file, update its `href`, and add a redirect from the old URL in `astro.config.mjs`. Article images live in `public/images/writing/`. Add every new page to `public/sitemap.xml`.
- **Professional background:** edit `src/data/resume.ts` for career history through 2025, nine delivered projects, expertise, contact details, certifications/exams, and education. Employer and client identities are deliberately omitted. Career history and skills are at `/experience/`, the portfolio at `/projects/`, articles at `/writing/`, and the journey and qualifications at `/about/`. Phone numbers are not published.
- **Homepage:** sections live in `src/components/home/` (hero, platform stack, track record, projects, writing, contact); the homepage design tokens are in `src/pages/index.astro`.
- **Visual style:** colours, fonts, header, footer, page headers, and article styles are tokens and rules in `src/styles/global.css`. Every page uses the same label-rail grid (`.h-grid`, `.h-label`).
- **Typography:** Inter (body), Archivo SemiExpanded 600 (homepage headings), and JetBrains Mono (homepage labels) are served locally from `public/fonts/`. All three use the SIL Open Font License (Inter’s copy is in `public/fonts/OFL.txt`); no external font service is contacted.
- **SEO:** the default title/description live in `src/data/site.ts`, with metadata and Person structured data in `src/layouts/BaseLayout.astro`. The layout accepts optional title, description, and canonical props. No generated social image is included.
- **Domain:** update `site` in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together if the domain changes.
- **Favicon:** replace `public/favicon.svg`.

The top navigation opens dedicated Home, Writing, Learning, Projects, Experience, and About pages. The homepage has an introduction with the portrait, a platform-stack overview of the four layers of work, headline results with a career timeline, three selected projects, the latest articles, the latest lesson, and contact links. Each section links to its dedicated page. All nine résumé projects and current experiments are on `/projects/`. The Writing page lists articles on what you think about AI. The Learning page (“Let's learn together”) lists numbered lessons, explains how the lessons work, and shows the topics on your learning list. The Jev lesson moved from `/writing/` to `/learning/`; its old URL redirects. `/about/` contains the journey, certifications, education, and contact links for email and Topmate. Career dates and qualifications reflect the résumé through 2025; update them only when newer information is available. GitHub, LinkedIn, and Topmate links open in new tabs.

## Deploy to Cloudflare

The site is published at `https://haseebsultan.ai`. Pushing to `main` on the GitHub repository triggers the Cloudflare Workers build and deployment. Run `ASTRO_TELEMETRY_DISABLED=1 npm run build` before pushing.

### Workers static assets

`wrangler.jsonc` serves `dist/` as static assets, without a Worker script or framework adapter:

```sh
npm run build
npx wrangler deploy
```

Wrangler will prompt you to authenticate with your Cloudflare account when needed. Set your custom domain in Cloudflare after deployment. See [Cloudflare static assets documentation](https://developers.cloudflare.com/workers/static-assets/).

### Cloudflare Pages

Connect the future GitHub repository to Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory. Configure a supported Node.js version matching the requirement above. No server adapter or runtime secrets are needed.

Commit source and `package-lock.json`; keep generated output, dependencies, and local configuration ignored by Git. Use `npm ci` for reproducible installs once a lockfile exists.
