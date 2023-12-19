import prisma from '@/lib/prisma'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const res = await prisma.articles.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    const list: MetadataRoute.Sitemap = []

    res.map((event) => {
        list.push({
            url: "https://happer64bit.vercel.app/article/" + event.pathname,
            lastModified: event.updatedAt,
        })
    })


    return list
}