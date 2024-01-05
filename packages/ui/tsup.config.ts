import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  minify: true,
  external: ["react"], // dont bundle these modules
  dts: true,
  format: ["esm", "cjs"],
  // injectStyle: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
