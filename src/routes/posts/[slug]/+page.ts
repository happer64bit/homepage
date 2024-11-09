import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`/src/posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch(err) {
        console.log(err)
		error(404, `Could not find ${params.slug}`)
	}
}
