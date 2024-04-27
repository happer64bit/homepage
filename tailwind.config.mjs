/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					"2xl": "1300px"
				}
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
