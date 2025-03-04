import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/contents/posts"}),
    schema: z.object({
        title: z.string(),
        summery: z.string(),
        tags: z.string().array(),
        keywords: z.string().array(),
        publishedDate: z.date()
    })
})

export const collections = { posts }