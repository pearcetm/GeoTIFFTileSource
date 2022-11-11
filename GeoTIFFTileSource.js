
(function( $ ){
    /**
     * @class GeoTIFFTileSource
     * @classdesc The GeoTIFFTileSource uses a the GeoTIFF.js library to serve tiles from local file or remote URL. Requires GeoTIFF.js.
     *
     * @memberof OpenSeadragon
     * @extends OpenSeadragon.TileSource
     * @param {File|String|Object} input A File object, url string, or object with fields for tiff and images already defined
     * @param {Object} opts Options object. To do: how to document options fields?
     *                 opts.logLatency: print latency to fetch and process each tile to console.log or the provided function
     *                 opts.tileWidth: tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
     *                 opts.tileHeight:tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
     *                 
     *  //To do: update this documentation to reflect actual class behavior
     * @property {Number} dimensions
     * @property {Number} tileSize
     * @property {Array}  levels
     */
    $.GeoTIFFTileSource=function( input, opts={logLatency:false} ){
        let self=this;
        this.options = opts;
        monkeypatch($);
        this._pool = new GeoTIFF.Pool();
        this.setupComplete = false;
        if(input.tiff && input.images){
            this.promises={
                tiff: Promise.resolve(input.tiff),
                imageCount:Promise.resolve(input.images.length),
                imageHeaders:Promise.resolve(input.images),
                setupComplete:DeferredPromise(),
            }
        }
        else{
            this.promises={
                tiff: input instanceof File ? GeoTIFF.fromBlob(input) : GeoTIFF.fromUrl(input),
                imageCount:DeferredPromise(),
                imageHeaders:DeferredPromise(),
                setupComplete:DeferredPromise(),
            }
        }
        
        if(!input.tiff){
            this.promises.tiff.then(tiff=>{
                self.tiff = tiff;
                return tiff.getImageCount();
            }).then(count=>{
                self.imageCount = count;
                let promises=[...Array(count).keys()].map(index=>self.tiff.getImage(index));
                self.promises.imageCount.resolve(count);
                return Promise.all(promises);
            }).then(images=>{
                self.imageHeaders = images;
                self.promises.imageHeaders.resolve(images);
                
                setupLevels.call(self);

                self.setupComplete = true;
                self.promises.setupComplete.resolve();
            }).catch(error=>{
                console.log('Error with GeoTIFF:',error)
            });

            return;
        }
        this.tiff = input.tiff;
        this.imageCount = input.images.length;
        this.imageHeaders=input.images;

        setupLevels.call(this);

        this.setupComplete = true;
        this.promises.setupComplete.resolve();
    }

    //Static functions

    //To do: add documentation about what this does (i.e. separates likely subimages into separate GeoTIFFTileSource objects)
    $.GeoTIFFTileSource.getAllTileSources=function(input,opts){
        let tiff= input instanceof File ? GeoTIFF.fromBlob(input) : GeoTIFF.fromUrl(input);
        return tiff.then(t=>{tiff=t; return t.getImageCount()})
                   .then(c=>Promise.all([...Array(c).keys()].map(index=>tiff.getImage(index))))
                   .then(images=>{
                        //Separate out by aspect ratio
                        let aspectRatioSets=[...new Set(images.map(i=>(i.getWidth()/i.getHeight()).toFixed(2)))]
                                .map(ar=>images.filter(i=>(i.getWidth()/i.getHeight()).toFixed(2) == ar));
                        //For each aspect ratio, extract sets of decreasing width images as pyramids
                        let imagesets = aspectRatioSets.map(images=>{
                            let sortedByWidth=[...new Set(images.map(im=>im.getWidth()))]
                                .map(w=>images.filter(im=>im.getWidth()==w));
                            let arr=[]
                            sortedByWidth.forEach((s)=>{
                                s.forEach((im,index)=>{
                                    arr[index] = (arr[index]||[]).concat(im);
                                })
                            })
                            return arr;//arr = array of arrays of images; each array of images makes up a tilesource set
                        }).flat();//flatten into an array of tileSource-defining image arrays
                        return imagesets.map(images=> new $.GeoTIFFTileSource({tiff:tiff, images:images},opts));
                    })
    }

    // Extend OpenSeadragon.TileSource, and override/add prototype functions

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
            level = this.levels[levelnum];
            let url = new String(`${levelnum}/${x}_${y}`);
            let abortController = new AbortController();
            let abortSignal = abortController.signal;
            url.promise = regionToDataUrl.call(this,level, x, y, abortSignal);
            url.abortController = abortController;

            return url;
        },

        //To do: documentation necessary? Kind of an internal function...
        downloadTileStart:function(context){
            context.src.promise.then(dataURL=>{
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
            context.src.abortController.abort();
        },
        
    })

    //private functions

    function regionToDataUrl(level, x, y, abortSignal){

        let startTime = this.options.logLatency && Date.now();
        
        let w = level.tileWidth;
        let h = level.tileHeight;
        let window = [x*w, y*h, (x+1)*w, (y+1)*h].map(v=>v * level.scalefactor);//scale the requested tile to layer image coordinates
        
        return level.image.readRGB({
            interleave:true,
            window:window,
            pool:this._pool,
            width:level.tileWidth,
            height:level.tileHeight,
            signal:abortSignal
        }).then(data=>{
            
            // let dataURL = tileToDataUrl(data, level.tileWidth, level.tileHeight, startTime);
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
            // return dataURL;
        })
    }

    function setupLevels(){
        let images = this.imageHeaders.sort((a,b)=>b.getWidth() - a.getWidth());
        let tiledimages = images.filter(i=>i.isTiled);
        

        //default to 256x256 tiles, but defer to options passed in
        let defaultTileWidth=defaultTileHeight=256;

        //the first image is the highest-resolution view (at least, with the largest width)
        let fullWidth =images[0].getWidth();
        let fullHeight=images[0].getHeight();

        let options;

        //a valid tiled pyramid has strictly monotonic size for levels; all levels must be tiled
        let pyramid=tiledimages.reduce((acc,im)=>{
            if(acc.width!==-1){
                acc.valid = acc.valid && im.getWidth()<acc.width;//ensure width monotonically decreases
            }
            acc.width=im.getWidth();
            return acc;
        },{valid:tiledimages.length>0 && tiledimages.length==images.length, width:-1});

        if(pyramid.valid){
            let levelsToUse = images;
            options={
                width:fullWidth,
                height:fullHeight,
                tileOverlap: 0,
                minLevel: 0,
                maxLevel: levelsToUse.length-1,
                levels:images.map((image)=>{
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
            }
        }
        else{
            let numPowersOfTwo= Math.ceil(Math.log2(Math.max(fullWidth/defaultTileWidth, fullHeight/defaultTileHeight)));
            let levelsToUse = [...Array(numPowersOfTwo).keys()].filter(v=>v%2==0);//use every other power of two for scales in the "pyramid" 

            options={
                width:fullWidth,
                height:fullHeight,
                tileOverlap: 0,
                minLevel: 0,
                maxLevel: levelsToUse.length-1,
                levels: levelsToUse.map(levelnum=>{
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
            }
        }
        options.levels = options.levels.sort((a,b)=>a.width - b.width);        

        this.levels = options.levels;
        
        $.TileSource.apply( this, [ options ] );

        this.setupComplete = true;
        this.promises.setupComplete.resolve();
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
    
    
    // function tileToDataUrl(data,width,height,startTime){
    //     let canvas = document.createElement('canvas');
    //     canvas.width = width;
    //     canvas.height = height;
    //     let ctx = canvas.getContext('2d');

    //     let arr = new Uint8ClampedArray(4*width*height);
    //     let rgb = new Uint8ClampedArray(data);
    //     let i, a;
    //     for(i=0, a=0;i<rgb.length; i+=3, a+=4){
    //         arr[a]=rgb[i];
    //         arr[a+1]=rgb[i+1];
    //         arr[a+2]=rgb[i+2];
    //         arr[a+3]=255;
    //     }
    //     ctx.putImageData(new ImageData(arr,width,height), 0, 0);

    //     this.logLatency && (typeof this.logLatency=='function' ? this.logLatency : console.log)('Tile latency (ms):', Date.now() - startTime)
    //     return canvas.toDataURL('image/jpeg',0.8);
    // }

    function monkeypatch($){
        if(!$.version || $.version.major<2 || ($.version.major==2 && $.version.minor<3) ){
            console.error('This version of OpenSeadragon is too old to support this monkey patch')
            return;
        }
        if($.ImageJob){
            //version > 3.1; the new mechanism for this is implemented in the prototype
            return;
        }
        function ImageJob (options) {

            $.extend(true, this, {
                timeout: $.DEFAULT_SETTINGS.timeout,
                jobId: null
            }, options);
        
            /**
             * Image object which will contain downloaded image.
             * @member {Image} image
             * @memberof OpenSeadragon.ImageJob#
             */
            this.image = null;
        }
        
        ImageJob.prototype = {
            errorMsg: null,
        
            /**
             * Starts the image job.
             * @method
             */
            start: function(){
                var self = this;
                var selfAbort = this.abort;
        
                this.image = new Image();
        
                this.image.onload = function(){
                    self.finish(true);
                };
                this.image.onabort = this.image.onerror = function() {
                    self.errorMsg = "Image load aborted";
                    self.finish(false);
                };
        
                this.jobId = window.setTimeout(function(){
                    self.errorMsg = "Image load exceeded timeout (" + self.timeout + " ms)";
                    self.finish(false);
                }, this.timeout);
        
                // Load the tile with an AJAX request if the loadWithAjax option is
                // set. Otherwise load the image by setting the source proprety of the image object.
                if (this.loadWithAjax) {
                    this.request = $.makeAjaxRequest({
                        url: this.src,
                        withCredentials: this.ajaxWithCredentials,
                        headers: this.ajaxHeaders,
                        responseType: "arraybuffer",
                        postData: this.postData,
                        success: function(request) {
                            var blb;
                            // Make the raw data into a blob.
                            // BlobBuilder fallback adapted from
                            // http://stackoverflow.com/questions/15293694/blob-constructor-browser-compatibility
                            try {
                                blb = new window.Blob([request.response]);
                            } catch (e) {
                                var BlobBuilder = (
                                    window.BlobBuilder ||
                                    window.WebKitBlobBuilder ||
                                    window.MozBlobBuilder ||
                                    window.MSBlobBuilder
                                );
                                if (e.name === 'TypeError' && BlobBuilder) {
                                    var bb = new BlobBuilder();
                                    bb.append(request.response);
                                    blb = bb.getBlob();
                                }
                            }
                            // If the blob is empty for some reason consider the image load a failure.
                            if (blb.size === 0) {
                                self.errorMsg = "Empty image response.";
                                self.finish(false);
                            }
                            // Create a URL for the blob data and make it the source of the image object.
                            // This will still trigger Image.onload to indicate a successful tile load.
                            var url = (window.URL || window.webkitURL).createObjectURL(blb);
                            self.image.src = url;
                        },
                        error: function(request) {
                            self.errorMsg = "Image load aborted - XHR error: Ajax returned " + request.status;
                            self.finish(false);
                        }
                    });
        
                    // Provide a function to properly abort the request.
                    this.abort = function() {
                        self.request.abort();
        
                        // Call the existing abort function if available
                        if (typeof selfAbort === "function") {
                            selfAbort();
                        }
                    };
                } else {
                    if (this.crossOriginPolicy !== false) {
                        this.image.crossOrigin = this.crossOriginPolicy;
                    }
                    if(this.src.promise){
                        this.src.promise.then(src=>this.image.src=src);
                    }
                    else {
                        this.image.src = this.src;
                    }
                }
            },
        
            finish: function(successful) {
                this.image.onload = this.image.onerror = this.image.onabort = null;
                if (!successful) {
                    this.image = null;
                }
        
                if (this.jobId) {
                    window.clearTimeout(this.jobId);
                }
        
                this.callback(this);
            }
        
        };
        function completeJob(loader, job, callback) {
            var nextJob;
        
            loader.jobsInProgress--;
        
            if ((!loader.jobLimit || loader.jobsInProgress < loader.jobLimit) && loader.jobQueue.length > 0) {
                nextJob = loader.jobQueue.shift();
                nextJob.start();
                loader.jobsInProgress++;
            }
        
            callback(job.image, job.errorMsg, job.request);
        }
        $.ImageLoader.prototype.addJob = function(options) {
            var _this = this,
                complete = function(job) {
                    completeJob(_this, job, options.callback);
                },
                jobOptions = {
                    src: options.src,
                    loadWithAjax: options.loadWithAjax,
                    ajaxHeaders: options.loadWithAjax ? options.ajaxHeaders : null,
                    crossOriginPolicy: options.crossOriginPolicy,
                    ajaxWithCredentials: options.ajaxWithCredentials,
                    postData: options.postData,
                    callback: complete,
                    abort: options.abort,
                    timeout: this.timeout
                },
                newJob = new ImageJob(jobOptions);
    
            if ( !this.jobLimit || this.jobsInProgress < this.jobLimit ) {
                newJob.start();
                this.jobsInProgress++;
            }
            else {
                this.jobQueue.push( newJob );
            }
        }
        $.Tile.prototype._hasTransparencyChannel = function() {
            return false;
        }
        
    }

})(OpenSeadragon)


