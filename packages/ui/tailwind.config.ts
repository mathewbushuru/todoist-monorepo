/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';

const baseConfig = require("config/tailwind.config");

const config: Pick<Config, "presets" | "plugins"> = {
  presets: [baseConfig],
  plugins: [require("tailwindcss-animate")]
}

export default config;
