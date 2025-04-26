import tailwindcss from 'tailwindcss';
import tailwindAnimations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      screens: {
        '-md': { 'max': '768px' },
      },
    },
  },
  plugins: [
    tailwindcss,
    tailwindAnimations,
  ],
};
