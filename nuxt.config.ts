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
  }], "@nuxt/content"],

  content: {
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
})