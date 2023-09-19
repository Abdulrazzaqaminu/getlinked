/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);',
      },
      colors: {
        darkPurple: "#150E28",
        primary: "#903AFF",
        lightPurple: "#D434FE",
        customPink: "#FE34B9",
        borderWhite: '#ffffff2e'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"]
      }
    },
  },
  plugins: [],
}

