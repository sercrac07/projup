import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs"],
  entry: ["./src/index.ts"],
  outDir: "./bin",
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true
})
