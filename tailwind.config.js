/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        madigi: {
          green: "#0F9D68",
          dark: "#0F5132",
          soft: "#EAF7F0",
        },
      },
    },
  },
  plugins: [],
};