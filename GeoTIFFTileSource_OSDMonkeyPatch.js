function monkeypatch($){
    if(!$.version || $.version.major<2 || ($.version.major==2 && $.version.minor<3) ){
        console.error('This version of OpenSeadragon is too old to support this monkey patch')
        return;
    }
    if($.ImageJob){
        //version > 3.1; the new mechanism for this is implemented in the prototype; no need to monkey patch
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
                if(this.src.fetch){
                    this.src.fetch().then(src=>this.image.src=src);
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