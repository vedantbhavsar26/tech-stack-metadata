import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true, // generate declaration files
  sourcemap: true,
  clean: true, // clean dist before build
  format: ["cjs", "esm"], // output both commonjs and esm
  target: "es2020",
  splitting: false, // no code splitting for libs
  minify: true,
  external: ["react", "react-icons"], // exclude peer deps if needed
  watch: process.env.NODE_ENV === "development", // watch only in dev
});
