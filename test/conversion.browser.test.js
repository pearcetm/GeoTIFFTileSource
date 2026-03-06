// test/conversion.test.js
import { describe, it, expect, beforeAll, vi } from "vitest";
import OpenSeadragon from "openseadragon";

import { enableGeoTIFFTileSource } from "../src/main.js";

import { validateTIFFStructure } from "./helpers/tiff-validate.js";
import { fromArrayBuffer } from "geotiff";

import {
  fixtureGray8,
  fixtureRGB8Chunky,
  fixtureRGB8Planar,
  fixtureData4Ambiguous,
  fixtureData6,
} from "./data/tiff-fixtures.js";

enableGeoTIFFTileSource(OpenSeadragon);

it("fixture is valid TIFF for geotiff.js", async () => {
  const ab = fixtureRGB8Planar();
  validateTIFFStructure(ab);
  const t = await fromArrayBuffer(ab);
  const img = await t.getImage(0);
  expect(img.getWidth()).toBe(16);
});

it("rejects corrupted TIFF header", async () => {
  const ab = fixtureGray8();
  const u = new Uint8Array(ab);
  u[2] = 0; u[3] = 0; // break magic
  expect(() => validateTIFFStructure(ab)).toThrow();
});

function wrapRaw(ab, hints = {}) {
  const api = OpenSeadragon.RawTiffPlugin;
  if (!api) throw new Error("RawTiffPlugin not installed by enableGeoTIFFTileSource");
  return api.wrap(ab, { hints });
}

describe("RawTIFF GPU additions", () => {
  /** @type {*} */
  let api;

  beforeAll(() => {
    api = OpenSeadragon.RawTiffPlugin;
    expect(api).toBeDefined();
    expect(OpenSeadragon.converter).toBeDefined();
  });

  it("decodes 1-channel grayscale into tiffRaster with 1 band", async () => {
    const ab = fixtureGray8();
    const raw = wrapRaw(ab);
    const raster = await api.convert({}, raw, "tiffRaster");
    expect(raster.getType()).toBe("tiffRaster");
    expect(raster.bands.length).toBe(1);
    expect(raster.width).toBe(16);
    expect(raster.height).toBe(16);
    // deterministic pixel check at (x=3,y=2): v = x + 10*y + 50*c
    const idx = 2 * 16 + 3;
    expect(Number(raster.bands[0][idx])).toBe((3 + 10 * 2 + 0) & 255);
  });

  it("decodes chunky RGB into 3 planar bands", async () => {
    const ab = fixtureRGB8Chunky();
    const raw = wrapRaw(ab);
    const raster = await api.convert({}, raw, "tiffRaster");
    expect(raster.bands.length).toBe(3);
    const idx = 1 * 16 + 4; // (x=4,y=1)
    expect(Number(raster.bands[0][idx])).toBe((4 + 10 * 1 + 50 * 0) & 255);
    expect(Number(raster.bands[1][idx])).toBe((4 + 10 * 1 + 50 * 1) & 255);
    expect(Number(raster.bands[2][idx])).toBe((4 + 10 * 1 + 50 * 2) & 255);
  });

  it("decodes planar RGB (PlanarConfiguration=2) into 3 bands with correct values", async () => {
    const ab = fixtureRGB8Planar();
    const raw = wrapRaw(ab);
    const raster = await api.convert({}, raw, "tiffRaster");
    expect(raster.bands.length).toBe(3);
    const idx = 5 * 16 + 7; // (x=7,y=5)
    expect(Number(raster.bands[0][idx])).toBe((7 + 10 * 5 + 50 * 0) & 255);
    expect(Number(raster.bands[1][idx])).toBe((7 + 10 * 5 + 50 * 1) & 255);
    expect(Number(raster.bands[2][idx])).toBe((7 + 10 * 5 + 50 * 2) & 255);
  });

  it("packs 6-channel data into 2 GPU packs (packsOf4)", async () => {
    const ab = fixtureData6();
    const raw = wrapRaw(ab, {
      // ensure data interpretation (though PI omitted should infer data)
      format: { interpretation: "data", gpu: { preferRGBA8: true } },
    });

    const tex = await api.convert({}, raw, "gpuTextureSet");
    expect(tex.getType()).toBe("gpuTextureSet");
    expect(tex.mode).toBe("data");
    expect(tex.packs.length).toBe(2);

    expect(tex.packs[0].channels).toEqual([0, 1, 2, 3]);
    expect(tex.packs[1].channels.slice(0, 2)).toEqual([4, 5]);
    // remainder padded
    expect(tex.packs[1].channels[2]).toBe(-1);
    expect(tex.packs[1].channels[3]).toBe(-1);

    // With our fixture all channels are U8 => RGBA8 preferred
    expect(tex.packs[0].format).toBe("RGBA8");
    expect(tex.packs[1].format).toBe("RGBA8");
  });

  it("decision-problem: ambiguous 4-channel defaults to data in auto, but can be forced to image", async () => {
    const ab = fixtureData4Ambiguous();

    // auto -> should infer data (PI omitted, spp=4)
    const rawAuto = wrapRaw(ab, { format: { interpretation: "auto" } });
    const texAuto = await api.convert({}, rawAuto, "gpuTextureSet");
    expect(texAuto.mode).toBe("data");
    expect(texAuto.packs.length).toBe(1);

    // force image
    const rawImage = wrapRaw(ab, { format: { interpretation: "image", gpu: { preferRGBA8: true } } });
    const texImg = await api.convert({}, rawImage, "gpuTextureSet");
    expect(texImg.mode).toBe("image");
    expect(texImg.packs.length).toBe(1);
    expect(texImg.packs[0].channels).toEqual([0, 1, 2, 3]);
  });

  it("warns once when >4 channels are squeezed into RGBA display conversion", async () => {
    const ab = fixtureData6();
    const raw = wrapRaw(ab, {
      renderChannels: [0, 1, 2, 3, 4, 5], // forcing >4
      format: { interpretation: "data" },
    });

    const raster = await api.convert({}, raw, "tiffRaster");

    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    // call rasterToRGBA8 twice; should warn once
    api.rasterToRGBA8(raster);
    api.rasterToRGBA8(raster);

    const calls = warn.mock.calls
      .flat()
      .filter((m) => typeof m === "string" && m.includes("only 4 can be represented"));
    expect(calls.length).toBe(1);

    warn.mockRestore();
  });
});