// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import swup, { Theme } from '@swup/astro'

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [
          tailwindcss()
      ]
  },

  integrations: [icon(), swup({
    theme: Theme.slide,
    animationClass: "transition-",
    cache: true,
    smoothScrolling: true
  })]
});