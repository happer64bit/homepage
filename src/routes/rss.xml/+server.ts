import type { Post } from '$lib/types.js'
import RSS from 'rss'

export const GET = async ({ fetch }) => {
    const projectsRequest = await fetch("/api/posts")
    const projectsData: Post[] = await projectsRequest.json()

    const feed = new RSS({
        site_url: "https://wintkhantlin.vercel.app",
        feed_url: "https://wintkhantlin.vercel.app/rss.xml",
        title: "Wint Khant Lin's Feed",
    })

    projectsData.map((project) => {
        feed.item({
            title: project.title,
            description: project.summary,
            date: project.publishedDate,
            url: `https://wintkhantlin.vercel.app/posts/${project.slug}`
        })
    })

    return new Response(feed.xml(), {
        headers: {
            "Content-Type": "application/xml"
        }
    })
}