/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#484848",
      },
      fontFamily: {
        poppins: "Poppins",
        volkhov: "Volkhov",
        jost: "Jost",
      },
    },
  },
  plugins: [],
};
