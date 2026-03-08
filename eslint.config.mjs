import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";
import pluginPrettier from "eslint-plugin-prettier";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  plugins: {
    prettier: pluginPrettier,
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
]);

export default eslintConfig;
