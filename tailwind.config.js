/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/*.js"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        'press-start-2p': ['"Press Start 2P"', 'serif'],
      },
    },
  },
  plugins: [],
}