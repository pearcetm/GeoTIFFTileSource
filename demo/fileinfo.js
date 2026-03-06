const viewer = OpenSeadragon({
  id: "viewer",
  prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
});

document.getElementById("file-picker").onchange = function (ev) {
  clearImageInfo();

  setupImage(this.files[0], this.files[0].name);
};

document.getElementById("use-link").onclick = function () {
  clearImageInfo();
  let input = document.getElementById("link-input");
  let url = input.value;
  if (!url) return;
  setupImage(url, url);
};

function setupImage(tileSourceInput, tilesourceName = "") {
  clearImageInfo();
  document.getElementById("filename").textContent = tilesourceName;

  let tiffTileSources = OpenSeadragon.GeoTIFFTileSource.getAllTileSources(tileSourceInput, {
    logLatency: true,
  });
  tiffTileSources.then((ts) => viewer.open(ts));

  tiffTileSources
    .then((tileSources) => {
      document.getElementById("filename").textContent +=
        " -- " + tileSources.length + " image" + (tileSources.length != 1 ? "s" : "") + " found";
      Promise.all(tileSources.map((t) => t.promises.ready)).then(() =>
        showTileSourcesInfo(tileSources)
      );
    })
    .catch((error) => {
      document.getElementById("filename").textContent +=
        ": Error opening file. Is this a valid tiff? See console for details.";
      console.error(error);
    });
}

function clearImageInfo() {
  document.getElementById("image-description").textContent = "";
  document.getElementById("associated-images").textContent = "";
}
function showTileSourcesInfo(tileSources) {
  clearImageInfo();
  let desc = document.getElementById("image-description");
  tileSources.map((ts, index) => {
    let images = ts.GeoTIFFImages;
    let h = document.createElement("h3");
    h.textContent = "File info";
    desc.appendChild(h);
    showImageInfo(images);
    desc.appendChild(document.createElement("hr"));
    return images;
  });
}

function showImageInfo(images) {
  let desc = document.getElementById("image-description");
  let frag = document.createDocumentFragment();

  images.forEach((image, index) => {
    let d = document.createElement("div");
    frag.appendChild(d);
    let t = document.createElement("h4");
    d.appendChild(t);
    t.textContent = "Tiff Page " + index;

    let fd = Object.assign({}, image.fileDirectory);
    if (fd.ImageDescription) {
      let info = document.createElement("div");
      d.appendChild(info);
      let ID =
        "<u>ImageDescription contents for this subimage</u><br>" +
        fd.ImageDescription.replaceAll("|", "<br>");
      delete fd.ImageDescription;
      info.innerHTML = ID;
    }

    let to_print = {};
    Object.entries(fd).forEach(([k, v]) => {
      to_print[k] =
        typeof v !== "string" && v.length > 8
          ? "" + v.constructor.name + " (" + v.length + ") [...]"
          : typeof v !== "string" && typeof v.length !== "undefined"
            ? v.constructor.name + "(" + v.length + ") [" + [...v.values()] + "]"
            : v;
    });

    let pre = document.createElement("pre");
    d.appendChild(pre);
    pre.textContent = JSON.stringify(to_print, null, 2);
  });
  desc.appendChild(frag);
}
