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
  OpenSeadragon.GeoTIFFTileSource = GeoTIFFTileSource;
};

export { GeoTIFFTileSource };
