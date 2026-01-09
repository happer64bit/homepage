// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import partytown from "@astrojs/partytown";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Reddit Sans",
        weights: ["400", "600", "800", "900"],
        cssVariable: '--font-sans',
        display: "swap"
      }
    ]
  },

  integrations: [icon(), partytown({
    config: {
      forward: ['dataLayer.push'],
    }
  })]
});