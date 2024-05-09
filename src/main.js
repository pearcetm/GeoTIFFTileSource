import { GeoTIFFTileSource } from "./GeoTIFFTileSource.js";
import { patchOSDImageJob } from "./utils/osdMonkeyPatch.js";

/**
 * Enable GeoTIFF Tile Source for OpenSeadragon.
 *
 * The GeoTIFFTileSource uses the GeoTIFF.js library to serve tiles from local file or a remote URL.
 * Remote files require HTTP range requests to be enabled on the server.
 *
 * @param {OpenSeadragon} OpenSeadragon - The OpenSeadragon class.
 */
export const enableGeoTIFFTileSource = (OpenSeadragon) => {
  /**
   * Apply ImageJob patch to OpenSeadragon.
   * The patch is applied here and not in the class as this is our only current accessor for
   * the client's OpenSeadragon instance.
   *
   * Currently, users who import the class directly will need to apply the patch themselves.
   */
  patchOSDImageJob(OpenSeadragon);

  // Attach the class to the OpenSeadragon namespace
  OpenSeadragon.GeoTIFFTileSource = GeoTIFFTileSource;
};

export { GeoTIFFTileSource };
export { patchOSDImageJob };
