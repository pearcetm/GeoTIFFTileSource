# GeoTIFFTileSource

Implementation of a [TileSource](https://openseadragon.github.io/docs/OpenSeadragon.TileSource.html) for [OpenSeadragon](https://openseadragon.github.io/) based on [geotiff.js](https://geotiffjs.github.io/), enabling local and remote TIFF files to be viewed without using an image server.

Implements an ES6 module extending the original work from [pearcetm/GeoTIFFTileSource](https://github.com/pearcetm/GeoTIFFTileSource). For further information on creating GeoTIFF files and it's requirements, please see the original repository.


## Usage

### Installation

The plugin is available as an npm package:

```bash
npm i geotiff-tilesource
```
The plugin requires OpenSeadragon 3.0.0 or above, and includes [geotiff.js](https://geotiffjs.github.io/) as a dependency.

### Extending OpenSeadragon

The plugin allows for extending OpenSeadragon with a new `TileSource` type, the `GeoTIFFTileSource`. To initialize, call the following at the top-most import of OpenSeadragon:

```javascript
import OpenSeadragon from 'openseadragon';
import { enableGeoTIFFTileSource } from "geotiff-tilesource";

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
