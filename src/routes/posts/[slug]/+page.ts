import { error } from '@sveltejs/kit'

export const ssr = false;
export const prerender = "auto";

export async function load({ params }) {
	try {
		const post = await import(`./../../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch(err) {
        console.error(err)
		error(404, `Could not find ${params.slug}`)
	}
}
