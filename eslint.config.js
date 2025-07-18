// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginRouter from "@tanstack/eslint-plugin-router";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  globalIgnores(["dist", "src/routeTree.gen.ts"]),
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  pluginRouter.configs["flat/recommended"],
  prettierConfig
);
