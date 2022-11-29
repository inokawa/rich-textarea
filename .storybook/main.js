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
    name: "@storybook/react-webpack5",
    options: {},
  },
  async webpackFinal(config, options) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
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
