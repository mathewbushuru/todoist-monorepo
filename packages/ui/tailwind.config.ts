/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';

const baseConfig = require("config/tailwind.config");

// module.exports = {
//   ...baseConfig,
// };

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [baseConfig]
}

export default config;
