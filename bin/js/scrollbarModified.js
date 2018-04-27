(function(){
    window.requestFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    var scrollbar = $('#scrollbar'),
        thumb = $('#scrollbar .bar'),
        sections = $('#scrollbar .sections'),
        root = $('#root'),
        app = $('#app'),
        scrollTop = 0,
        ratio,
        scrollRatio,
        focusPoints = [],
        inFocus;

    thumb.height(($(window).height() / $(document).height()) * $(scrollbar).height());

    function createSections(){
        var section,
            relativeSection;
        $('div.section').each(function(){
            if($(this).attr('role')){
                section = $('<div></div>').html($(this).attr('role')).addClass('scrollSection');

                relativeSection = this;
                
                section.click(function(){
                    $(root).animate({
                        scrollTop: document.getElementById($(this).html().toLowerCase()).offsetTop
                    }, 500);
                });

                sections.append(section);
            }
        });
    }

    function moveSections(){
        var sections = document.getElementsByClassName('scrollSection'),
            s,
            rs;
        focusPoints = [];
        for(var i = 0; i < sections.length; i++){
            s = sections[i];
            rs = document.getElementById(s.innerHTML.toLowerCase());
            $(s).css({ top: ratio * scrollRatio * rs.offsetTop, lineHeight: rs.offsetHeight * ratio * scrollRatio+'px'});
            focusPoints.push([rs.offsetTop, rs.offsetHeight, rs, s]);
        }
    }

    function distanceFromScroll(ey){
        var dy = ey - (root.scrollTop() + ($(window).height()/2));

        return Math.sqrt(dy * dy);
    }

    function checkFocus(){
        var highest = Infinity,
            current;
        for(var i = 0; i < focusPoints.length; i++){
            var s = focusPoints[i];
            $(s).removeClass('focused');
            
            var d = distanceFromScroll(s[0]+(s[1]/2));
            
            if(highest >= d){
                current = s;
                highest = d;
            }
        }
    }

    function updateScroll(){
        requestFrame(updateScroll);
        if(root.scrollTop() > scrollTop) {
            thumb.css({top: ratio * scrollRatio * root.scrollTop() });
            checkFocus();
        }
    }

    function updateRatio(){
        ratio = $(window).height() / $(app).height();
        scrollRatio = $(scrollbar).height() / $(window).height();
    }

    function handleScale(){
        thumb.height(ratio * $(scrollbar).height());
        thumb.css({ top: ratio * scrollRatio * root.scrollTop() });
    }

    createSections();
    updateRatio();
    handleScale();
    updateScroll();
    moveSections();
    checkFocus();

    $(window).resize(function(){
        updateRatio();
        handleScale();
        moveSections();
        checkFocus();
    });


})();
