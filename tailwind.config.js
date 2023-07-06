/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#e2e2e2",
        black: "#000000",
        primary: "#7F5283",
        highlight: "#A6D1E6",
        blackish: "#3D3C42",
      },
    },
  },
  plugins: [],
};
