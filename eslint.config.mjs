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
      "react-hooks": pluginReactHooks,
      "react-compiler": pluginReactCompiler,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-compiler/react-compiler": "error",
    },
  },
];
