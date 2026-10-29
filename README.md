# HaseebSultan.ai

A personal homepage for Haseeb Sultan, AI Platform Engineer. Built with Astro and TypeScript, styled with plain CSS. Astro generates plain HTML and CSS; the only browser JavaScript is Umami analytics plus small scripts for the subscribe pop-up and the copy step of the Gemini link, and the site needs no backend, database, authentication, or environment variables.

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
- **Portrait:** replace `src/assets/images/haseeb.jpg` (a square photo works best). It appears in the hero, on About, in the article byline and author card, in the lesson hero, and in the Person structured data. The social card `public/og-default.jpg` (1200×630) also shows the portrait and the hero headline; replace it if either changes.
- **Social links:** update GitHub, LinkedIn, Topmate, and email in `src/data/site.ts`. They are shared by the navigation, footer, contact sections, and the `sameAs` profiles in the structured data.
- **Blog:** posts are listed in `src/data/blog.ts`. `articles` are opinion pieces (pages in `src/pages/blog/`); `lessons` are step-by-step lessons (pages in `src/pages/learning/`), numbered in the order listed, so add new lessons to the end. Each post needs a short `coverTitle`, shown on the text cover that listings use when a post has no image. The optional `accent` is the phrase in the title set in italic emerald ("AI Agents"). Lessons can add `tags` (shown after the category) and a `repo` (the code button in the lesson hero). The optional `image`, with `imageAlt` and `imageCaption`, appears under the post header, is the post's cover in listings, and becomes its social preview; posts without one use the site card. Post pages wrap their body in `src/layouts/ArticleLayout.astro` and pass `toc`, the list of section ids and labels: articles show it as a sticky "In this article" list, lessons as the numbered step rail. Articles open with a drop cap and end with the author card, two "Read next" posts, and the newsletter. Lessons get a forest hero, an `objectives` slot (the learning objectives, as `<li>` items), `StepHead` headings ("Step 01") that match the rail, and previous and next lessons. Code samples use `src/components/CodeBlock.astro`, which adds the filename and language bar. Shared article blocks are in `global.css`: `.pull-quote`, `.callout` (a forest statement), `.closing-question`, `.article-note`, `.caution` (security notes and limitations), and `.numbered` (serif-numbered lists). The RSS feed at `/rss.xml` updates itself; add every new page to `public/sitemap.xml`.
- **Email subscribers:** the subscribe form (`src/components/SubscribeForm.astro`) appears at the end of every post and lesson, on `/blog/` and `/learning/`, and in the homepage footer. Its `tone` is `forest` (the newsletter box), `night` (the dark footer), or `light` (the pop-up). It is a plain HTML form that posts to Kit; the Kit form number is `newsletterFormId` in `src/data/site.ts`, and every form is hidden while it is empty. Kit should redirect to `/subscribe/check-your-inbox/` after signup and to `/subscribe/confirmed/` after confirmation. After publishing a post, send it to subscribers as a Kit broadcast. `src/components/SubscribePopup.astro` adds a pop-up with the same form: it opens once a reader has scrolled halfway down a page or stayed 30 seconds, stays away for 30 days after it is closed, and never shows again in a browser that has subscribed, visited a `/subscribe/` page, or followed a Kit email link. It does not appear on pages marked `noindex`.
- **Read with AI:** `src/components/AskAI.astro` adds ChatGPT, Claude, Gemini, and Perplexity links under every post's byline. Each opens the tool with a prompt that points it at the post's URL (articles get a summary; lessons get taught step by step with a short quiz). ChatGPT, Claude, and Perplexity read the prompt from the link; Gemini cannot, so its link copies the prompt to the clipboard and opens Gemini.
- **Analytics:** Umami Cloud (no cookies) counts visitors, pages, referrers, countries, and devices; the website ID is `analytics.umamiWebsiteId` in `src/data/site.ts`, and `src/components/Analytics.astro` loads it only on haseebsultan.ai, so local previews are not counted. Custom events: `Subscribe` (with the form's `location`: article, footer, blog, lessons, or popup), `Subscribe pop-up` (shown or closed), `Read with AI` (tool and post), `Read next`, `Outbound link` (any link that leaves the site), and `Email link`. To name a new button, add `data-umami-event="Name"` to it.
- **Moving a page:** move its file, update its `href`, and add a redirect from the old URL in `astro.config.mjs`. Old `/writing/` links already redirect to `/blog/` and `/learning/`.
- **Projects:** `aiProjects` in `src/data/site.ts` holds open-source AI work; the first entry is the flagship featured on the homepage, with its case study at `src/pages/projects/k8s-agent.astro`. `experiments` holds work in progress. Delivered projects are in `src/data/resume.ts`; each has an `id`, used as its anchor on `/projects/` and to choose the homepage's selected projects in `src/components/home/SelectedProjects.astro`.
- **Upcoming lesson topics:** edit `topics` in `src/data/site.ts`. They appear on `/learning/`.
- **Professional background:** edit `src/data/resume.ts` for career history, delivered projects, expertise, contact details, certifications, and education (both on `/experience/`, with each issuer's `logo` in a white tile). Employer and client identities are deliberately omitted, and phone numbers are not published. `profile.title` is the current job title shown on `/experience/`; the positioning title, AI Platform Engineer, is `site.title`.
- **Homepage:** sections live in `src/components/home/` (hero, platform stack, track record, selected projects, recent posts, contact). The platform layers are `platformLayers` in `src/data/site.ts`, also used for the tool groups on `/experience/`. The years of experience are calculated at build time.
- **Visual style:** the "Ivory & Emerald" design. Colours and fonts are CSS variables at the top of `src/styles/global.css` (ivory `--paper`, `--ink`, the `--emerald` accent, deep `--forest` bands with `--mint` on them); components use the variables, not hex values. Corners are square and things are separated by hairline rules, not shadows. Shared patterns: the kicker strip (`.kicker-strip`), the "§ 01 · Label" section heading (`.sec-head`, `.sec-label`), forest bands (`.band`), buttons (`.btn-primary`, `.btn-secondary`, `.btn-forest`), and ruled grids (`.ruled`, `.ruled-grid`) that keep a hairline between cells as they wrap. Inner pages use `src/layouts/PageLayout.astro` for the kicker strip and the large serif h1; a `heading` slot puts the key phrase in an `<em>`, and a `hero` slot replaces the hero entirely.
- **Typography:** Instrument Serif (all headings, big numerals, and pull quotes, with an italic), Inter (body), and IBM Plex Mono (labels, dates, tags, and code) are served locally from `public/fonts/` as woff2. All three use the SIL Open Font License (`public/fonts/OFL.txt` for Inter, `OFL-instrument-serif.txt`, and `OFL-ibm-plex-mono.txt`); no external font service is contacted.
- **SEO:** the default title and description live in `src/data/site.ts`; `src/layouts/BaseLayout.astro` adds the metadata, social image, and Person or BlogPosting structured data. Pages accept optional title, description, canonical, and image props.
- **Domain:** update `site` in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together if the domain changes.
- **Favicon:** replace `public/favicon.svg`.

The top navigation opens Home, Blog, Lessons, Projects, Experience, and About, with a Contact button. The Blog lists articles and numbered lessons together, newest first; Lessons opens `/learning/`, the lesson series page (“Let's learn together”), which explains how the lessons work and lists upcoming topics. The homepage has the hero, the platform stack, headline results with the list of roles, selected projects led by the k8s-agent case study, the latest posts, contact links, and the newsletter in the footer. `/experience/` has the roles, expertise, certifications, and education. `/about/` tells the story behind the work, what I care about, the journey so far, and how to get in touch. The Blog can be filtered to articles or lessons, also as a link (`/blog/?type=lesson`). Unknown URLs show the 404 page. GitHub, LinkedIn, and Topmate links open in new tabs.

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
