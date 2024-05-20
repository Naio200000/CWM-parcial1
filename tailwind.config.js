/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout' : '70px 1fr 100px',
      } 
    },
  },
  plugins: [],
}

