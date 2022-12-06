/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: [
  //   // ...
  //   "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
};