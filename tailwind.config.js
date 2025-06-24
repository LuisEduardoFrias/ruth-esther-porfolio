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
            "tm-pr": 'var(--tm-pr)',
            "tm-se": 'var(--tm-se)',
            "tm-te": 'var(--tm-te)',

            "tm-text": 'var(--tm-text)',
            "tm-inv-text": 'var(--tm-inv-text)',
            "tm-text2": 'var(--tm-text2)',

            "tm-border": 'var(--tm-border)',
            "tm-inv-border": 'var(--tm-inv-border)',

            "tm-bg": 'var(--tm-bg)',
            "tm-inv-bg": 'var(--tm-inv-bg)',
         }
      },
   },
   plugins: [
      tailwindcss,
      tailwindAnimations,
   ],
};