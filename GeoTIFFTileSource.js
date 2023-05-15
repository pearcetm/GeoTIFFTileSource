
(function( $ ){
    /**
     * @class GeoTIFFTileSource
     * @classdesc The GeoTIFFTileSource uses a the GeoTIFF.js library to serve tiles from local file or remote URL. Requires GeoTIFF.js.
     *
     * @memberof OpenSeadragon
     * @extends OpenSeadragon.TileSource
     * @param {File|String|Object} input A File object, url string, or object with fields for pre-loaded GeoTIFF and GeoTIFFImages objects
     * @param {Object} opts Options object. To do: how to document options fields?
     *                 opts.logLatency: print latency to fetch and process each tile to console.log or the provided function
     *                 opts.tileWidth: tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
     *                 opts.tileHeight:tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
     *                 
     * @property {Object} GeoTIFF The GeoTIFF.js representation of the underlying file. Undefined until the file is opened successfully
     * @property {Array}  GeoTIFFImages Array of GeoTIFFImage objects, each representing one layer. Undefined until the file is opened successfully
     * @property {Bool}   ready set to true once all promises have resolved
     * @property {Object} promises
     * @property {Number} dimensions
     * @property {Number} aspectRatio
     * @property {Number} tileOverlap
     * @property {Number} tileSize
     * @property {Array}  levels
     */
    $.GeoTIFFTileSource=function( input, opts={logLatency:false} ){
        let self=this;
        this.options = opts;
        
        // $.TileSource.apply( this, [ {width:1,height:1} ] );
        $.TileSource.apply( this );
        this._ready=false;
        this._pool = new GeoTIFF.Pool();

        this._setupComplete=function(){
            this._ready=true;
            self.promises.ready.resolve();
            self.raiseEvent( 'ready', { tileSource: self } );
        }
        
        if(input.GeoTIFF && input.GeoTIFFImages){
            this.promises={
                GeoTIFF: Promise.resolve(input.GeoTIFF),
                GeoTIFFImages:Promise.resolve(input.GeoTIFFImages),
                ready:DeferredPromise(),
            }
            this.GeoTIFF = input.GeoTIFF;
            // $.TileSource.apply( this, [ {url:'dummy'} ] );
            // $.TileSource.apply( this, [ {width:1,height:1} ] );
            this.imageCount = input.GeoTIFFImages.length;
            this.GeoTIFFImages=input.GeoTIFFImages;
            setupLevels.call(this);
        } else{
            this.promises={
                GeoTIFF: input instanceof File ? GeoTIFF.fromBlob(input) : GeoTIFF.fromUrl(input),
                GeoTIFFImages:DeferredPromise(),
                ready:DeferredPromise(),
            }
            this.promises.GeoTIFF.then(tiff=>{
                self.GeoTIFF = tiff;
                // $.TileSource.apply( this, [{url:'dummy'}] );
                return tiff.getImageCount();
            }).then(count=>{
                self.imageCount = count;
                let promises=[...Array(count).keys()].map(index=>self.GeoTIFF.getImage(index));
                return Promise.all(promises);
            }).then(images=>{
                self.GeoTIFFImages = images;
                self.promises.GeoTIFFImages.resolve(images);
                setupLevels.call(self);
            }).catch(error=>{
                console.error('Re-throwing error with GeoTIFF:',error);
                throw(error);
            });
        }
        
    }

    //Static functions

    //To do: add documentation about what this does (i.e. separates likely subimages into separate GeoTIFFTileSource objects)
    $.GeoTIFFTileSource.getAllTileSources = async function(input, opts){
        let tiff= input instanceof File ? GeoTIFF.fromBlob(input) : GeoTIFF.fromUrl(input);
        return tiff.then(t=>{tiff=t; return t.getImageCount()})
                   .then(c=>Promise.all([...Array(c).keys()].map(index=>tiff.getImage(index))))
                   .then(images=>{

                        // Sort by width (largest first), then detect pyramids
                        images.sort((a,b)=>b.getWidth() - a.getWidth());
                        // find unique aspect ratios (with tolerance to account for rounding) 
                        const tolerance = 0.015
                        let aspectRatioSets = images.reduce((accumulator, image)=>{
                            let r = image.getWidth() / image.getHeight();
                            let exists = accumulator.filter(set=>Math.abs(1-set.aspectRatio/r) < tolerance);
                            if(exists.length == 0){
                                let set = {
                                    aspectRatio: r,
                                    images: [image]
                                };
                                accumulator.push(set);
                            } else {
                                exists[0].images.push(image);
                            }
                            return accumulator;
                        }, []);
                        let imagesets = aspectRatioSets.map(set=>set.images);
                        return imagesets.map(images=> new $.GeoTIFFTileSource({GeoTIFF:tiff, GeoTIFFImages:images},opts));

                        // //Separate out by aspect ratio and tiled status
                        // let aspectRatioSets=[...new Set(images.map(i=>(i.getWidth()/i.getHeight()).toFixed(2)+'-'+i.isTiled))]
                        //         .map(ar=>images.filter(i=>(i.getWidth()/i.getHeight()).toFixed(2)+'-'+i.isTiled == ar));
                        // //For each aspect ratio, extract sets of decreasing width images as pyramids
                        // let imagesets = aspectRatioSets.map(images=>{
                        //     let sortedByWidth=[...new Set(images.map(im=>im.getWidth()))]
                        //         .map(w=>images.filter(im=>im.getWidth()==w));
                        //     let arr=[]
                        //     sortedByWidth.forEach((s)=>{
                        //         s.forEach((im,index)=>{
                        //             arr[index] = (arr[index]||[]).concat(im);
                        //         })
                        //     })
                        //     return arr;//arr = array of arrays of images; each array of images makes up a tilesource set
                        // }).flat();//flatten into an array of tileSource-defining image arrays
                        // return imagesets.map(images=> new $.GeoTIFFTileSource({GeoTIFF:tiff, GeoTIFFImages:images},opts));
                    })
    }

    // Extend OpenSeadragon.TileSource, and override/add prototype functions
    Object.defineProperty($.GeoTIFFTileSource.prototype, "ready", {
        set: function ready(r) {
            //ignore
        },
        get: function ready(){
            return this._ready;
        }
    });
    $.extend( $.GeoTIFFTileSource.prototype, $.TileSource.prototype, /** @lends OpenSeadragon.GeoTIFFTileSource.prototype */{
        
        /**
         * Return the tileWidth for a given level.
         * @function
         * @param {Number} level
         */
         getTileWidth: function (level) {
            if (this.levels.length > level) {
                return this.levels[level].tileWidth;
            }
        },
    
        /**
         * Return the tileHeight for a given level.
         * @function
         * @param {Number} level
         */
        getTileHeight: function (level) {
            if (this.levels.length > level) {
                return this.levels[level].tileHeight;
            }
        },
    
        /**
         * @function
         * @param {Number} level
         */
        getLevelScale: function ( level ) {
            // console.log('getLevelScale')
            var levelScale = NaN;
            if ( this.levels.length > 0 && level >= this.minLevel && level <= this.maxLevel ) {
                levelScale =
                    this.levels[ level ].width /
                    this.levels[ this.maxLevel ].width;
            }
            return levelScale;
        },
        
        /**
         * Implement function here instead of as custom tile source in client code
         * @function
         * @param {Number} levelnum
         * @param {Number} x
         * @param {Number} y
         */
        getTileUrl: function ( levelnum, x, y ) {
            // return dataURL from reading tile data from the GeoTIFF object as String object (for cache key) with attached promise 
            let level = this.levels[levelnum];
            let url = new String(`${levelnum}/${x}_${y}`);

            url.fetch = ( (ts,level,x,y,src)=> ()=>regionToDataUrl.call(ts, level, x, y, src))(this, level, x, y, url);

            return url;
        },

        //To do: documentation necessary? Kind of an internal function...
        downloadTileStart:function(context){
            context.src.fetch().then(dataURL=>{
                let image = new Image();
                let request=''+context.src;
                image.onload=function(){
                    context.finish(image);
                }
                image.onerror = image.onabort = function(){
                    context.finish(null,request,'Request aborted');
                }
                image.src = dataURL;
            })
        },
        downloadTileAbort:function(context){
            context.src.abortController && context.src.abortController.abort();
        },
        

    })

    //private functions

    function regionToDataUrl(level, x, y, src){

        let startTime = this.options.logLatency && Date.now();
        
        let w = level.tileWidth;
        let h = level.tileHeight;
        let window = [x*w, y*h, (x+1)*w, (y+1)*h].map(v=>Math.round(v * level.scalefactor));//scale the requested tile to layer image coordinates
        let abortController = src.abortController = new AbortController();
        let abortSignal = abortController.signal;

        return level.image.readRGB({
            interleave:true,
            window:window,
            pool:this._pool,
            width:level.tileWidth,
            height:level.tileHeight,
            signal:abortSignal
        }).then(data=>{
            let canvas = document.createElement('canvas');
            canvas.width = level.tileWidth;
            canvas.height = level.tileHeight;
            let ctx = canvas.getContext('2d');

            let arr = new Uint8ClampedArray(4*canvas.width*canvas.height);
            let rgb = new Uint8ClampedArray(data);
            let i, a;
            for(i=0, a=0;i<rgb.length; i+=3, a+=4){
                arr[a]=rgb[i];
                arr[a+1]=rgb[i+1];
                arr[a+2]=rgb[i+2];
                arr[a+3]=255;
            }
            ctx.putImageData(new ImageData(arr,canvas.width,canvas.height), 0, 0);

            this.options.logLatency && (typeof this.options.logLatency=='function' ? this.logLatency : console.log)('Tile latency (ms):', Date.now() - startTime)
            return canvas.toDataURL('image/jpeg',0.8);
        })
    }

    function setupLevels(){
        if(this.ready){
            return;
        }

        let images = this.GeoTIFFImages.sort((a,b)=>b.getWidth() - a.getWidth());
        let tiledimages = images.filter(i=>i.isTiled);
        

        //default to 256x256 tiles, but defer to options passed in
        let defaultTileWidth=defaultTileHeight=256;

        //the first image is the highest-resolution view (at least, with the largest width)
        let fullWidth = this.width = images[0].getWidth();
        let fullHeight= this.height = images[0].getHeight();
        this.tileOverlap = 0;
        this.minLevel = 0;
        this.aspectRatio = this.width/this.height;
        this.dimensions  = new $.Point( this.width, this.height );

        //a valid tiled pyramid has strictly monotonic size for levels
        let pyramid=tiledimages.reduce((acc,im)=>{
            if(acc.width!==-1){
                acc.valid = acc.valid && im.getWidth()<acc.width;//ensure width monotonically decreases
            }
            acc.width=im.getWidth();
            return acc;
        },{valid:true, width:-1});

        if(pyramid.valid){
            this.levels = images.map((image)=>{
                let w = image.getWidth();
                let h = image.getHeight();
                return {
                    width:w,
                    height:h,
                    tileWidth:this.options.tileWidth || image.getTileWidth() || defaultTileWidth,
                    tileHeight:this.options.tileHeight || image.getTileHeight() || defaultTileHeight,
                    image:image,
                    scalefactor:1,
                }
            })
            this.maxLevel = this.levels.length - 1;
        }
        else{
            let numPowersOfTwo= Math.ceil(Math.log2(Math.max(fullWidth/defaultTileWidth, fullHeight/defaultTileHeight)));
            let levelsToUse = [...Array(numPowersOfTwo).keys()].filter(v=>v%2==0);//use every other power of two for scales in the "pyramid" 

            this.levels = levelsToUse.map(levelnum=>{
                let scale = Math.pow(2,levelnum)
                let image = images.filter(im=>im.getWidth()*scale >= fullWidth).slice(-1)[0];//smallest image with sufficient resolution
                return {
                    width:fullWidth/scale,
                    height:fullHeight/scale,
                    tileWidth:this.options.tileWidth || image.getTileWidth() || defaultTileWidth,
                    tileHeight:this.options.tileHeight || image.getTileHeight() || defaultTileHeight,
                    image:image,
                    scalefactor:scale*image.getWidth()/fullWidth,
                }
            })
            this.maxLevel = this.levels.length - 1;
        }
        this.levels = this.levels.sort((a,b)=>a.width - b.width);   
        
        
        this._tileWidth  = this.levels[0].tileWidth;
        this._tileHeight = this.levels[0].tileHeight;

        this._setupComplete();
    }

    function DeferredPromise(){
        let self=this;
        let promise=new Promise((resolve,reject)=>{
            self.resolve=resolve;
            self.reject=reject;
        })
        promise.resolve=self.resolve;
        promise.reject=self.reject;
        return promise;
    }
    

})(OpenSeadragon)


