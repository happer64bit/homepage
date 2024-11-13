import matter from 'gray-matter'
import { unified } from 'unified'
import toMarkdownAST from 'remark-parse'
import toHtmlAST from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeShiki from '@shikijs/rehype'
import { transformerMetaHighlight } from '@shikijs/transformers'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'

// Initialize a markdown processor pipeline
const markdownProcessor = unified()
	.use(toMarkdownAST)
	.use(remarkGfm)
	.use(toHtmlAST)
	.use(rehypeSlug)
	.use(remarkParse)
	.use(rehypeCodeTitles)
	.use(rehypeShiki, {
		theme: 'poimandres',
		transformers: [transformerMetaHighlight()],
	})
	.use(rehypeStringify)

/**
 * Searches and replaces custom tags in content.
 * Replaces a custom YouTube tag with a <lite-youtube> component.
 *
 * @param {string} content - The markdown content containing custom tags.
 * @returns {string} - The modified content with replacements.
 */
function searchAndReplace(content) {
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g

	return content
		.replace(youtube, (_, id, title) => {
			return `
				<lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
			`.trim()
		})
}

/**
 * Processes markdown content by replacing custom tags and converting it to HTML.
 *
 * @param {string} content - The raw markdown content to process.
 * @returns {Promise<string>} - The processed HTML as a string.
 */
async function parseMarkdown(content) {
	const replacedContent = searchAndReplace(content)
	const parsedMarkdown = await markdownProcessor.process(replacedContent)
	return parsedMarkdown.toString()
}

/**
 * Escapes curly braces in HTML to prevent conflicts in template syntax.
 * Specifically escapes `{` and `}` in a string to avoid issues in templates.
 *
 * @param {string} content - The HTML content to escape.
 * @returns {string} - The HTML content with escaped curly braces.
 */
function escapeHtml(content) {
	content = content.replace(/{/g, '&#123;').replace(/}/g, '&#125;')

	const componentRegex = /<[A-Z].*/g
	const components = content.match(componentRegex)
	components?.forEach((component) => {
		const replaced = component.replace('&#123;', '{').replace('&#125;', '}')
		content = content.replace(component, replaced)
	})

	return content
}

/**
 * Extracts frontmatter metadata and content from markdown.
 * Parses and formats frontmatter metadata as a script module for export.
 *
 * @param {string} content - The raw markdown content with frontmatter.
 * @returns {{markdown: string, meta: string}} - The content and metadata script.
 */
function frontmatter(content) {
	const { content: markdown, data } = matter(content)
	const meta = `
		<script context="module">
			export const metadata = ${JSON.stringify(data)}
		</script>
	`
	return { markdown, meta }
}

/**
 * Plugin function to process markdown files for Svelte.
 * Converts markdown with frontmatter into HTML with embedded metadata.
 *
 * @returns {{name: string, markup: function}} - The plugin object.
 */
function markdown() {
	return {
		name: 'markdown',
		/**
		 * @param {any} params
		 */
		async markup({ content, filename }) {
			if (filename.endsWith('.md')) {
				const { markdown, meta } = frontmatter(content)
				const html = await parseMarkdown(markdown)
				const code = escapeHtml(html)
				return { code: meta + code }
			}
		},
	}
}

export default markdown
