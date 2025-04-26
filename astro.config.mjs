// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind";
//import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
    output: 'server',

    // vite: {
    //     plugins: [tailwindcss()],
    //   },

    integrations: [tailwind()],

    build: {
        inlineStylesheets: 'always',
    },

    experimental: {
        svg: true,
    },

    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),

    integrations: [sitemap()],

    site: 'https://www.infolavelada.com/',
})
