/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway, serif',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
