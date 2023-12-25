import createMDX from '@next/mdx'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeShiki from 'rehype-shiki'

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        JWT_SECRET: process.env.JWT_SECRET
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
}
const withMDX = createMDX({
    options: {
        remarkPlugins: [
            [remarkGfm],
            [
                remarkParse,
                { allowDangerousHtml: true }
            ],
            [
                remarkRehype,
                { allowDangerousHtml: true }
            ]
        ],
        rehypePlugins: [
            [
                rehypeStringify,
                { allowDangerousHtml: true }
            ],
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                }
            ],
        ],
    },
})


export default withMDX(nextConfig)
