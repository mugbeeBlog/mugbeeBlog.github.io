import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,

  {
    files: ["**/*.{ts,mts,cts}"],
    extends: [...tseslint.configs.strict],
  },

  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  prettier,
]);
