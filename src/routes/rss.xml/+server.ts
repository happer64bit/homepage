import type { Post } from '$lib/types'

export const prerender = true

export async function GET({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Wint Khant Lin RSS</title>
				<description>Wint Khant Lin. Hello! I'm a 16-year-old college student from Myanmar, passionate about coding and designing with ❤️.</description>
				<link>https://wintkhantlin.vercel.app/</link>
				<atom:link href="https://wintkhantlin.vercel.app/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.summery}</description>
							<link>https://wintkhantlin.vercel.app/posts/${post.slug}</link>
							<guid isPermaLink="true">https://wintkhantlin.vercel.app/${post.slug}</guid>
							<pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
