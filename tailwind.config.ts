import typography from '@tailwindcss/typography';
import motion from 'tailwindcss-motion';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				ripple: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'50%': { transform: 'scale(1.05)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				ripple: 'ripple 1.5s ease-out forwards',
			},
			fontFamily: {
				sans: "'Raleway Variable', sans-serif"
			},
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1300px"
				}
			}
		}
	},

	plugins: [typography, motion]
} satisfies Config;
