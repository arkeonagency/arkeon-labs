import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://arkeon-studio.vercel.app', // Update this if you have a custom domain later
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    // Keystatic removed from here
  ],
  output: 'static',
});