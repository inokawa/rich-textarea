/** @type { import('@storybook/react').Preview } */
export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["basics", ["Textarea", "Input"]],
      },
    },
  },
};
