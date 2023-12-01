export default {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-storysource"],
  staticDirs: [
    // for kuromojin
    {
      from: "../node_modules/kuromoji/dict",
      to: "/dict",
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: { useSWC: true } },
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
      ...config,
      jsc: {
        ...config.jsc,
        transform: {
          ...config.jsc?.tranform,
          react: { ...config.jsc?.tranform?.react, runtime: "automatic" },
        },
      },
    };
  },
};
