/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        mediumWhite: '#FFFFFF60',
        transparentWhite: '#FFFFFF10',
        transparentBlack: '#00000050'
      }
    },
  },
  plugins: [],
}

