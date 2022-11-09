
(function( $ ){
    /**
     * @class GeoTIFFTileSource
     * @classdesc The GeoTIFFTileSource uses a the GeoTIFF.js library to serve tiles from local file or remote URL. Requires GeoTIFF.js.
     *
     * @memberof OpenSeadragon
     * @extends OpenSeadragon.TileSource
     * @param {File|String} input A File object or url string pointing to a tiff file
     * @param {Object} opts Options object. set opts.logLatency to a truthy value to write tile fetching times to the console.
     * 
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
        this.promises={
            tiff: input instanceof File ? GeoTIFF.fromBlob(input) : GeoTIFF.fromUrl(input),
            imageCount:DeferredPromise(),
            imageHeaders:DeferredPromise(),
            setupComplete:DeferredPromise(),
        }
        this.promises.tiff.then(tiff=>{
            console.log('Tiff Info',tiff)
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

            let tiledimages = images.filter(image=>image.isTiled);
            let nontiledimages = images.filter(image=>!image.isTiled);
            let options = tiledimages.length > 0 ?  tiledImageOptions(tiledimages) : nonTiledImageOptions(nontiledimages);

            this.levels = options.levels;
            $.TileSource.apply( this, [ options ] );

            this.setupComplete = true;
            this.promises.setupComplete.resolve();
        }).catch(error=>{
            console.log('Error with GeoTIFF:',error)
        })
    }
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
    
        makeOptionsObject: function(images){
            
            return options;
        },
        
        /**
         * Implement function here instead of as custom tile source in client code
         * @function
         * @param {Number} level
         * @param {Number} x
         * @param {Number} y
         * @throws {Error}
         */
        getTileUrl: function ( level, x, y ) {
            // return dataURL from reading tile data from the GeoTIFF object as String object (for cache key) with attached promise 
            level = this.levels[level];
            let url = new String(`${level.level}/${x}_${y}`);
            let startTime = this.options.logLatency ? Date.now() : null;
            let abortController = new AbortController();
            if(level._tiffPage){
                //direct tile access
                url.promise = level._tiffPage.getTileOrStrip(x,y,0,this._pool,abortController.signal)
                    .then(d=>RGBToDataUrl(d.data, level.tileWidth, level.tileHeight,startTime))
            }
            else{
                //let GeoTIFF.js do the reading
                let bbox = [x*level.tileWidth, y*level.tileHeight, x*level.tileWidth+level.tileWidth, y*level.tileHeight+level.tileHeight]
                url.promise = regionToDataUrl(this.tiff, bbox, this.options.tileWidth, this.options.tileHeight, this._pool, abortController.signal, startTime);
            }
            url.abortController = abortController;
            return url;
        },

        downloadTileStart(context){
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
        downloadTileAbort(context){
            context.src.abortController.abort();
        }
    })

    function tiledImageOptions(tiledimages){
        //use the tiled images natively, and 
        let options = {}
        options.levels = tiledimages.map((image,level)=>{
            return {
                width:image.getWidth(),
                height:image.getHeight(),
                tileWidth:image.getTileWidth(),
                tileHeight:image.getTileHeight(),
                level:level,
                _tiffPage:image,
            }
            
        }).sort((a,b)=>a.width - b.width)
        
        options.width = options.levels[options.levels.length-1].width;
        options.height = options.levels[options.levels.length-1].height;
        $.extend( true, options, {
            width: options.width,
            height: options.height,
            tileOverlap: 0,//To do: is this always zero? If not, what field in the fileDirectory holds it?
            minLevel: 0,
            maxLevel: options.levels.length > 0 ? options.levels.length - 1 : 0
        } );
        return options;
    }
    function nonTiledImageOptions(nontiledimages){
        //default to 256x256 tiles
        let tileWidth=256, tileHeight=256;
        let fullWidth =nontiledimages[0].getWidth();
        let fullHeight=nontiledimages[0].getHeight();
        let numLevels = Math.floor(Math.log2(Math.max(fullWidth/tileWidth, fullHeight/tileHeight)));
        //assume the first image is the full-resolution view
        let options={
            width:fullWidth,
            height:fullHeight,
            tileWidth:tileWidth,
            tileHeight:tileHeight,
            tileOverlap: 0,
            minLevel: 0,
            maxLevel: numLevels-1,
            levels: [...Array(numLevels).keys()].map(levelnum=>{
                let scale = Math.pow(2,levelnum)
                return {
                    //width:fullWidth/scale,
                    //height:fullHeight/scale,
                    tileWidth:tileWidth*scale,
                    tileHeight:tileHeight*scale,
                    level:levelnum,
                }
            })
        }
        return options;
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
    
    function regionToDataUrl(tiff,bbox, width, height, decoderPool, abortSignal, startTime){
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        return tiff.readRasters({window:bbox, pool:decoderPool, width:width, height:height, signal:abortSignal}).then(data=>{
            let arr = new Uint8ClampedArray(4*data[0].length);
            let i, a;
            for(i=0, a=0;i<data[0].length; i++, a+=4){
                arr[a]=data[0][i];
                arr[a+1]=data[1][i];
                arr[a+2]=data[2][i];
                arr[a+3]=255;
            }
            ctx.putImageData(new ImageData(arr,data.width,data.height), 0, 0);
            // console.log('Decoded tile',bbox)
            startTime && console.log('Resolved in (ms):', Date.now() - startTime)
        
            return canvas.toDataURL('image/jpeg',0.7);
        })
    }
    function RGBToDataUrl(rgb, width, height,startTime){
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');

        let arr = new Uint8ClampedArray(4*width*height);
        let data = new Uint8ClampedArray(rgb);
        let i, a;
        for(i=0, a=0;i<data.length; i+=3, a+=4){
            arr[a]=data[i];
            arr[a+1]=data[i+1];
            arr[a+2]=data[i+2];
            arr[a+3]=255;
        }
        ctx.putImageData(new ImageData(arr,width,height), 0, 0);

        startTime && console.log('Resolved in (ms):', Date.now() - startTime)
        return canvas.toDataURL('image/jpeg',0.7);
    }

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


