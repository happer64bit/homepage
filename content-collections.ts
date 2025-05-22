import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeHighlight from "rehype-highlight";

const posts = defineCollection({
    name: "posts",
    directory: "src/posts",
    include: "**/*.md",
    schema: (z) => ({
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        keywords: z.array(z.string()),
        publishedDate: z.coerce.date(),
    }),
    transform: async (document, context) => {
        const html = await compileMarkdown(context, document, {
            rehypePlugins: [
                rehypeHighlight,
            ],
        });
        return {
            ...document,
            html,
        };
    },
});

export default defineConfig({
    collections: [posts],
});