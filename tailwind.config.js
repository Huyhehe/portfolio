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
        blink: {
          "0%": { opacity: 0 },
          "49%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        typing: "typeWriter 4s steps(16) forwards",
        blink:
          "typeWriter 4s steps(16) forwards, blink 750ms 4s linear infinite",
      },
    },
  },
  plugins: [],
};
