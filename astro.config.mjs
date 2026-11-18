// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://bruno.arq.br',
  // Astro 7 defaults to 'jsx', which drops spaces between inline elements
  // (e.g. "entre <em>estética</em>" → "entreestética"). Keep the v5 behavior.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
