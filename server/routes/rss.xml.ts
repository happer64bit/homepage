import RSS from 'rss';
import { queryCollection } from '@nuxt/content/nitro'

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'Wint Khant Lin - Homepage',
        description: 'Wint Khant Lin\'s Portfolio Website\'s Blog Feed',
        feed_url: 'https://wintkhantlin.vercel.app/rss.xml',
        site_url: 'https://wintkhantlin.vercel.app',
        language: 'en',
    });

    const articles = await queryCollection(event, 'posts').all()

    articles.forEach(article => {
        feed.item({
            title: article.title,
            url: 'https://wintkhantlin.vercel.app/posts/' + article.id,
            description: article.description,
            date: new Date(article.publishedDate).toISOString(),
        });
    });

    event.node.res.setHeader('Content-Type', 'application/xml');
    return feed.xml();
});
