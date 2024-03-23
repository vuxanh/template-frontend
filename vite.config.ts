import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ eslintOptions: { cache: false } })],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/variables.scss";
        @import "./src/styles/mixins.scss";
        `,
        sassOptions: {
          includePaths: [path.join(__dirname, "src"), path.join(__dirname, "src/styles")],
        },
      },
    },
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:2]",
    },
  },
});
