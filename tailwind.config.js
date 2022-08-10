/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#ecf1fd",
        bgSecondary: "#ffffff",
        hoverColor: "#fd003d",
        textPrimary: "#3f4246",
        textSecondary: "#9395a1",
      },
      keyframes: {
        typeWriter: {
          to: {
            left: "100%",
          },
        },
      },
      animation: {
        typing: "typeWriter 4s steps(16) forwards",
      },
    },
  },
  plugins: [],
};
