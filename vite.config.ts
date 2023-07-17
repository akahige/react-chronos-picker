import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
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
