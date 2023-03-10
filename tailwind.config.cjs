/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'gray-50': 'rgba(0, 0, 0, 0.8)',
				'gray-5': '#dee2e6',
				'gray-10': '#f1f6f9',
				'gray-15': '#495057',
				'gray-20': '#1b2031',
				'purple-20': '#27004d',
				'purple-30': '#200040',
				'purple-40': '#2d005a',
				blue: '#007bff',
				'blue-light': '#8001ff',
				indigo: '#6610f2',
				purple: '#6f42c1',
				pink: '#e83e8c',
				red: '#dc3545', //
				orange: '#fd7e14',
				yellow: '#ffc107', //
				'yellow-dark': '#ffc219', //
				green: '#28a745', //
				teal: '#20c997',
				cyan: '#17a2b8', //
				white: '#fff',
				gray: '#6c757d',
				'gray-dark': '#343a40', //
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
				sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
				serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
				mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono]
			},
			keyframes: {
				'move-top': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(15px)' }
				},
				'move-left': {
					'0%': { transform: 'translateX(-50%)' },
					'50%': { transform: 'translateX(-57%)' }
				},
				'anim-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'move-top': 'move-top 4s linear infinite',
				'move-left': 'move-left 4s linear infinite',
				'anim-spin': 'anim-spin 40s linear infinite'
			},
			borderRadius: {
				20: '20px'
			},
			zIndex: {
				'00': '-1'
			}
		}
	},
	plugins: []
};
