import { defineConfig } from 'vite';
import preactRefresh from '@prefresh/vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  root: 'src/',
  build: {
    outDir: '../dist/',
    emptyOutDir: true, // IMPORTANT: this will delete the contents of dist/ on build
  },
  plugins: [preactRefresh()],
});
