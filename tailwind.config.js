/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Component/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "724px",
      lg: "980px",
    },
    extend: {},
  },
  plugins: [],
};
