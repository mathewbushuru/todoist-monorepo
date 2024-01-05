/** @type {import('tailwindcss').Config} */

const baseConfig = require("config/tailwind.config");

export default {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
};
