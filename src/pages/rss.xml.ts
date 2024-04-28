import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
    const posts = await getCollection('posts');

    return rss({
        title: 'Wint Khant Lin’s rss feed',
        description: 'A Student from Myanmar who do coding and designing by ❤️',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishedDate,
            description: post.data.summery,
            link: `/posts/${post.slug}`
        })),
    });
}