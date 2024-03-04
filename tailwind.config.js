/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        'desktop': "url('/images/bg-desktop.png')",
        'mobile': "url('/images/bg-mobile.png')",
      },
      colors: {
        'primary': {
          Gradiant1:'hsl(6, 100%, 80%)',
          Gradient2: 'hsl(335, 100%, 65%)',
      
        },
         'neutral': {
          PaleBlue: 'hsl(243, 100%, 93%)',
          GrayishBlue:'hsl(229, 7%, 55%)',
          DarkBlue:'hsl(228, 56%, 26%)',
          VeryDarkBlue:'hsl(229, 57%, 11%)',
       
        },

      }
    },
  },
  plugins: [],
}

