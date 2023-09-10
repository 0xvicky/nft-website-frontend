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
        mainBg: "#2B2B2B",
        mainPurple: "#A259FF"
      }
    }
  },
  plugins: []
};
