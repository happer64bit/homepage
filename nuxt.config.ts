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
      "Noto Sans": true,
      "Noto Serif JP": {
        wght: 700
      }
    }
  }], "@nuxt/content", "@nuxtjs/partytown", "@nuxt/image"],

  partytown: {
    debug: false,
    forward: ["dataLayer.push", "gtag"],
  },

  content: {
    experimental: {
      sqliteConnector: "native"
    },
    build: {
      markdown: {
        highlight: {
          theme: "one-dark-pro",
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