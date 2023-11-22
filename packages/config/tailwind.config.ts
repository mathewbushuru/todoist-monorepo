/** @type {import('tailwindcss').Config} */

import { Colors } from "./colors";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: Colors.primaryBackground,
          foreground: Colors.primaryForeground,
        },
        secondary: {
          DEFAULT: "#00000014",
          foreground: "#000000A8",
        },
        popover: {
          DEFAULT: Colors.popoverBackground,
          foreground: Colors.popoverForeground,
        },
        background: Colors.background,
        foreground: Colors.foreground,
        muted: Colors.muted,
        link: "#316fea",
        footer: "#fff9f3",
      },
    },
  },
  plugins: [],
};
