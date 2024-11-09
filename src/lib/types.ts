export type Post = {
    slug: string
    title: string
    summery: string
    tags: string[]
    keywords: string[]
    publishedDate: Date
    published?: boolean | true
}