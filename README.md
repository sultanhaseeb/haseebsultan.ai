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
- **Professional background:** edit `src/data/resume.ts` for career history through 2025, ten delivered projects, published articles, expertise, contact details, certifications/exams, and education. Employer and client identities are deliberately omitted. The full profile is at `/experience/`, with selected highlights on the homepage.
- **Hobby / افسانچہ:** edit the Urdu pieces in `src/pages/hobby.astro`. The page uses right-to-left text and locally served Noto Nastaliq Urdu, licensed under `public/fonts/NotoNastaliqUrdu-OFL.txt`.
- **Hero and personal story:** edit the named components in `src/components/`.
- **Visual style:** edit `src/styles/global.css`; Tailwind utilities cover recurring layout patterns.
- **Typography:** Inter is served locally from `public/fonts/inter-latin-variable.woff2`. Its license is included in `public/fonts/OFL.txt`; no external font service is contacted.
- **SEO:** the default title/description live in `src/data/site.ts`, with metadata and Person structured data in `src/layouts/BaseLayout.astro`. The layout accepts optional title, description, and canonical props. No generated social image is included.
- **Domain:** update `site` in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together if the domain changes.
- **Favicon:** replace `public/favicon.svg`.

The top navigation links to homepage sections, the professional background at `/experience/`, and Urdu writing at `/hobby/`. Published articles link to Medium. Upcoming writing and current experiments remain in expandable sections. The first three résumé projects appear on the homepage, with all ten on the Experience page. Career dates and qualifications reflect the résumé through 2025; update them only when newer information is available.

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
