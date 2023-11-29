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
