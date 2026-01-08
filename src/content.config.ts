import { defineCollection } from 'astro:content'

import { glob } from 'astro/loaders'
import * as z from 'astro:schema'

export const content = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(z.string()),
    publishedDate: z.preprocess(
      v => typeof v === 'string' || v instanceof Date ? new Date(v) : v,
      z.date()
    )
  }),
})

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    source: z.string(),
    publishedDate: z.preprocess(
      v => typeof v === 'string' || v instanceof Date ? new Date(v) : v,
      z.date()
    ),
    img: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    color: z.string()
  })
})

export const collections = { content, projects };
