// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { FlatCompat } from "@eslint/eslintrc";
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

  {
    plugins: {
      react: reactPlugin,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "sort-destructure-keys": eslintPluginSortDestructureKeys,
      "sort-keys-fix": eslintPluginSortKeysFix,
    },
    rules: {
      // react JSX props sorting (alphabetically)
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

      // sort imports and exports alphabetically
      "simple-import-sort/imports": "warn",

      // sort destructured keys alphabetically
      "sort-destructure-keys/sort-destructure-keys": "warn",

      // sort object keys alphabetically
      "sort-keys-fix/sort-keys-fix": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
