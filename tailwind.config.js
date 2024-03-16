/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    fontWeight: {
      'regular': '400',
      'bold': '700'
    },
    extend: {
      fontFamily: {
        'sans': ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bg-soft-violet': 'hsl(273, 75%, 66%)',
        'bg-soft-blue': 'hsl(240, 73%, 65%)',
        'primary-text-blue': 'hsl(238, 29%, 16%)',
        'primary-text-red': 'hsl(14, 88%, 65%)',
        'neutral-text-very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'neutral-text-dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'dividers-blue': 'hsl(240, 5%, 91%)'
      },
    },
  },
  plugins: [],
}

