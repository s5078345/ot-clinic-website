import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ot-clinic-website/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
