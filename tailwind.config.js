const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      '2xl': '1536px',
      ...defaultTheme.screens,
    },
    colors: {
      navbar: '#29292a',
      primary: '#ff7e00',
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
