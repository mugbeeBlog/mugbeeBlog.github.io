// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mugbeeBlog.github.io',
  vite: {
    server: {
      watch: {
        usePolling: true, // WSL2環境での変更検知安定化
      },
    },
    css: {
      devSourcemap: true,
    },
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtm.push'],
      },
    }),
    sitemap(),
  ],
});
