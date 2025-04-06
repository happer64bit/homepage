import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['github-light'],
						langs: ['javascript', 'typescript', 'css', 'html', 'go', "json", 'toml']
					});
					await highlighter.loadLanguage('javascript', 'typescript', 'css', 'go', 'html', 'json', 'toml');
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'github-light' }));
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
