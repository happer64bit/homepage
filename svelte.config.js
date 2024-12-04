import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import markdown from './src/lib/markdown/index.js';
import { preprocessMeltUI } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), markdown(), preprocessMeltUI()],

	kit: {
		adapter: adapter(),
	},
	
	extensions: ['.svelte', '.md'],
};

export default config;
