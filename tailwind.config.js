/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#202020",
        lightgray: "#3e3e3e",
        a4a4a4a: "#A4A4A4",
        darkblue: "#4D2C9D",
        newviolet: "#442D7F",
        newpurple: "#190748",
        newblue: "#603be7",
        darkbrown: "#AD7034",
        lightbrown: "#E1AC76",
      },
      fontFamily: {
        Hubballi: ["Hubballi", "Poppins"],
      },
    },
  },
  plugins: [],
};
