var win = $('#root');


$.fn.isOnScreen = function (cbTrue, cbFalse) {
    var viewport = {
        top : win.scrollTop()
    };
    viewport.bottom = viewport.top + window.innerHeight;

    var bounds = this.offset();
    bounds.bottom = bounds.top + this.outerHeight();

    var isOnScreen = (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    return isOnScreen
      ? cbTrue && cbTrue(viewport, bounds)
      : cbFalse && cbFalse(viewport, bounds);
};

var CanvasHelper = function(){
    var canvases = [];

    this.root = $('#root');
    this.scrollPos = this.root.scrollTop();
    
    this.attatch = function({canvas, update}){
        canvases.push({
            canvas,
            update,
            looping: false
        });
    }

    var requestFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    this.update = function(){
        canvases.map(({canvas, update, looping}, i) => {
            if(looping) update();

            if(this.root.scrollTop() != this.scrollTop){
                $(canvas).isOnScreen(function(){ // is on screen
                    if(!looping) canvases[i].looping = true;
                }, function(){ // isn't on screen
                    if(looping) canvases[i].looping = false;
                });
            }
        });

        let u = this.update.bind(this);
        requestFrame(u);
    }

    this.update();
}

var canvasHelper = new CanvasHelper();