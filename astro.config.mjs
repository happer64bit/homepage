import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL || "https://wintkhantlin.com";

export default defineConfig({
  site,
  image: {
    domains: ["www.bigocheatsheet.com"],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      weights: ["400", "500", "600", "700", "800"],
      cssVariable: "--font-heading",
      display: "swap",
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      weights: ["400", "500", "700"],
      cssVariable: "--font-body",
      display: "swap",
    },
  ],

  integrations: [
    mdx(),
    sitemap(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        },
      }),
    ],
  },

  experimental: {
    svgOptimizer: svgoOptimizer({
      plugins: ["preset-default", { name: "removeViewBox" }],
    }),
  },
});
