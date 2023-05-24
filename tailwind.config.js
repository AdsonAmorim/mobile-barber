/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      maxWidth: {
        90: "90%",
      },
    },
  },
  plugins: [],
};

/*
  Paleta de cores:
  Primária: violet-600
  background: gray-950
  textos: neutral-50
  CTA: green-500
*/
