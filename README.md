# HaseebSultan.ai

A personal homepage for Haseeb Sultan, AI Platform Engineer. Built with Astro and TypeScript, styled with plain CSS. Astro generates plain HTML and CSS; the only browser JavaScript is the small subscribe pop-up script, and the site needs no backend, database, authentication, or environment variables.

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

- **Images:** put images in `src/assets/images/` and import them; Astro resizes them and converts them to WebP at build time, so a large original is fine. Only files that need a fixed URL live in `public/`: the favicon, fonts, and the social card.
- **Portrait:** replace `src/assets/images/haseeb.jpg` (a square photo works best). It appears in the hero, on About, in the author box under each post, and in the Person structured data. The social card `public/og-default.jpg` (1200×630) also shows the portrait and the hero headline; replace it if either changes.
- **Social links:** update GitHub, LinkedIn, Topmate, and email in `src/data/site.ts`. They are shared by the navigation, footer, contact sections, and the `sameAs` profiles in the structured data.
- **Blog:** posts are listed in `src/data/blog.ts`. `articles` are opinion pieces (pages in `src/pages/blog/`); `lessons` are step-by-step lessons (pages in `src/pages/learning/`), numbered in the order listed, so add new lessons to the end. Each post needs a short `coverTitle` for its cover card in listings. The optional `image`, with `imageAlt` and `imageCaption`, appears under the post header and becomes the post's social preview; posts without one use the site card. Post pages wrap their body in `src/layouts/ArticleLayout.astro`, which adds the header, author box, and read next. The RSS feed at `/rss.xml` updates itself; add every new page to `public/sitemap.xml`.
- **Email subscribers:** the subscribe form (`src/components/SubscribeForm.astro`) appears at the end of every post and lesson, on `/blog/` and `/learning/`, and in the footer. It is a plain HTML form that posts to Kit; the Kit form number is `newsletterFormId` in `src/data/site.ts`, and every form is hidden while it is empty. Kit should redirect to `/subscribe/check-your-inbox/` after signup and to `/subscribe/confirmed/` after confirmation. After publishing a post, send it to subscribers as a Kit broadcast. `src/components/SubscribePopup.astro` adds a pop-up with the same form: it opens once a reader has scrolled halfway down a page or stayed 30 seconds, stays away for 30 days after it is closed, and never shows again in a browser that has subscribed, visited a `/subscribe/` page, or followed a Kit email link. It does not appear on pages marked `noindex`.
- **Moving a page:** move its file, update its `href`, and add a redirect from the old URL in `astro.config.mjs`. Old `/writing/` links already redirect to `/blog/` and `/learning/`.
- **Projects:** `aiProjects` in `src/data/site.ts` holds open-source AI work; the first entry is the flagship featured on the homepage, with its case study at `src/pages/projects/k8s-agent.astro`. `experiments` holds work in progress. Delivered projects are in `src/data/resume.ts`; each has an `id`, used as its anchor on `/projects/` and to choose the homepage's selected projects in `src/components/home/SelectedProjects.astro`.
- **Upcoming lesson topics:** edit `topics` in `src/data/site.ts`. They appear on `/learning/`.
- **Professional background:** edit `src/data/resume.ts` for career history, delivered projects, expertise, contact details, certifications, and education. Employer and client identities are deliberately omitted, and phone numbers are not published. `profile.title` is the current job title shown on `/experience/`; the positioning title, AI Platform Engineer, is `site.title`.
- **Homepage:** sections live in `src/components/home/` (hero, platform stack, track record, selected projects, recent posts, contact). The years of experience and the career timeline are calculated at build time.
- **Visual style:** colours, fonts, header, footer, page headers, and article styles are tokens and rules in `src/styles/global.css`. Every page uses the same label-rail grid (`.h-grid`, `.h-label`).
- **Typography:** Inter (body), Archivo SemiExpanded 600 (headings), and JetBrains Mono (labels) are served locally from `public/fonts/`. All three use the SIL Open Font License (Inter’s copy is in `public/fonts/OFL.txt`); no external font service is contacted.
- **SEO:** the default title and description live in `src/data/site.ts`; `src/layouts/BaseLayout.astro` adds the metadata, social image, and Person or BlogPosting structured data. Pages accept optional title, description, canonical, and image props.
- **Domain:** update `site` in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together if the domain changes.
- **Favicon:** replace `public/favicon.svg`.

The top navigation opens Home, Blog, Lessons, Projects, Experience, and About, with a Contact button. The Blog lists articles and numbered lessons together, newest first; Lessons opens `/learning/`, the lesson series page (“Let's learn together”), which explains how the lessons work and lists upcoming topics. The homepage has the hero, the platform stack, headline results with a career timeline, selected projects led by the k8s-agent case study, the latest posts, and contact links. `/about/` tells the story behind the work, followed by certifications, education, and contact links. Unknown URLs show the 404 page. GitHub, LinkedIn, and Topmate links open in new tabs.

## Deploy to Cloudflare

The site is published at `https://haseebsultan.ai`. Pushing to `main` on the GitHub repository triggers the Cloudflare Workers build and deployment. Run `ASTRO_TELEMETRY_DISABLED=1 npm run build` before pushing.

### Workers static assets

`wrangler.jsonc` serves `dist/` as static assets, without a Worker script or framework adapter, and serves `dist/404.html` for paths that have no page:

```sh
npm run build
npx wrangler deploy
```

Wrangler will prompt you to authenticate with your Cloudflare account when needed. Set your custom domain in Cloudflare after deployment. See [Cloudflare static assets documentation](https://developers.cloudflare.com/workers/static-assets/).

### Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory. Configure a supported Node.js version matching the requirement above. No server adapter or runtime secrets are needed.

Commit source and `package-lock.json`; keep generated output, dependencies, and local configuration ignored by Git. Use `npm ci` for reproducible installs.
