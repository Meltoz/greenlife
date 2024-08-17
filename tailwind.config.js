/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1921px'
      },
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        mediumWhite: '#FFFFFF60',
        transparentWhite: '#FFFFFF10',
        transparentBlack: '#00000050',
        mediumBlack: '#363432',
        tenius: '#EAEACB',
        sand: '#F5F5DC',
        forest: '#228B22',
        sky: '#87CEEB',
        dirt: '#8B4513'
      },
      fontFamily: {
        playfair: ['playfair'],
        neue: ['Neue-Montreal'],
      }
    },
  },
  plugins: [],
}

