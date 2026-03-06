import path from "path";
import { defineConfig } from "vite";
import license from "rollup-plugin-license";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig(({ mode }) => {
  const lite = mode === "lite";

  return {
    server: {
      open: "/demo/demo.html",
      watch: {
        usePolling: true,
      },
    },
    build: {
      sourcemap: !lite,

      lib: {
        entry: path.resolve(__dirname, "src/main.js"),
        name: "GeoTIFFTileSource",

        // lite: single ESM file (best chance of “few files”)
        // normal: keep your es + umd outputs
        formats: lite ? ["es"] : ["es", "umd"],

        fileName: (format) => {
          if (lite) return "geotiff-tilesource.lite.mjs";
          return format === "es"
            ? "geotiff-tilesource.mjs"
            : "geotiff-tilesource.min.js";
        },
      },

      rollupOptions: lite
        ? {
          output: {
            inlineDynamicImports: true,
            manualChunks: undefined,
          },
        }
        : undefined,
    },

    worker: {
      format: "es",
    },

    plugins: [
      license({
        sourcemap: !lite,
        thirdParty: {
          output: path.join(__dirname, "dist", "bundled-licenses.txt"),
          includePrivate: false,
          includeSelf: true,
        },
      })
    ],

    test: {
      environment: "jsdom",
      browser: {
        enabled: true,
        provider: playwright(),
        instances: [
          {
            browser: "chromium",
          },
        ],
      },
    },
  };
});
