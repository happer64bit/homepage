export type Post = {
    slug: string
    title: string
    summery: string
    tags: string[]
    keywords: string[]
    publishedDate: Date
    published?: boolean | true
}

export type Project = {
    slug: string,
    title: string,
    description: string
    lang: string
}