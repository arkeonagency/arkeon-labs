/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        arkeon: {
          charcoal: '#1C1C1E',
          gold: '#E6C55B',
          white: '#F7F7F7',
          gray: '#A0A0A0',
          blue: '#2B3A67',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Recoleta', ...defaultTheme.fontFamily.serif], // Ensure you are using 'Playfair Display' if Recoleta isn't loaded locally
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1200px',
        },
      },
      // Extend typography styles if needed
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: { color: theme('colors.arkeon.gold') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // <--- THIS IS THE FIX
  ],
};