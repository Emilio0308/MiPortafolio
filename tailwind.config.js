/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Playfair": ['Playfair' , 'EB Garamond'],
        "EB Garamond" : ['EB Garamond', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}

