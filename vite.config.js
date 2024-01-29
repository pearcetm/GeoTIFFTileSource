import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'GeoTIFFTileSource',
			fileName: (format) => `GeoTIFFTileSource.${format}.js`
		}
	}
});