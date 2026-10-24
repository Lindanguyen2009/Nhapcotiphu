import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        benThanh: resolve(__dirname, 'ben_thanh_market.html'),
        funFacts: resolve(__dirname, 'fun_facts.html'),
      },
    },
  },
});
