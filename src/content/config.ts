import { defineCollection, z } from "astro:content";

export const collections = {
    posts: defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            summery: z.string(),
            tags: z.array(z.string()),
            publishedDate: z.coerce.date()
        })
    }),
    projects: defineCollection({
        type: "data",
        schema: z.object({
            title: z.string(),
            summery: z.string(),
            tags: z.array(z.string()),
            source: z.string(),
            publishedDate: z.coerce.date()
        })
    })
}
