import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: [
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
    clean: true,
  },
  {
    entry: {
      styles: "src/styles.css",
    },
    minify: true,
  },
]);
