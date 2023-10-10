/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wide: '.025em',
      wider: '.15em',
      widest: '.25em',
    },
    container: {
			center: true,
		},
    extend: {
      colors:{
      'SoftOrange': 'hsl(35, 77%, 62%)',
      'SoftRed': 'hsl(5, 85%, 63%)',
      'OffWhite': 'hsl(36, 100%, 99%)',
      'GrayishBlue': 'hsl(233, 8%, 79%)',
      'DarkGrayishBlue': 'hsl(236, 13%, 42%)',
      'VeryDarkBlue': 'hsl(240, 100%, 5%)',
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,255,0.17",
    },
     animation: {
    'spin-slow': 'spin 6s linear infinite',
    'spin-delay': 'spin 6s linear infinite -3s',
     },
  },
  },
  plugins: [],
}