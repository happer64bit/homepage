// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import remarkCodeTitles from 'remark-code-titles'
import icon from "astro-icon";

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

  integrations: [icon()]
});