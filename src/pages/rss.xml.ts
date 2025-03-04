import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts');

    return rss({
        title: 'Wint Khant Lin\'s Blog',
        description: 'A College Student from Myanmar',
        site: context.site,
        items: posts.map((post) => ({
            author: "Wint Khant Lin",
            title: post.data.title,
            pubDate: post.data.publishedDate,
            description: post.data.summary,
            link: `/posts/${post.id}`
        })),
        customData: `<language>en-us</language>`,
    });
}