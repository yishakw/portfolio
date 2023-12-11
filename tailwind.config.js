/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frontend: "url(/frontend-.png)",
        code: "url(src/images/code.png)",
        portfolio: "url(src/images/portfolioSnnip.PNG)",
        weatherIt: "url(src/images/weatherIt.PNG)",
      },
      colors: {
        beige: "rgb(245, 245, 220)",
      },
      fontFamily: {
        logo: "Moirai One",
        name: "Potta One",
      },
    },
  },
  plugins: [],
};
