/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout' : '1fr 150px',
      },
      maxWidth: {
        'log' : '500px'
      }
    },
  },
  plugins: [],
}

