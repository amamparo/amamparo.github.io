/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#0a0a0f',
				'neon-violet': '#9945ff',
				'neon-cyan': '#00ffff'
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow': 'glow 2s ease-in-out infinite alternate'
			},
			keyframes: {
				glow: {
					from: { textShadow: '0 0 10px #9945ff, 0 0 20px #9945ff, 0 0 30px #9945ff' },
					to: { textShadow: '0 0 20px #9945ff, 0 0 30px #9945ff, 0 0 40px #9945ff' }
				}
			}
		}
	},
	plugins: []
};