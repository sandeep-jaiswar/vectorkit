import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/index.ts",
    "src/button.tsx",
    "src/input.tsx",
    "src/card.tsx",
    "src/hero-tray.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
  splitting: true,
  treeshake: true,
  ...options,
}));
