import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "GeoTIFFTileSource",
      formats: ["es", "umd"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return `GeoTIFFTileSource.mjs`;
          case "umd":
            return "GeoTIFFTileSource.js";
        }
      },
    },
  },
});
