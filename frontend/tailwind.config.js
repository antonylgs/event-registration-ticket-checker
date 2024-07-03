/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Garamond", "serif"],
      },
      colors: {
        nbgray: "#EFEFEF",
        nbgraytext: "#B8B8B8",
        nbred: "#E21836",
      },
      backgroundImage: {
        "nb-pic3": "url('../public/nb-pic3.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
