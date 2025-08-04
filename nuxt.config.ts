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

  modules: [
    ["@nuxtjs/google-fonts", {
      families: {
        "Noto Sans": true
      }
    }], "@nuxt/icon", ["@nuxt/content", {
      highlight: {
        theme: "github-light",
        langs: ["ts", "java", "js", "json", "css", "html", "python"]
      }
    }]
  ],

  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})