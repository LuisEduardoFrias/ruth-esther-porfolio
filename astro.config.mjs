// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
   output: 'server',
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

   //site: 'https://www.ruth-esther-porfolio.com/',
})