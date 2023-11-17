/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#de483a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#00000014",
          foreground: "#000000A8",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#232115",
        },
        background: "#fefefe",
        foreground: "#1f1f1f",
        muted: "#575757",
        link: "#316fea",
        footer: "#fff9f3",
      },
    },
  },
  plugins: [],
};
