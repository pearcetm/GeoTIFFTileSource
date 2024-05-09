/**
 * PerkinElmer Vectra QPTIFF Reader
 *
 * This module provides a parser to organize pages of a PerkinElmer Vectra QPTIFF
 * file into their respective channels.
 *
 * OME Docs
 * https://docs.openmicroscopy.org/bio-formats/6.5.1/formats/perkinelmer-vectra-qptiff.html
 *
 * Download link for QPTIFF spec
 * https://downloads.openmicroscopy.org/images/Vectra-QPTIFF/perkinelmer/PKI_Image%20Format.docx
 */

/**
 * Parse QPTIFF channels
 *
 * @param images {GeoTIFFImage[]} - Array of GeoTIFFImage objects
 * @returns {Map<string, {name: string, color: number[], images: GeoTIFFImage[]}>}
 *
 * @example
 * Map(2) {
 *  "DAPI" => {
 *    "name": "DAPI",
 *    "color": [0, 0, 255],
 *    "images": [GeoTIFFImage, GeoTIFFImage, ...]
 *   },
 *   "Opal 570" => {
 *    "name": "Opal 570",
 *    "color": [255, 255, 0],
 *    "images": [GeoTIFFImage, GeoTIFFImage, ...]
 *   }
 * }
 */
export const parsePerkinElmerChannels = (images) => {
  const channels = new Map();

  for (const image of images) {
    const imageDescription = new DOMParser().parseFromString(
      image.fileDirectory?.["ImageDescription"],
      "text/xml"
    );

    const channelName = imageDescription?.querySelector("Name")?.textContent;
    const channelColor = imageDescription?.querySelector("Color")?.textContent;

    if (!channelName) {
      continue;
    }

    const channelRGB = channelColor
      ? channelColor.split(",").map((v) => parseInt(v))
      : [255, 255, 255];

    if (!channels.has(channelName)) {
      channels.set(channelName, {
        name: channelName,
        color: channelRGB,
        images: [],
      });
    }

    channels.get(channelName).images.push(image);
  }

  return channels;
};
