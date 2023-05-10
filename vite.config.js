import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({
      baseConfig: {
        env: {
          browser: true,
          es2021: true,
        },
        extends: "eslint:recommended",
        overrides: [],
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
        rules: {},
      },
    }),
  ],
});
