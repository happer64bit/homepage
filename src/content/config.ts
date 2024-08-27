import { defineCollection, z } from "astro:content";

export const collections = {
    posts: defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            summery: z.string(),
            tags: z.array(z.string()),
            keywords: z.array(z.string()),
            publishedDate: z.coerce.date()
        })
    }),
    projects: defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            summery: z.string(),
            tags: z.array(z.string()),
            source: z.string().optional(),
            publishedDate: z.coerce.date(),
            android: z.string().optional(),
            docs: z.string().optional(),
            ios: z.string().optional(),
            website: z.string().optional(),
            windows: z.string().optional(),
            macos: z.string().optional(),
            linux: z.string().optional(),
        })
    })
}
