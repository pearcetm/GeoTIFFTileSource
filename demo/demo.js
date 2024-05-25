// Basic viewer setup
let viewer = (window.viewer = OpenSeadragon({
  element: "viewer",
  prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
  minZoomImageRatio: 0.01,
  visibilityRatio: 0,
  crossOriginPolicy: "Anonymous",
  ajaxWithCredentials: true,
  sequenceMode: true,
}));
//https://modis-vi-nasa.s3-us-west-2.amazonaws.com//MOD13A1.006/2018.01.01.tif

document.getElementById("file-picker").onchange = function (ev) {
  viewer.close();
  clearImageInfo();

  setupImage(this.files[0], this.files[0].name);
};

document.getElementById("use-link").onclick = function () {
  viewer.close();
  clearImageInfo();
  let input = document.getElementById("link-input");
  let url = input.value;
  if (!url) return;
  setupImage(url, url);
};
let links = [...document.querySelectorAll(".demo-link")].map((el) => {
  el.onclick = function () {
    // console.log('demo-link clicked',this);
    let href = this.getAttribute("data-href");
    // console.log('clicked:',href);
    document.querySelector("#link-input").setAttribute("value", href);
    document.querySelector("#use-link").dispatchEvent(new Event("click"));
  };
  return el;
});

function setupImage(tileSourceInput, tilesourceName = "") {
  viewer.close();
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
    h.textContent = "TileSource #" + index;
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
