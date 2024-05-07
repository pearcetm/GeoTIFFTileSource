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
