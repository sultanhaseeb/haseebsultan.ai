import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://haseebsultan.ai',
  output: 'static',
  // Keep old links working: Writing became the Blog, and lessons moved to /learning/.
  redirects: {
    '/writing': '/blog/',
    '/writing/the-control-problem': '/blog/the-control-problem/',
    '/writing/unlocking-system-1-ai-jev': '/learning/unlocking-system-1-ai-jev/',
    '/writing/spec-driven-development': '/learning/spec-driven-development/',
  },
});
