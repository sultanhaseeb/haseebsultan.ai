import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://haseebsultan.ai',
  output: 'static',
  // Lessons moved from /writing/ to /learning/; keep the old links working.
  redirects: {
    '/writing/unlocking-system-1-ai-jev': '/learning/unlocking-system-1-ai-jev/',
  },
});
