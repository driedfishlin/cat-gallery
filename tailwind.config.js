module.exports = {
	// mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'th-yellow': { DEFAULT: '#f4d699' },
				'th-black': { DEFAULT: '#162c66' },
			},
			fontFamily: {
				bit: `'Press Start 2P'`,
			},
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			backgroundColor: ['active'],
			scale: ['active', 'group-hover'],
			visibility: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
