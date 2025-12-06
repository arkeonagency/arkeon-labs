import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'; // <--- Import

export default defineConfig({
  site: 'https://arkeon-studio.vercel.app',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    partytown({ // <--- Add config
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: 'static',
});