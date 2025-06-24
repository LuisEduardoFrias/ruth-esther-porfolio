import tailwindcss from 'tailwindcss';
import tailwindAnimations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontSize: {
        '0x': '10px',
        '1x': '12px',
        '2x': '14px',
        '3x': '16px',
        '4x': '18px',
      },
      screens: {
        '-md': { 'max': '768px' },
      },
      colors: {
       background: 'var(--color-background)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
      }
    },
  },
  plugins: [
    tailwindcss,
    tailwindAnimations,
  ],
};