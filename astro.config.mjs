import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://haseebsultan.ai',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
