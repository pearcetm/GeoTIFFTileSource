import { GeoTIFFTileSource } from "./GeoTIFFTileSource.js";

/**
 * Enable GeoTIFF Tile Source for OpenSeadragon.
 *
 * The GeoTIFFTileSource uses the GeoTIFF.js library to serve tiles from local file or a remote URL.
 * Remote files require HTTP range requests to be enabled on the server.
 *
 * @param {OpenSeadragon} OpenSeadragon - The OpenSeadragon class.
 */
export const enableGeoTIFFTileSource = (OpenSeadragon) => {
  // Attach the class to the OpenSeadragon namespace
  Object.assign(GeoTIFFTileSource.prototype, OpenSeadragon.TileSource.prototype, GeoTIFFTileSource.prototype);
  OpenSeadragon.GeoTIFFTileSource = GeoTIFFTileSource;
  Object.defineProperty(GeoTIFFTileSource, '_OpenSeadragon', {
    get: function _OpenSeadragon(){
      return OpenSeadragon;
    }
  });
};

// Run an IIFE to attach the GeoTIFFTileSource to the OpenSeadragon namespace
// IF OpenSeadragon is available in the global scope
(function (global, factory) {
  // Skip if currently in ESM mode
  if (typeof exports === "undefined") {
    return;
  }

  // Check if OpenSeadragon is available
  if (typeof global.OpenSeadragon !== "undefined") {
    // Attach the GeoTIFFTileSource to the OpenSeadragon namespace
    factory(global.OpenSeadragon);
  }
})(typeof window !== "undefined" ? window : this, enableGeoTIFFTileSource);

export { GeoTIFFTileSource };
