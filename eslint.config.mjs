import { fixupPluginRules } from "@eslint/compat";
import typescriptEslintParser from "@typescript-eslint/parser";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactCompiler from "eslint-plugin-react-compiler";

export default [
  {
    files: ["src/**/*.{jsx,tsx}"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      // https://github.com/facebook/react/issues/28313#issuecomment-2180984628
      "react-hooks": fixupPluginRules(pluginReactHooks),
      "react-compiler": pluginReactCompiler,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-compiler/react-compiler": "error",
    },
  },
];
