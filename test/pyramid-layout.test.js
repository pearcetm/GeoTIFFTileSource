import { describe, it, expect, beforeAll } from "vitest";
import OpenSeadragon from "openseadragon";
import { enableGeoTIFFTileSource } from "../src/main.js";

beforeAll(() => {
  enableGeoTIFFTileSource(OpenSeadragon);
});

/** @returns {*} minimal GeoTIFFImage-like object */
function mockPage(w, h, imageDescription) {
  return {
    getWidth: () => w,
    getHeight: () => h,
    fileDirectory: {
      ImageDescription: imageDescription ?? "",
      PhotometricInterpretation: 1,
    },
  };
}

describe("GeoTIFFTileSource layout (pyramid + SVS companions)", () => {
  /** @type {typeof OpenSeadragon.GeoTIFFTileSource} */
  let GeoTIFFTileSource;

  beforeAll(() => {
    GeoTIFFTileSource = OpenSeadragon.GeoTIFFTileSource;
  });

  it("excludes Aperio macro/label from IFD pyramid detection", async () => {
    const mainPyramid = [
      mockPage(4000, 3000, "main\nbaseline"),
      mockPage(2000, 1500, "main\nlevel1"),
      mockPage(1000, 750, "main\nlevel2"),
    ];
    const macro = mockPage(1280, 960, "macro\nmacro");
    const mixed = [...mainPyramid, macro];

    const layout = await GeoTIFFTileSource.resolveLayout({}, mixed, {});
    expect(layout.strategy).toBe("ifd");
    expect(layout.ifdLevelsLargestToSmallest.length).toBe(3);

    const levels = await GeoTIFFTileSource.buildLevelImages({}, layout, "test");
    expect(levels.length).toBe(3);
    expect(levels.map((im) => im.getWidth())).toEqual([1000, 2000, 4000]);
  });

  it("uses full IFD list when all pages form a pyramid", async () => {
    const pages = [
      mockPage(800, 600, ""),
      mockPage(400, 300, ""),
      mockPage(200, 150, ""),
    ];
    const layout = await GeoTIFFTileSource.resolveLayout({}, pages, {});
    expect(layout.strategy).toBe("ifd");
    expect(layout.ifdLevelsLargestToSmallest.length).toBe(3);
  });

  it("hints.layout.prefer stack forces single when multiple planes and IFD pyramid", async () => {
    const a = mockPage(1000, 1000, "p0\na");
    const b = mockPage(1000, 1000, "p1\nb");
    const small = mockPage(500, 500, "p2\nsm");
    const set = [a, b, small];

    const layoutPyramid = await GeoTIFFTileSource.resolveLayout({}, set, {});
    expect(layoutPyramid.strategy).toBe("ifd");

    const layoutStack = await GeoTIFFTileSource.resolveLayout({}, set, {
      layout: { prefer: "stack" },
    });
    expect(layoutStack.strategy).toBe("single");
    const levels = await GeoTIFFTileSource.buildLevelImages({}, layoutStack, "test");
    expect(levels.length).toBe(1);
  });

  it("isSvsStyleCompanionPage matches macro/label line (case-insensitive)", () => {
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nMACRO")
      )
    ).toBe(true);
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nLabel")
      )
    ).toBe(true);
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nbaseline")
      )
    ).toBe(false);
  });
});
