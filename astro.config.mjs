import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import remarkCodeTitles from "remark-code-titles";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://happer64bit.vercel.app',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      changefreq: "weekly",
    }),
    lottie(),
  ],
  markdown: {
    remarkPlugins: [
      remarkCodeTitles
    ],
    shikiConfig: {
      theme: "ayu-dark",
    }
  }
});