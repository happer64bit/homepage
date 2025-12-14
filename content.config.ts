import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string(),
        summary: z.string(),
        categories: z.array(z.string()),
        publishedDate: z.date()
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source:  'projects/*.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        source: z.string(),
        publishedDate: z.date(),
        technologies: z.string().array(),
        img: z.string().optional(),
      })
    })
  }
})
