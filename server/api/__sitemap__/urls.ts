import type { SitemapUrlInput } from "#sitemap/types"
import { queryCollection } from '@nuxt/content/server'

export default defineSitemapEventHandler(async (event) => {
    const posts = await queryCollection(event, "posts").all()
    const sitemapUrls: SitemapUrlInput[] = posts.map(val => ({ loc: val.path }))
    return sitemapUrls;
})