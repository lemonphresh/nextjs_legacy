// existing imports...
import { FlatCompat } from "@eslint/eslintrc";
import jest from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginSortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix";
import storybook from "eslint-plugin-storybook";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],

  // global config
  {
    plugins: {
      jest,
      react: reactPlugin,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "sort-destructure-keys": eslintPluginSortDestructureKeys,
      "sort-keys-fix": eslintPluginSortKeysFix,
    },
    rules: {
      "object-curly-spacing": ["warn", "always"],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandFirst: true,
          shorthandLast: false,
        },
      ],
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
      "sort-destructure-keys/sort-destructure-keys": "warn",
      "sort-keys-fix/sort-keys-fix": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // test file-specific config
  {
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...jest.environments.globals.jest,
      },
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
    },
  },
];

export default eslintConfig;
