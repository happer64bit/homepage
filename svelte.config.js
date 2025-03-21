import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['poimandres'],
						langs: ['javascript', 'typescript', 'css', 'html', 'go']
					});
					await highlighter.loadLanguage('javascript', 'typescript', 'css', 'go', 'html');
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
					return `{@html \`${html}\` }`;
				}
			},
			rehypePlugins: []
		})
	],

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
