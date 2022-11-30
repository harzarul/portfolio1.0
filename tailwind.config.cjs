/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(10, 10, 10, 0.85)",
        secondary: "rgba(245, 245, 245, 0.85)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      'xs': "480px",
      'ss': "620px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
    },
  },
  plugins: [],
};
