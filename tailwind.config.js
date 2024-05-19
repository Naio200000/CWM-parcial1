/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'black': '#010C13',
      'blue-dark': '#4C6A94',
      'blue-light': '#4763FF',
      'gray-dark': '#BFBFBF',
      'gray-light': '#E8E8E8',
    },
    extend: {
      gridTemplateRows: {
        'layout' : '70px 1fr 100px',
      } 
    },
  },
  plugins: [],
}

