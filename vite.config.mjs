import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import dts from 'unplugin-dts/vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      beforeWriteFile: (filePath, content) => {
        if (
          filePath.endsWith('media.d.ts') ||
          filePath.endsWith('theme.d.ts')
        ) {
          return false;
        }
        return { filePath, content };
      },

      compilerOptions: {
        root: 'src',
        emitDeclarationOnly: true,

        declaration: true,
        declarationMap: true,
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    // can't use native lightningCSS yet because of custom-media defs
    cssMinify: 'esbuild',
    codeSplitting: true,
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.tsx'),
        media: resolve(__dirname, 'src/styles/media.css'),
        // theme: resolve(__dirname, 'src/styles/theme.css'),
      },
      formats: ['es'],
    },
    rolldownOptions: {
      external: (id) =>
        !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0'),
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            if (
              assetInfo.name.includes('media') ||
              assetInfo.name.includes('theme')
            ) {
              const baseName = assetInfo.name.split('/').pop();
              return `${baseName}`;
            }

            return '[name][extname]';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
