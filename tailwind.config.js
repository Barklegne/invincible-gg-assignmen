/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				gold: {
					light: '#FFE9A0',
					DEFAULT: '#FFD700',
					dark: '#BFA100',
				},
			},
		},
	},
	plugins: [],
}
