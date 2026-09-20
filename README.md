# HaseebSultan.ai

A personal homepage for Haseeb Sultan, AI Platform Engineer. Built with Astro, TypeScript, and Tailwind CSS. Astro generates plain HTML and CSS; this page ships no executable browser JavaScript and needs no backend, database, authentication, or environment variables.

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

- **Portrait:** replace `public/images/haseeb.jpg`. The current image is an optimized JPEG of the provided photo, with no crop or effects. A square image works best; update width/height in `src/components/Hero.astro` if its dimensions change.
- **Social links:** update your GitHub, LinkedIn, and email in `src/data/site.ts`. These are shared by the navigation, hero, and footer.
- **Upcoming writing, current experiments, topics, and work areas:** edit `src/data/site.ts`.
- **Website articles:** edit `src/data/writing.ts` for featured article metadata and `src/pages/writing/` for article content. Spec-driven development is a two-page visual reader: the introduction is at `/writing/spec-driven-development/`, with its original image from `public/images/writing/`; page 2 is at `/writing/spec-driven-development/page-2/`, with a responsive workflow diagram and task-list example. `src/data/spec-driven-reader.ts` defines the pages, and `ReaderLayout.astro` supplies Previous/Next and numbered navigation. The Writing page and homepage show only a short preview with “Start reading.” Other published articles retain their Medium links.
- **Professional background:** edit `src/data/resume.ts` for career history through 2025, nine delivered projects, published articles, expertise, contact details, certifications/exams, and education. Employer and client identities are deliberately omitted. Career history and skills are at `/experience/`, the portfolio at `/projects/`, articles at `/writing/`, and the journey and qualifications at `/about/`. Phone numbers are not published.
- **Hobby / افسانچہ:** edit the Urdu pieces in `src/pages/hobby.astro`. The page uses right-to-left text and locally served Noto Nastaliq Urdu, licensed under `public/fonts/NotoNastaliqUrdu-OFL.txt`.
- **Hero and personal story:** edit the named components in `src/components/`.
- **Visual style:** edit `src/styles/global.css`; Tailwind utilities cover recurring layout patterns.
- **Typography:** Inter is served locally from `public/fonts/inter-latin-variable.woff2`. Its license is included in `public/fonts/OFL.txt`; no external font service is contacted.
- **SEO:** the default title/description live in `src/data/site.ts`, with metadata and Person structured data in `src/layouts/BaseLayout.astro`. The layout accepts optional title, description, and canonical props. No generated social image is included.
- **Domain:** update `site` in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together if the domain changes.
- **Favicon:** replace `public/favicon.svg`.

The top navigation opens dedicated Home, Writing, Projects, Experience, About, and Hobby pages. The homepage features three project previews, two published articles, and a short journey paragraph, each with an “Explore more” link to its dedicated page. All nine résumé projects and current experiments are on `/projects/`. The Writing page links to articles hosted on this site and on Medium, with upcoming writing in an expandable section. `/about/` contains the journey, education, certifications, and an email contact link. Career dates and qualifications reflect the résumé through 2025; update them only when newer information is available. GitHub and LinkedIn links open in new tabs.

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

Commit source and `package-lock.json`; keep generated output, dependencies, and local configuration ignored by Git. Use `npm ci` for reproducible installs once a lockfile exists. Tailwind is integrated using the [official Astro CSS guidance](https://docs.astro.build/en/guides/styling/).
