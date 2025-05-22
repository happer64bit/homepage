import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import contentCollections from "@content-collections/vite";
import { partytownVite } from '@qwik.dev/partytown/utils';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), contentCollections(), partytownVite({})]
});
