/** @type { import('@storybook/react-webpack5').StorybookConfig } */
export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-webpack5-compiler-swc",
  ],
  staticDirs: [
    // for kuromojin
    {
      from: "../node_modules/kuromoji/dict",
      to: "/dict",
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: {} },
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
  swc: (config) => {
    return {
      jsc: {
        transform: {
          react: { runtime: "automatic" },
        },
      },
    };
  },
};
