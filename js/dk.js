window.svgeezy=function(){return{init:function(t,i){this.avoid=t||false;this.filetype=i||"png";this.svgSupport=this.supportsSvg();if(!this.svgSupport){this.images=document.getElementsByTagName("img");this.imgL=this.images.length;this.fallbacks()}},fallbacks:function(){while(this.imgL--){if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var t=this.images[this.imgL].getAttribute("src");if(t===null){continue}if(this.getFileExt(t)=="svg"){var i=t.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",i)}}}},getFileExt:function(t){var i=t.split(".").pop();if(i.indexOf("?")!==-1){i=i.split("?")[0]}return i},hasClass:function(t,i){return(" "+t.className+" ").indexOf(" "+i+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();

$(document).ready(function()
{
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
	var is_ie = !!top.execScript;
	var is_ie11 = navigator.userAgent.indexOf("Trident") > -1;

	if($("div").is("#serts"))
	{
	 	$("#serts").jCarouselLite({
	        btnNext: ".next",
	        btnPrev: ".prev",
	        visible: 5
	    });
	}

    if($("div").is("#slider"))
    {
        if($("div").is(".h650") || device.mobile() || device.tablet())
        {
            $("#slider").glide({animation: 'fade', autoplay: 10000});
        }
        else
        {
            $("#slider").glide(
            {
                autoplay: 10000,
                afterInit: function()
                {
                    var img = $("#slider ul li").eq(1).data("img");
                    if(!is_safari && !is_ie && !is_ie11)
		    		{
						$("#slider ul li").hide();
						$('#slider').parallax({imageSrc:img});
		    		}
		    		else {
		    			if(is_chrome)
		    			{
							$("#slider ul li").hide();
							$('#slider').parallax({imageSrc:img});
		    			}
						else setTimeout(function(){$(".parallax-mirror").remove();}, 500);
		    		}
                },
                beforeTransition: function()
                {
                    if(!is_safari && !is_ie && !is_ie11)
		    		{
						$(".parallax-mirror").hide();
                    	$("#slider ul li").show();
		    		}
		    		else {
		    			if(is_chrome)
		    			{
							$(".parallax-mirror").hide();
                    		$("#slider ul li").show();
		    			}
						else setTimeout(function(){$(".parallax-mirror").remove();}, 500);
		    		}
                },
                afterTransition: function()
                {
		    		if(!is_safari && !is_ie && !is_ie11)
		    		{
                    	$("#slider ul li").hide();
                    	var i = $(".slider__nav-item--current").index();
                    	var img = $("#slider ul li").eq(i+1).data("img");
		    			$(".parallax-mirror img").attr("src",img).parent("div").show();
		    		}
		    		else {
		    			if(is_chrome)
		    			{
	                    	$("#slider ul li").hide();
	                    	var i = $(".slider__nav-item--current").index();
	                    	var img = $("#slider ul li").eq(i+1).data("img");
			    			$(".parallax-mirror img").attr("src",img).parent("div").show();
		    			}
						else setTimeout(function(){$(".parallax-mirror").remove();}, 500);
		    		}
                }
            });
        }
    }

    if($("div").is("#fullpage") && !$("ul").is("#nav"))
    {
        $("#move-arrow").click(function(){$.fn.fullpage.moveSectionDown();});
        var total = $("#fullpage .section").length;
        $("#fullpage").fullpage({
            'resize ': true,
            'navigation': true,
            'navigationPosition': 'right',
            'loopBottom': true,
	    'css3': (device.mobile()||device.tablet()||is_safari)?false:true,
            'controlArrows': true,
            'afterLoad': function(anchorLink, index)
            {
                $("#fp-nav ul li").eq(index-1).trigger("click");
                if(index<total) $("#footer").fadeOut(200, function(){$("#move-arrow").fadeIn(200);});
                else $("#move-arrow").fadeOut(200, function(){$("#footer").fadeIn(200);});
            },
            afterRender: function()
            {
                $("#fp-nav").sly({
                    horizontal: false,
                    itemNav: 'forceCentered',
                    smart: 1,
                    activateMiddle: 1,
                    activateOn: 'click',
                    mouseDragging: 1,
                    touchDragging: 1,
                    releaseSwing: 1,
                    startAt: 0,
                    scrollBar: null,
                    scrollBy: 1,
                    speed: 300,
                    elasticBounds: 1,
                    easing: 'easeOutExpo',
                    dragHandle: 1,
                    dynamicHandle: false,
                    clickBar: false
                });
            },
        });
    }

	svgeezy.init(false, 'png');

    $("#gallery img").on("click", function()
    {
        var bg = $("#gallery-bg");
        var im = $(this).attr("data-src");
        bg.animate({opacity:0}, 400, "linear", function()
        {
            bg.css("background-Image","url('"+im+"')").animate({opacity:1}, 400);
        });
    });

	var ua = navigator.userAgent, 
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
	
	$(".menu").bind(event, function()
	{
        if($(this).hasClass("open"))
        {
        	$("#menu-panel").fadeOut(400);
            $("#menu").animate({'right':'-25%'},600);
            $(this).removeClass("open");
        }
        else
        {
            $("#menu-panel").fadeIn(400);
            $("#menu").animate({'right':0},600);
            $(this).addClass("open");
        }
        return false;
    });

    $(".goto").bind(event, function()
    {
        //event.preventDefault();
        $("body,html").animate({"scrollTop":$("#footer").offset().top},800);
		return false;
    });

    if($("div").is(".about-quote"))
    {
		if(!is_safari && !is_ie && !is_ie11) $(".about-quote").parallax();
		else 
		{
			if(is_chrome) $(".about-quote").parallax();
			else
			{
				setTimeout(function(){$(".parallax-mirror").remove();}, 500);
				$(".about-quote").css("background","url("+$(".about-quote").data("image-src")+")");
			}
		}
    }

    if($("ul").is("#news-list"))
    {
        $(".lazy").infinitescroll({
            navSelector: '#pages',
            nextSelector: '#pages a:first',
            itemSelector: '.item',
            extraScrollPx: 500,
            animate: false,
            maxPage: $(".lazy").attr("rel"),
            loading: {
                finishedMsg:'',
                img: '/i/loading.gif',
                msg: null,
                msgText: ''
            }
        });
    }

    if($("div").is("#serts"))
    {
        $("a[rel=lightbox]").nivoLightbox();
    }
});

if($("div").is("#about-overlay"))
{
    $(window).scroll(function()
    {
		var y = $(window).scrollTop();
		var top = $(".about-quote").offset().top-74;

        if(y>top && y<1400)
        {
            $(".logo").removeClass("black");
            $("ul.menu").addClass("white");
        }
        else
        {
            $(".logo").addClass("black");
            $("ul.menu").removeClass("white");
        }
    });
}

if($("div").is("#project-detail"))
{
    $(window).scroll(function()
    {
		var y = $(window).scrollTop();
		var top = $("#project-detail").offset().top-74;
		var pt = $("#other").offset().top-74;

        if(y>top && y<pt)
        {
            $(".logo").addClass("black");
            $("ul.menu").removeClass("white");
        }
        else
        {
            $(".logo").removeClass("black");
            $("ul.menu").addClass("white");
        }
    });
}

if($("ul").is("#service-detail"))
{
    $(window).scroll(function()
    {
		var y = $(window).scrollTop();
		var h = $("#service-detail").height();
		var pt = $("#slider").offset().top-74;
		var top = $("#service-detail").offset().top-74;

        if(y>top && y<top+h || y>pt)
        {
			$(".logo").removeClass("black");
			$("ul.menu").addClass("white");
        }
        else
        {
			$(".logo").addClass("black");
			$("ul.menu").removeClass("white");
        }
    });
}

if($("div").is("#partnership"))
{
    $(window).scroll(function()
    {
       var y = $(window).scrollTop();
       var top = $("#partnership").offset().top-74;

        if(y>top)
        {
            $(".logo").removeClass("black");
            $("ul.menu").addClass("white");
        }
        else
        {
            $(".logo").addClass("black");
            $("ul.menu").removeClass("white");
        }
    });
}


/*if($("ul").is(".services-icons"))
{
	$(window).resize(function()
	{
		if(device.portrait())
		{
			$("#footer").css({position:'fixed', bottom:0});
		}
		else $("#footer").css({position:'relative', bottom:0});
	});

	if(device.portrait())
	{
		$("#footer").css({position:'fixed', bottom:0});
	}
	else $("#footer").css({position:'relative', bottom:0});
}*/

/*if($("ul").is(".services-icons") && !device.tablet())
{
    $(window).scroll(function()
    {
        var y = $(window).scrollTop();
        if(y>545)
        {
            $(".logo").removeClass("black");
            $("ul.menu-button").addClass("white");
        }
        else
        {
	    $(".logo").addClass("black");
            $("ul.menu-button").removeClass("white");
        }
    });
}*/