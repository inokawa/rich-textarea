const { mergeConfig } = require("vite");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  staticDirs: [
    // for kuromojin
    {
      from: "../node_modules/kuromoji/dict",
      to: "/dict",
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      define: {
        // For kuromoji
        "process.env.STORYBOOK_DEPLOY": process.env.STORYBOOK_DEPLOY,
        // For textlint
        "process.env.TIMING": undefined,
      },
      resolve: {
        alias: {
          // For kuromoji
          path: "path-browserify",
          // For textlint
          assert: "assert",
        },
      },
    });
  },
};
