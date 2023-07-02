/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#eeeeee',
        'black': '#000000',
        'white': '#ffffff',
        'green': '#00ff00',
  
      },
      fontFamily: {
        'ethos': ['Ethos-regular'],
        'playfair': ['PlayfairDisplay-regular'],
        'playfair-bold': ['PlayfairDisplay-Bold'],
        'playfair-italic': ['PlayfairDisplay-Italic'],
        'playfair-black': ['PlayfairDisplay-Black'],
        'playfair-bold-italic': ['PlayfairDisplay-BoldItalic'],
        'playfair-extra-bold': ['PlayfairDisplay-ExtraBold'],
        'playfair-extra-bold-italic': ['PlayfairDisplay-ExtraBoldItalic'],
        'playfair-medium': ['PlayfairDisplay-Medium'],
        'playfair-medium-italic': ['PlayfairDisplay-MediumItalic'],
        'playfair-semi-bold': ['PlayfairDisplay-SemiBold'],
        'playfair-semi-bold-italic': ['PlayfairDisplay-SemiBoldItalic'],

    },
  }    
  },
  plugins: [
    require('flowbite/plugin'),
    
  ],
}