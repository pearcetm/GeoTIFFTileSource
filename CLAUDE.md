# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GeoTIFFTileSource is an OpenSeadragon plugin that enables viewing of local and remote TIFF files without requiring an image server. It uses geotiff.js to provide serverless access to compatible TIFF files through HTTP range requests.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the project for distribution
- `npm run test` - Run tests with Vitest
- `npm run preview` - Preview the built project

## Architecture

### Core Components

- **main.js** - Entry point containing the `GeoTIFFTileSource` class that extends OpenSeadragon's TileSource
- **enableGeoTIFFTileSource()** - Main function that attaches the GeoTIFFTileSource class to OpenSeadragon
- **Static sharedPool** - Shared geotiff.js Pool instance to prevent browser crashes from multiple pools

### Key Classes and Methods

- **GeoTIFFTileSource** - Main tile source class with methods:
  - `getAllTileSources()` - Static method to create tile sources from TIFF files
  - `getTileUrl()` - Returns custom URL objects with attached fetch promises
  - `regionToDataUrl()` - Core method that converts TIFF regions to canvas data URLs
  - `setupLevels()` - Analyzes TIFF images to create pyramid levels

### Image Processing Pipeline

1. **File Loading** - Uses geotiff.js `fromBlob()` or `fromUrl()` to load TIFF files
2. **Level Detection** - Automatically detects tiled pyramids vs creates synthetic levels
3. **Tile Rendering** - Converts TIFF data to canvas using photometric interpretation
4. **Color Space Conversion** - Handles various formats (RGB, CMYK, YCbCr, CIELab, etc.)

### Utility Modules

- **utils/Converters.js** - Color space conversion functions adapted from geotiff.js
- **utils/DeferredPromise.js** - Promise utility for async coordination
- **utils/osdMonkeyPatch.js** - OpenSeadragon patches for compatibility
- **formats/perkinElmer.js** - PerkinElmer Vectra QPTIFF channel parser

### Special Format Support

- **QPTIFF** - PerkinElmer Vectra format with multi-channel support
- **Multi-page TIFFs** - Automatically organizes by aspect ratio and filters transparency masks
- **Pyramid Detection** - Handles both native TIFF pyramids and synthetic level generation

## Testing

Tests are located in the `test/` directory and use Vitest with jsdom environment. The main test file is `import.test.js`.

## Build System

Uses Vite for building with dual output:
- ES module (`geotiff-tilesource.mjs`)
- UMD module (`geotiff-tilesource.min.js`)

The build includes source maps and bundled license information via rollup-plugin-license.