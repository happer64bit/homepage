import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  scripts: {
    registry: {
      googleTagManager: "G-P4LM3B1RV1"
    }
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxt/hints",
    "@nuxt/scripts"
  ],

  content: {
    experimental: {
      sqliteConnector: "native",
    },
    build: {
      markdown: {
        highlight: {
          theme: "one-dark-pro",
          langs: ["ts", "js", "python", "css"]
        }
      }
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: '/favicon.ico'
        }
      ]
    }
  },

  routeRules: {
    "*": {
      prerender: true,
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },

    routeRules: {
      "/": {
        prerender: true
      },
      "/posts/**": {
        prerender: true
      }
    },

    compressPublicAssets: {
      brotli: true
    },

    publicAssets: [
      {
        baseURL: "/",
        dir: "public",
        maxAge: 60 * 60 * 24 * 30,
      }
    ]
  },

  fonts: {
    provider: "local",
    families: [
      {
        name: "Noto Sans",
        preload: true,
        provider: "local",
        src: "./assets/fonts/Noto-Sans.ttf",
        display: "swap",
        fallbacks: ['Arial', 'sans-serif']
      },
      {
        name: "Noto Sans JP",
        weights: [700],
        preload: true,
        provider: "local",
        src: "./assets/fonts/Noto-Serif-JP.ttf",
        display: "swap"
      }
    ]
  },

  sitemap: {
    autoLastmod: true,
    sources: ["/api/__sitemap__/urls"]
  }
})