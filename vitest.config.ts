import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  test: {
    include: ["**/*.spec.tsx"],
    globals: true,
    environment: "jsdom",
  },
});
