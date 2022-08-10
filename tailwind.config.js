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
    extend: {
      fontFamily: {
        Titan: ["Shadows Into Light"],
      },
      dropShadow: {
        textShadow: "0px 2px 4px rgba(0, 0, 0, 0.13)",
      },
      boxShadow: {
        btnShadow: " 0px 8px 16px -6px rgba(254, 110, 6, 0.46)",
        cardShadow:
          " 0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      },
    },
  },
  plugins: [],
};
