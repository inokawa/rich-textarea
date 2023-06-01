export default {
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
    config.module.rules = config.module.rules.filter(
      (r) => !r.use?.[0]?.loader?.includes("babel-loader")
    );
    config.module.rules.unshift({
      test: /\.(mjs|tsx?|jsx?)$/,
      use: [
        {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2018",
            implementation: require("esbuild"),
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
