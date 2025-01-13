/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/*.js"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        'ibm-plex-mono': ['"IBM Plex Mono"', 'serif'],
        'press-start-2p': ['"Press Start 2P"', 'serif'],
      },
      colors: {
        'primary': '#5D04D9',
        'secondary': '#03318C',
      }
    },
  },
  plugins: [],
}