const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "play-fair":["Playfair Display","serif"]
      },
      backgroundImage:({
        'landingpage-pattern': "url('/assets/images/getstarted.jpg')",
        'landingpage-backdrop': "url('/assets/images/landing.png')",
        'paper-backdrop': "url('/assets/images/white-texture.jpeg'),url('/assets/images/landing.png')",
       })     
    },
    colors:{
      ...colors,
      bgColor: "#141414",
      cardGray: "#1E2329",
      violet: '#6770b7',
      firefly: '#06233B',
      nileblue: '#1e384e',
      bluelily:'#DBEAEA',
      regalblue:'#163A68',
      midnight:'#00213A'
    },
    screens: {
      xs:  "320px",
      sm:  "360px",
      md:  "768px",
      lg:  "1024px",
      xl:  "1280px",
      xxl: "1536px",
    },  
  },
  plugins: [],
}