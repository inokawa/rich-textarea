import typescript from "@rollup/plugin-typescript";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: ".",
      declaration: true,
      exclude: ["src/**/*.spec.*"],
    }),
    getBabelOutputPlugin({
      plugins: [
        "@babel/plugin-transform-react-pure-annotations",
        [
          "replace-import-extensions",
          { "^react/jsx-runtime$": "react/jsx-runtime.js" },
        ],
      ],
    }),
    terser({
      compress: { passes: 3 },
      format: {
        // https://github.com/terser/terser/pull/550
        // https://github.com/terser/terser/issues/968
        comments: /@preserve|@lic|@cc_on|^\**!|__PURE__/i,
        preserve_annotations: true,
      },
    }),
  ],
  external: Object.keys(pkg.dependencies),
};
