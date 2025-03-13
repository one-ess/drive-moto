import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  build: {
    minify: true,
    outDir: "../build",
    rollupOptions: {
      input: {
        main: "./src/index.html",
        catalog: "./src/catalog.html",
        product: "./src/product.html",
      },
    },
  },
});
