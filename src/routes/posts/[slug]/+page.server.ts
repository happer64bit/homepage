import { allPosts } from 'content-collections';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const { slug } = params;

    const post = allPosts.find((post) => post._meta.path === slug);

    if(!post) {
        return error(404, `Post not found: ${slug}`);
    }

    return { post };
}