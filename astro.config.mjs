// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [],
    gfm: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx({
      extendMarkdownConfig: true,
      optimize: true
    })
  ]
});