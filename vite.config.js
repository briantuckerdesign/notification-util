import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: 'src/main.global.ts',
      name: 'notification-util',
      formats: ['es'],
      fileName: 'main'
    },
    rollupOptions: {
      input: 'src/main.global.ts'
    }
  }
});
