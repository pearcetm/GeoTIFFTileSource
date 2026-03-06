import { enableGeoTIFFTileSource } from "../src/main.js";

function $(id) {
  return document.getElementById(id);
}

function getVizOptions() {
  const interpretation = $("interpretation").value; // auto|image|data
  const ch = (id) => parseInt($(id).value, 10);

  return {
    interpretation,
    renderChannels: [ch("chR"), ch("chG"), ch("chB"), ch("chA")], // -1 means “none”
    valueMin: Number($("vMin").value),
    valueMax: Number($("vMax").value),
    gamma: Math.max(0.0001, Number($("gamma").value) || 1),
  };
}

// Simple scalar -> byte mapper
function toneMapScalar(v, { valueMin, valueMax, gamma }) {
  const lo = valueMin;
  const hi = valueMax;
  if (!Number.isFinite(v)) v = 0;
  const t = (v - lo) / (hi - lo || 1);
  const clamped = Math.max(0, Math.min(1, t));
  const g = Math.pow(clamped, 1 / gamma);
  return (g * 255) | 0;
}

function installScientificConverter(OSD) {
  if (!OSD.converter) {
    console.warn("[demo-science] OSD.converter missing; scientific remap converter not installed.");
    return;
  }

  // Remap a tiffRaster into an RGBA8 canvas for OSD.
  // We do it as: tiffRaster -> context2d (override display mapping)
  OSD.converter.learn(
    "tiffRaster",
    "context2d",
    (tile, raster) => {
      const opts = getVizOptions();
      // “image-like” means: let library’s own photometric handling run
      // “data-like” means: treat bands as scalar channels and map them to RGBA per UI
      if (opts.interpretation !== "data") {
        // fall back to the plugin’s default mapping by delegating:
        // (call the plugin helper directly)
        return OSD.RawTiffPlugin.rasterToContext2d(tile, raster);
      }

      const { width, height } = raster;
      const n = width * height;
      const [rCh, gCh, bCh, aCh] = opts.renderChannels;

      const out = new Uint8ClampedArray(n * 4);

      const read = (ch, i) => {
        if (ch == null || ch < 0) return 0;
        const band = raster.bands[ch];
        return band ? band[i] : 0;
      };

      for (let i = 0, j = 0; i < n; i++, j += 4) {
        out[j + 0] = toneMapScalar(read(rCh, i), opts);
        out[j + 1] = toneMapScalar(read(gCh, i), opts);
        out[j + 2] = toneMapScalar(read(bCh, i), opts);
        out[j + 3] = aCh >= 0 ? toneMapScalar(read(aCh, i), opts) : 255;
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { willReadFrequently: false });
      ctx.putImageData(new ImageData(out, width, height), 0, 0);
      return ctx;
    },
    3,
    50
  );
}

(async function main() {
  enableGeoTIFFTileSource(OpenSeadragon);

  // Install “data-like remap” converter
  installScientificConverter(OpenSeadragon);

  const viewer = (window.viewer = OpenSeadragon({
    element: "viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    minZoomImageRatio: 0.01,
    visibilityRatio: 0,
    crossOriginPolicy: "Anonymous",
    ajaxWithCredentials: true,
  }));

  async function setupImage(tileSourceInput, name) {
    viewer.close();
    $("filename").textContent = name;
    $("debug").textContent = "";

    const viz = getVizOptions();

    // Pass interpretation hints into your pipeline (no new API args needed)
    const tileSourcesPromise = OpenSeadragon.GeoTIFFTileSource.getAllTileSources(tileSourceInput, {
      logLatency: true,
      hints: {
        interpretation: viz.interpretation,
        renderChannels: viz.renderChannels,
      },
      GeoTIFFOptions: undefined
    });

    tileSourcesPromise
      .then((ts) => viewer.open(ts))
      .catch((e) => {
        $("debug").textContent = `Error loading TIFF: ${e?.stack || e}`;
        console.error('Error loading GeoTIFF:', e);
      });
  }

  // sample links
  document.querySelectorAll(".demo-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-href");
      setupImage(url, url);
    });
  });

  // local files
  $("file-picker").addEventListener("change", (ev) => {
    const f = ev.target.files?.[0];
    if (!f) return;
    setupImage(f, f.name);
  });
})();