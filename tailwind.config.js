/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#94CD64',
        'secondary': '#3B3B43',
        'grey': '#E4E4E4',
        'danger': '#E81A1A',
        'blue': '#3787FF',
        'light-primary': '#94CD641A',
        'light-danger': '#E81A1A1A',
        'light-blue': '#3787FF1A'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      lineHeight: {
        '24.38': '24.38px',
        '21.94': '21.94px',
        '48.76': '48.76px',
        '19.5': '19.5px'
      },
      fontWeigth: {
        extrabold: '800',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}