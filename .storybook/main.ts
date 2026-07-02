import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      resolve: {
        tsconfigPaths: true,
      },
      define: {
        'process.env': {},
        'process.env.NODE_ENV': JSON.stringify(
          configType === 'DEVELOPMENT' ? 'development' : 'production',
        ),
      },
    });
  },
};
export default config;
