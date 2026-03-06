import { describe, expect, it } from "vitest";
import OpenSeadragon from "openseadragon";
import { enableGeoTIFFTileSource } from "../src/main.js";

// Enable GeoTIFF Tile Source for OpenSeadragon
enableGeoTIFFTileSource(OpenSeadragon);

describe("GeoTIFFTileSource plugin", () => {
  it("should import init function", () => {
    expect(enableGeoTIFFTileSource).toBeDefined();
  });

  it("should attach GeoTIFFTileSource to the OpenSeadragon namespace", () => {
    expect(OpenSeadragon.GeoTIFFTileSource).toBeDefined();
  });
});
