// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

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
  ],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    edgeMiddleware: true,
    skewProtection: true,
    isr: {
      expiration: 60, // seconds
    }
  })
});