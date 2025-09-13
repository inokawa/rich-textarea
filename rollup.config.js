import typescript from "@rollup/plugin-typescript";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import banner from "rollup-plugin-banner2";
import pkg from "./package.json" with { type: "json" };

const external = (id) =>
  [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ].some((d) => id.startsWith(d));

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
      exclude: ["**/*.{spec,stories}.*"],
    }),
    getBabelOutputPlugin({
      plugins: ["@babel/plugin-transform-react-pure-annotations"],
    }),
    terser({
      ecma: 2018,
      module: true,
      compress: { passes: 5, unsafe: true, keep_fargs: false },
      mangle: { properties: { regex: "^_" } },
      format: {
        preserve_annotations: true,
      },
    }),
    banner(() => '"use client";\n'),
  ],
  external,
};
