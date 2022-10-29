/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#484848",
        primaryfade: "#6b6b6b",
        secondary: "#D4990D",
        secondaryfade: "#e3b549",
      },
      fontFamily: {
        tinos: ["Tinos", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tw-elements/dist/plugin')
  ],
};