/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{html,js,vue,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        main: '#232226',
        card: '#2F2F2F',
        cardHeader: '#3C3C3F',
      },
      screens: {
        'sm': '350px'
      }
    }
  }
}
