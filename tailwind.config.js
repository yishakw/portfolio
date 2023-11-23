/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "rgb(245, 245, 220)",
      },
      fontFamily: {
        logo: "Moirai One",
      },
    },
  },
  plugins: [],
};
