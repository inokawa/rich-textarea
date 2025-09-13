import { mergeConfig } from "vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
  staticDirs: [
    // for kuromojin
    {
      from: "../node_modules/kuromoji/dict",
      to: "/dict",
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: { builder: {} },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // For kuromoji
          path: "path-browserify",
          // For textlint
          assert: "assert",
          events: "events",
        },
      },
      define: {
        // For @textlint/kernel
        "process.env.TIMING": false,
      },
    });
  },
};
