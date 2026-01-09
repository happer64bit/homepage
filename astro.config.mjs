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
        weights: ["400", "500", "600", "800", "900"],
        cssVariable: '--font-sans'
      }
    ]
  },

  integrations: [icon(), partytown()]
});