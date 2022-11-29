module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  staticDirs: [
    // for kuromojin
    { from: "../node_modules/kuromoji/dict", to: "/dict" },
  ],
  framework: "@storybook/react",
  core: {
    builder: {
      name: "webpack5",
    },
  },
  features: {
    // TODO: remove this after upgrading to storybook v7
    storyStoreV7: true,
  },
  async webpackFinal(config, options) {
    config.resolve.fallback = {
      // For kuromoji
      path: "path-browserify",
      // For textlint
      assert: "assert",
      events: "events",
    };
    return config;
  },
};
