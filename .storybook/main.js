const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
        require.resolve('sass-loader'),
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/actions': path.resolve(__dirname, '../src/redux/actions'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@/molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@/organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@/scss': path.resolve(__dirname, '../src/scss'),
    };
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');

    return config;
  },
};
