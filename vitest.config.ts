import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		include: ["**/*.spec.tsx"],
		globals: true,
		environment: "jsdom",
		setupFiles: "./vitest.setup.mjs",
	},
});
