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

enableGeoTIFFTileSource(OpenSeadragon);
```

This will make the `OpenSeadragon.GeoTIFFTileSource` class available for use.

### Using the GeoTIFFTileSource

#### Prepare TileSources

GeoTIFFTileSource accepts both local and remote GeoTIFF files. For local files, the `url` parameter should be a `File` object. For remote files, the `url` parameter should be a string. The `getAllTileSources` reads a local or remote GeoTIFF file and returns an array of `OpenSeadragon.GeoTIFFTileSource` objects, one for each image (page) in the GeoTIFF file.

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
