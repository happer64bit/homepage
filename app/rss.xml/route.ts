import prisma from '@/lib/prisma';
import RSS from 'rss';

export async function GET() {
    const feed = new RSS({
        title: "Happer64Bit | Blog",
        description: "Rss Feed of happer64bit's blog",
        site_url: "https://happer64bit.vercel.app",
        feed_url: `https://happer64bit.vercel.app/rss.xml`,
        image_url: "https://happer64bit.vercel.app/favicon.ico",
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Happer64Bit`,
    })

    try {
        const list = await prisma.articles.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        list.map((event) => {
            feed.item({
                title: event.title,
                description: event.shortContents,
                date: new Date(event.createdAt).toDateString(),
                url: `https://happer64bit.vercel.app/article/${event.pathname}`,
                author: "Happer64Bit",
            })
        })

        return new Response(feed.xml({ indent : true }), {
            headers: {
                "Content-Type": "application/xml"
            }
        })
    } finally {
        await prisma.$disconnect()
    }
}