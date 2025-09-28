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

  modules: [["@nuxtjs/google-fonts", {
    families: {
      "Noto Sans": true
    }
  }], "@nuxt/content", "@nuxtjs/partytown", "@nuxt/image"],

  partytown: {
    debug: false,
    forward: ["dataLayer.push", "gtag"],
  },

  content: {
    database: {
      type: "sqlite",
      filename: ".data/content/contents.sqlite"
    },
    build: {
      markdown: {
        highlight: {
          langs: ["ts", "java", "js", "go", "python", "css"]
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
})