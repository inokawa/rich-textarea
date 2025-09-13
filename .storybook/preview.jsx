/** @type { import('@storybook/react-vite').Preview } */
export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    options: {
      storySort: {
        order: ["basics", ["Textarea", "Input"]],
      },
    },

    docs: {
      codePanel: true
    }
  },
};
