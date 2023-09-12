/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tilum: ["Titillium Web", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"]
      },

      backgroundColor: {
        mainBg: "#2B2B2B"
      },
      colors: {
        mainPurple: "#A259FF",
        slateGray: "#3B3B3B",
        cardGray: "#858584"
      }
    }
  },
  plugins: []
};
