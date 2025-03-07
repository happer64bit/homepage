// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import remarkCodeTitles from 'remark-code-titles'
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  markdown: {
    gfm: true,
    remarkPlugins: [remarkCodeTitles()]

  },
  vite: {
      plugins: [
        tailwindcss()
      ]
  },

  integrations: [icon(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), playformInline()],
  site: "https://wintkhantlin.vercel.app"
});