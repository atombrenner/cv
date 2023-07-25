/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
}
