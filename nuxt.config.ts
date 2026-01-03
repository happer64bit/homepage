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
      googleAnalytics: "G-P4LM3B1RV1"
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
  
  image: {
    quality: 70,
    format: ['webp', 'avif'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024
    }
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
      titleTemplate: '%s · Wint Khant Lin',
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Wint Khant Lin — projects, experiments, and co-creation.' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'robots', content: 'index,follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Wint Khant Lin' },
        { property: 'og:title', content: 'Wint Khant Lin' },
        { property: 'og:description', content: 'Portfolio of Wint Khant Lin — projects, experiments, and co-creation.' },
        { property: 'og:image', content: '/img/chatesat.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Wint Khant Lin' },
        { name: 'twitter:description', content: 'Portfolio of Wint Khant Lin — projects, experiments, and co-creation.' },
        { name: 'twitter:image', content: '/img/chatesat.png' }
      ],
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
    families: [
      {
        provider: 'google',
        name: "Inter",
        weights: [400, 500, 600, 700, 800, 900]
      },
    ]
  },

  sitemap: {
    autoLastmod: true,

    sources: ["/api/__sitemap__/urls"]
  }
})
