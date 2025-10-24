/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        fColor: '#6D91EE',
        sColor : "#5180F6" ,
        tColor : "#4F4F4F" ,
        foColor : "#324473",
        fiColor : "#CEDCFF"

      },
    },
  },
 plugins: [],
}

