/** @type { import('@storybook/react-vite').StorybookConfig } */
export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
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
    options: { builder: {} },
  },
  async viteFinal(config) {
    // https://github.com/storybookjs/storybook/issues/26291#issuecomment-1978193283
    const { mergeConfig } = await import("vite");
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
