export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'background',
        value: '#201f24',
      },
      {
        name: 'modal',
        value: '#C4C4C4',
      },
    ],
  },
};
