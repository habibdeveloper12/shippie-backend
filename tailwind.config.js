/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "very-dark-blue": "#1d2026",
      "dark-grayish-blue": "#69707d",
      "grayish-blue": "#b6bcc8",
      "light-grayish-blue": "#e4e9f2",
      orange: "#ff7e1b",
      "pale-orange": "#ffeee2",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
