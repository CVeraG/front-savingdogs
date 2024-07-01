/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'seats':"url('/src/images/5581.png)"
      },
      colors:{
        //'primary': '#5271FF',
        'third':'#3470f5',
        'blue': '#4199FF',
        'purple': '#311E69',
        'blue-light': '#A2CCDE',
        'gray-dark': '#212529',
        'gray-light': '#343a40',
        'golden-tcc': '#DDC687',
        'seats-color':"#342E7F",
        'cyan-color':"#8AE0FF",
      },
      fontFamily:{
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sifonn: ['sifonn_pro','sans-serif'],
        tccc_medium: ['tcc_medium'],
        tcc_light: ['tcc_light'],
        tcc_bold: ['tcc_bold'],
        poppins_regular: ['poppins_regular'],
        locomoType:['locomoType'],
        dmsans:['Dmsans']
      },
      dropShadow: {
        'text': '0 4px 4px rgba(0, 0, 0, 0.7)',
        'title': '0 3px 2px rgba(0, 0, 0, 0.4)',
        'subtitle': '0 2px 2px rgba(0, 0, 0, 0.2)',
        'white': '0 3px 3px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}

