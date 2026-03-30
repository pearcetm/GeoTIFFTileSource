# GeoTIFFTileSource

Implementation of a [TileSource](https://openseadragon.github.io/docs/OpenSeadragon.TileSource.html) for [OpenSeadragon](https://openseadragon.github.io/) based on [geotiff.js](https://geotiffjs.github.io/), enabling local and remote TIFF files to be viewed without using an image server.

See it in action at [https://pearcetm.github.io/GeoTIFFTileSource/demo/demo.html](https://pearcetm.github.io/GeoTIFFTileSource/demo/demo.html)

## How to create GeoTIFF files

In order to generate a GeoTIFF file compatible with this library, you can for instance use [sharp](https://sharp.pixelplumbing.com/), a *High performance Node.js image processing* library.

```javascript
import sharp from 'sharp'

sharp('input.jpg', {limitInputPixels:false})
    .tiff({tile:true, pyramid:true})
    .toFile('output.tiff')
    .then(console.log)
    .catch(console.error);
```

Many options are available.

[Check sharp documentation on TIFF output format.](https://sharp.pixelplumbing.com/api-output#tiff)

## Prerequisites for remote files - HTTP range requests
This library works by loading only parts of the remote TIFF file (which may be huge). For this, the remote http server has to be compatible. Most production-ready http servers are compatible, but some development servers (such as `python3 -m http.server` or PHP built-in development web server) are not.

[Check Mozilla documentation on HTTP range requests.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests)

## Usage

### Installation

The plugin is available as both an npm package and a standalone script.

#### Using NPM
```bash
npm i geotiff-tilesource
```

#### Using standalone scripts
Standalone scripts for the plugin are available as both UMD and ES module scripts. The UMD script is compatible with the `OpenSeadragon` global object, while the ES module script can be imported as a module.
Note that the OpenSeadragon library must be loaded before the plugin script. The geotiff.js library comes bundled with the plugin, and does not need to be loaded separately.

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/openseadragon.min.js"></script>

<!-- Using UMD script -->
<script type="text/javascript" src="geotiff-tilesource.min.js"></script>
<!-- Using ES module script -->
<script type="module" src="geotiff-tilesource.mjs"></script>
```

### Extending OpenSeadragon

The plugin allows for extending OpenSeadragon with a new `TileSource` type, the `GeoTIFFTileSource`. To initialize, call the following at the top-most import of OpenSeadragon:

#### Using NPM package
```javascript
import OpenSeadragon from 'openseadragon';
import { enableGeoTIFFTileSource } from "geotiff-tilesource";

enableGeoTIFFTileSource(OpenSeadragon);
```

#### Using standalone scripts

##### Using UMD script
The UMD script will automatically extend the `OpenSeadragon` global object with the `GeoTIFFTileSource` class.

##### Using ES module script
```javascript
import { enableGeoTIFFTileSource } from './geotiff-tilesource.mjs';

enableGeoTIFFTileSource(OpenSeadragon, { /* optional config */ });
```

This will make the `OpenSeadragon.GeoTIFFTileSource` class available for use.

## Usage
The plugin can be used in two ways:
 - using GeoTIFFTileSource directly to open GeoTIFF files to read tiff files
 - using data types: ``rawTiff`` or potentially `tiffRaster` to render TIFF data (obtained e.g., as a server response payload)

### Using the GeoTIFFTileSource

#### Prepare TileSources

GeoTIFFTileSource accepts both local and remote GeoTIFF files. For local files, the `url` parameter should be a `File` object. For remote files, the `url` parameter should be a string. The `getAllTileSources` reads a local or remote GeoTIFF file and returns an array of `OpenSeadragon.GeoTIFFTileSource` objects (typically one primary slide plus separate sources for other aspect ratios, e.g. Aperio macro/label).

Each tile source exposes:

- **`GeoTIFFImages`**: pages used as OpenSeadragon pyramid levels (what `setupLevels` reads).
- **`GeoTIFFAllImages`**: every page in that source’s aspect-ratio group (same as `GeoTIFFImages` if you construct the source yourself without the split). Use this for **metadata / file listings** so companion pages are still visible when `GeoTIFFImages` is level-only.
You can optionally pass an `options` object to `getAllTileSources` to control the behavior of the library. 
``options.GeoTiffOptions`` are passed to geotiff.js, and ``options.hints`` are passed to the library.
```javascript
const tiffTileSources = await OpenSeadragon.GeoTIFFTileSource.getAllTileSources(remoteUrl, {
  logLatency: false,
});
```

#### Create OpenSeadragon Viewer

The `OpenSeadragon.Viewer` can be created as usual, with the `tileSources` parameter set to the array of `OpenSeadragon.GeoTIFFTileSource` objects, or with the `viewer.open` method.

```javascript
const viewer = new OpenSeadragon.Viewer({
  id: 'viewer',
  crossOriginPolicy: "Anonymous",
  ajaxWithCredentials: true,
  tileSources: tiffTileSources,
  ...viewerOptions,
});

// OR
viewer.open(tiffTileSources);
```

### Using the data types directly
If you have a tiff-like data and you need to render them directly, you can use predefined types introduced
by this plugin.

#### ``rawTiff``
Represents a TIFF container in “raw” form. It usually wraps:

- the original source (URL / File / Blob / ArrayBuffer)
- optional user-provided hints (hints)
- optional metadata (meta)
- ``downloadTileStart(...)`` level override:
> finish(OpenSeadragon.RawTiffPlugin.wrap(arrayBuffer, { hints, meta }), request, 'rawTiff');

#### ``tiffRaster``
Represents decoded raster bands for a region (usually one tile). This is CPU-side data and preserves precision:
- width, height
- bands: TypedArray[] (one array per band)
- optional hints (carried forward for interpretation / channel mapping)
- intermediate type, usually not useful

#### ``gpuTextureSet``
Represents “ready-to-use” raw data payload for multichannel use-cases - usually direct GPU rendering.
Conceptually:
- mode: "image" | "data"
  - "image": it’s meant to behave like a normal image on GPU (RGB/Gray/Palette logic applied)
  - "data": independent channels packed for scientific rendering
- packs: Array<{ format: "RGBA8" | "RGBA16F", channels: [c0,c1,c2,c3], data: TypedArray/Float32Array, width, height }>
  - channels are packed in groups of 4 (packsOf4)
  - padding channels are -1
- channelCount: number of channels (excluding padding)
- for direct use on, for example, GPU

#### image-like types

By default, ``tiffRaster`` is converted to default OpenSeadragon image-like types and flows
naturally into the rendering pipeline. The only downside is that when your image carries 
more than 4 channels, the overflow is discarded - you might want to explicitly request
``gpuTextureSet`` instead, and convert it to RGBA yourself - via plugin, or, [directly
at the rendering level](https://github.com/openseadragon/flex-render).

## Options (format, GPU packing, and layout hints)

This library can interpret TIFF content in two broad ways:

- **image-like**: Treat channels as a real image (RGB/YCbCr/Palette/Gray), apply color-space logic, and produce a 4-channel RGBA output for standard viewers.
- **data-like**: Treat channels as independent scientific bands (microscopy, masks, label images, multi-band signals) and preserve precision, packing channels for GPU rendering.

These decisions are controlled through the `format` options object.

### Where to set options

Options can be provided from multiple places. Later sources override earlier ones:

1. **Global defaults** at install time (recommended for app-wide behavior)
2. **Per-load hints** (e.g. passed to `getAllTileSources(..., { hints: { format: ... } })`)
3. **Per-tile/per-raster overrides** (advanced usage; e.g. `rawTiff.hints.format`, `tiffRaster.hints.format`, or `tile.format`)

### `format` options

#### `format.interpretation`
`"auto" | "image" | "data"` (default `"auto"`)

- `"auto"`: Infer image-vs-data from TIFF tags. Typical RGB/Gray files become `"image"`. Unusual band counts or missing color tags tend to become `"data"`.
- `"image"`: Force image-like interpretation (use color-space conversion / RGBA mapping logic).
- `"data"`: Force data interpretation (bands are preserved and packed for GPU).

#### `format.channels`
`number[] | null` (default `null`)

Explicit channel order for `"data"` interpretation. Example: `[0, 3, 2, 1]`.
If `null`, the library packs channels in natural order.

#### `format.gpu`
GPU packing options (used when converting to `gpuTextureSet`).

- `preferRGBA8` (boolean, default `true`): If all selected channels are 8-bit, pack into RGBA8.
- `forceRGBA16F` (boolean, default `false`): Always pack into RGBA16F (half-float) even if RGBA8 would be possible.
- `packMode` (`"packsOf4"`, default `"packsOf4"`): Pack channels into RGBA textures in groups of 4.

**Precision note:** when using RGBA16F packs, integer bands are converted to float prior to upload so shaders can operate with good precision.

#### `format.image`
Image mapping options for ambiguous cases.

- `rgbaChannels` (`[r,g,b] | [r,g,b,a] | null`, default `null`):
  Explicit mapping for image-like interpretation. Useful when a TIFF is ambiguous (e.g. 4 bands that might be RGBA or 4 unrelated data bands).

### Layout hints (`hints.layout`)

Some TIFFs contain pyramids in different ways:

- **IFD pyramid**: multiple top-level pages (IFDs) form decreasing resolutions (classic overviews).
- **SubIFD pyramid**: each plane/page contains `SubIFDs` that form the pyramid (common in OME/ImageJ/Bio-Formats).

Layout hints control how the tile source chooses pyramid levels and plane selection.

#### `hints.layout.pyramid`
`"auto" | "ifd" | "subifd"` (default `"auto"`)

- `"auto"`: choose based on detected structure. For formats like **Aperio SVS**, macro/label IFDs are excluded from pyramid detection so the main slide’s IFD pyramid is still recognized when those companions share a similar aspect ratio.
- `"ifd"`: force pyramid from top-level IFD pages
- `"subifd"`: force pyramid from SubIFDs if present

#### `hints.layout.planeIndex`
`number` (default `0`)

If the file is a plane/channel stack (multiple same-size IFDs), choose which plane to display by default.

#### `hints.layout.prefer`
`"pyramid" | "stack"` (default `"pyramid"`)

When the largest resolution has **multiple same-size IFDs** (planes/channels) and the file would otherwise be treated as an IFD pyramid including overview levels:

- **`"pyramid"`** (default): keep IFD pyramid behavior (overviews as levels; use `planeIndex` to pick which full-resolution plane).
- **`"stack"`**: treat as a **single-level** source for the chosen `planeIndex` only (no pyramid from overview IFDs).

### Warnings about defaults

If the library has to guess (e.g. plane stack without explicit `planeIndex`, or ambiguous 4-channel data), it will emit a **console warning once** explaining what default was chosen and how to override it via options.

## Tests

`npm test` runs Vitest with two projects: **layout** tests in Node/jsdom (no browser), and **browser** tests (RawTIFF / converter) under Chromium via Playwright. Install browsers once if needed:

```bash
npx playwright install chromium
```