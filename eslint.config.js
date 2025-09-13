import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  pluginReactHooks.configs.recommended,
  {
    files: ["src/**/*.{jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
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
    rules: {
      "react-hooks/react-compiler": "error",
    },
  },
];
