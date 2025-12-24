import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel'; // <--- FIX 1: Updated Import

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://arkeon-studio.vercel.app',
  
  // FIX 2: Changed to 'static'. 
  // The Vercel adapter will still allow the CMS to run dynamically.
  output: 'server', 
  adapter: vercel({
    webAnalytics: { enabled: true } // Bonus: Free Vercel Analytics
  }),

  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), keystatic(), markdoc()],
});