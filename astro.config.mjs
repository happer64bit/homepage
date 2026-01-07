// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Reddit Sans",
        cssVariable: '--font-sans'
      }
    ]
  },

  integrations: [icon()]
});