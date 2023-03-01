/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// textSize: {
		// 	xs: '.75rem',
		// 	sm: '.875rem',
		// 	base: '1rem',
		// 	lg: '1.125rem',
		// 	xl: '1.25rem',
		// 	'2xl': '1.5rem',
		// 	'3xl': '1.875rem',
		// 	'4xl': '2.25rem',
		// 	'5xl': '3rem',
		// 	'6xl': '4rem',
		// 	'7xl': '5rem'
		// },
		extend: {
			colors: {
				'gray-50': 'rgba(0, 0, 0, 0.8)',
				'gray-10': '#f1f6f9',
				'purple-20': '#27004d',
				'purple-30': '#200040',
				'purple-40': '#2d005a',
				blue: '#007bff',
				indigo: '#6610f2',
				purple: '#6f42c1',
				pink: '#e83e8c',
				red: '#dc3545', //
				orange: '#fd7e14',
				yellow: '#ffc107', //
				green: '#28a745', //
				teal: '#20c997',
				cyan: '#17a2b8', //
				white: '#fff',
				gray: '#6c757d',
				'gray-dark': '#343a40',
				primary: '#400080',
				secondary: '#282f49',
				success: '#28a745', //
				info: '#17a2b8', //
				warning: '#ffc107', //
				danger: '#dc3545', //
				light: '#f8f9fa',
				dark: '#343a40' //
			},
			fontFamily: {
				'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
				'source-serif-pro': ['Source Serif Pro', 'serif']
			}
		}
	},
	plugins: []
};
