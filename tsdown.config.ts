import { defineConfig } from 'tsdown';

export default defineConfig({
  platform: 'neutral',
  entry: ['./src/index.ts'],
  format: ['esm'],

  dts: true,
  exports: false,
  clean: true,
  unbundle: true,
  css: {
    inject: true,
  },

  outputOptions: {
    codeSplitting: true,
  },

  copy: [
    {
      from: 'dist/styles/media.css',
      to: 'dist/',
    },
    {
      from: 'dist/providers/theme/theme.css',
      to: 'dist/',
    },
  ],
});
