        
// Basic viewer setup
let viewer =window.viewer= OpenSeadragon({
    element:'viewer',
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    minZoomImageRatio:0.01,
    visibilityRatio:0,
    crossOriginPolicy: 'Anonymous',
    ajaxWithCredentials: false
});


document.getElementById('file-picker').onchange=function(ev){
    viewer.close();
    clearImageInfo();
    // reset image description stuff
    document.querySelectorAll('#file-info img').forEach(node=>{
        node.setAttribute('src','');
    })
    document.querySelectorAll('.image-details').forEach(node=>{
        node.textContent='';
    })
    document.getElementById('filename').textContent=this.files[0].name;
    let tileSource = window.tileSource = new OpenSeadragon.GeoTIFFTileSource(this.files[0]);
    tileSource.promises.setupComplete.then(()=>viewer.open(tileSource))
    tileSource.promises.imageHeaders.then(showImageInfo);
}

document.getElementById('use-link').onclick=function(){
    viewer.close();
    clearImageInfo();
    let input = document.getElementById('link-input');
    let url=input.value;
    let tileSource = window.tileSource = new OpenSeadragon.GeoTIFFTileSource(url);
    tileSource.promises.setupComplete.then(()=>viewer.open(tileSource))
    tileSource.promises.imageHeaders.then(showImageInfo);
}

function clearImageInfo(){
    document.getElementById('image-description').textContent = "";
    document.getElementById('associated-images').textContent="";
}
function showImageInfo(images){
    window.images=images;
    clearImageInfo();
    let desc = document.getElementById('image-description');
    let frag = document.createDocumentFragment();
    let strippedImages = images.filter(image=>!image.isTiled);
    images.forEach((image,index)=>{
        let d = document.createElement('div');
        frag.appendChild(d);
        let t = document.createElement('h4');
        d.appendChild(t);
        t.textContent = 'Tiff Page '+index;
        
        let fd = Object.assign({},image.fileDirectory);
        if(fd.ImageDescription){
            let info=document.createElement('div');
            d.appendChild(info);
            let ID = fd.ImageDescription.replaceAll('|','<br>');
            delete fd.ImageDescription;
            info.innerHTML=ID;
        }
        

        let to_print={}
        Object.entries(fd).forEach(([k,v])=>{
            to_print[k] = typeof v.length !== 'undefined' ? ''+ v.constructor.name + ' ['+v.length+' elements]' : v;
        })

        let pre = document.createElement('pre');
        d.appendChild(pre);
        pre.textContent = JSON.stringify(to_print,null,2);

        if(!image.isTiled && strippedImages.length!=images.length){
            //display associated image
            let img = document.createElement('img');
            RGBtoDataUrl(image).then(d=>img.src = d);
            document.getElementById('associated-images').appendChild(img)
        }

    })
    desc.appendChild(frag);
}

function RGBtoDataUrl(image){
    let canvas = document.createElement('canvas');
    canvas.width = image.getWidth();
    canvas.height = image.getHeight();
    let ctx = canvas.getContext('2d');
    return image.readRasters().then(data=>{
        let arr = new Uint8ClampedArray(4*data[0].length);
        for(let i=0, a=0;i<data[0].length; i++, a+=4){
            arr[a]=data[0][i];
            arr[a+1]=data[1][i];
            arr[a+2]=data[2][i];
            arr[a+3]=255;
        }
        ctx.putImageData(new ImageData(arr,data.width,data.height), 0, 0);
        return canvas.toDataURL('jpeg',0.8);
    })
}

