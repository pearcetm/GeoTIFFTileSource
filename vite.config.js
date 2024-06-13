import path from "path";
import { defineConfig } from "vite";
import license from "rollup-plugin-license";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "GeoTIFFTileSource",
      formats: ["es", "umd"],
      fileName: (format) => {
        // Use .mjs for identifying ES modules, and .js for UMD modules
        if (format === "es") {
          return "geotiff-tilesource.mjs";
        } else {
          return "geotiff-tilesource.min.js";
        }
      },
    },
  },
  plugins: [
    // Base example config from https://github.com/mjeanroy/rollup-plugin-license
    license({
      sourcemap: true,
      thirdParty: {
        output: path.join(__dirname, "dist", "bundled-licenses.txt"),
        includePrivate: false,
        includeSelf: true,
      },
    }),
  ],
  test: {
    environment: "jsdom",
  },
});
