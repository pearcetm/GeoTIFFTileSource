import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "GeoTIFFTileSource",
      formats: ["es", "umd"],
      fileName: (format) => {
        // Use .mjs for identifying ES modules, and .js for UMD modules
        if (format === "es") {
          return "geotiff-tilesource.mjs";
        } else {
          return "geotiff-tilesource.js";
        }
      },
    },
  },
});
