import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/fonts.css"],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: ["@nuxt/fonts", "@nuxt/content", "@nuxtjs/partytown", "@nuxt/image"],

  partytown: {
    debug: false,
    forward: ["dataLayer.push", "gtag"],
  },

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

  // googleFonts: {
  //   families: {
  //     "Noto Sans": true,
  //     "Noto Serif JP": {
  //       wght: 600,
  //     },
  //   },
  //   preload: true,
  // },

  fonts: {
    provider: "local",
    families: [
      {
        name: "Noto Sans",
        preload: true,
        provider: "local",
        src: "./public/fonts/NotoSans-VariableFont_wdth,wght.ttf",
        display: "swap",
        fallbacks: ['Arial', 'sans-serif']
      },
      {
        name: "Noto Sans JP",
        weights: [700],
        preload: true,
        provider: "local",
        src: "./public/fonts/NotoSerifJP-Bold.ttf",
        display: "swap"
      }
    ]
  }
})