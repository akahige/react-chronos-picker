import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactChronosPicker",
      fileName: (format) => `ReactChronosPicker.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        exports: "named",
        globals: {
          react: "React",
        },
      },
    },
  },
});
