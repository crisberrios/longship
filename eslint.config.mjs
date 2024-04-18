import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ),
  {
    files: ["**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: [".config/*", "dist/*", "node_modules/*", "eslint.config.mjs"],
  },
];
