import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: 'src/main.ts',
      name: 'id-starter-ts',
      formats: ['es'],
      fileName: 'main'
    },
    rollupOptions: {
      input: 'src/main.ts',
      plugins: [
        {
          name: 'wrap-in-iife',
          generateBundle(outputOptions, bundle) {
            Object.keys(bundle).forEach((fileName) => {
              const file = bundle[fileName];
              if (fileName.slice(-3) === '.js' && 'code' in file) {
                file.code = `(() => {\n${file.code}})()`;
              }
            });
          }
        }
      ]
    }
  }
});
