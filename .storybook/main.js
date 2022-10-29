const { mergeConfig } = require("vite");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
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
      resolve: {
        alias: {
          // For kuromoji
          path: "path-browserify",
          // For textlint
          assert: "assert",
          events: "events",
        },
      },
    });
  },
};
