
//Set height of content-stripe based on height of img 
function contentStripeAdjust() {
  var biggestHeight = "0";
	$(".content-container *").each(function(){
	 if ($(this).height() > biggestHeight ) {
	   biggestHeight = $(this).height()
	 }
	});
	$(".content-container").height(biggestHeight);
}


function videoStripeHeight() {
	var container = $(".header-video").height();
	$(".video-content-stripe").height(container);	
}


function removePrev() {
	if ($('section.content-stripe:first').hasClass("current")){
		$('a.prev').addClass("light");
	}else if ($('section.content-stripe:not(:first)').hasClass("current")){
		$('a.prev').removeClass("light");
	}
}


function removeNext() {
	if ($('section.content-stripe:last').hasClass("current")){
		$('a.next').addClass("light");
	}else if ($('section.content-stripe:not(:last)').hasClass("current")){
		$('a.next').removeClass("light");
	}
}



$( window ).scroll(function() {
	
	if ($(this).scrollTop() > 400) {
    	$('section.content-stripe:first').removeClass("current");
    }else if($(this).scrollTop() < 5) {
    	$('section.content-stripe:first').addClass("current")
    }
	// removePrev();
	// removeNext();
});




$( document ).ready(function() {
	// removePrev();
	// removeNext();


	//look book slider init
	$('.lookbook').bxSlider({
	  auto: true,
	  autoControls: false,
	  mode: 'fade'
	});


	$('.single-page-nav').singlePageNav({
       

       offset: $('.single-page-nav').outerHeight(),
       

        filter: ':not(.external)',
        updateHash: false,
        beforeStart: function() {
            // console.log('begin scrolling');
        },
        onComplete: function() {
            // console.log('done scrolling');
        }
    });
//Add class of current to content-strip in viewport
	$('section.content-stripe').inViewport(
	    function(){$(this).addClass("current");},
	    function(){$(this).removeClass("current");}
	);

	// $('section.content-stripe').first().addClass("current");
	$('section.content-stripe:first').addClass("current");

	$('a.display').on('click', function(e) {
	    e.preventDefault();

	      var t = $(this).text(),
	      that = $(this);

	    if (t === 'next' && $('.current').next('section.content-stripe').length > 0) {
	        var $next = $('.current').next('.content-stripe');
	        var top = $next.offset().top;
	        
	        $('.current').removeClass('current');
	      
	        $('body').animate({
	          scrollTop: top     
	        }, {duration: 1500}, function () {
	               $next.addClass('current');
	        });
	  } else if (t === 'prev' && $('.current').prev('section.content-stripe').length > 0) {
	        var $prev = $('.current').prev('.content-stripe');
	        var top = $prev.offset().top;
	        
	        $('.current').removeClass('current');
	      
	        $('body').animate({
	          scrollTop: top     
	        }, {duration: 1500}, function () {
	               $prev.addClass('current');
	        });
	  } 
	});	

	HeaderVideo.init({
      container: $('.header-video'),
      header: $('.header-video--media'),
      videoTrigger: $("#video-trigger"),
      autoPlayVideo: false
    });  

	contentStripeAdjust();
	// videoStripeHeight();
	$(window).trigger('resize');
}); //end document.ready();


$(window).resize(function() {
	contentStripeAdjust();

});

//sticky navigation
$(window).scroll(function() {
		
	if (Modernizr.mq('only screen and (min-width: 1200px)')) {
	    
	    if ($(this).scrollTop() > 1)  {  
        $('header').addClass("sticky");
        $('#main').addClass("sticky");
        $('li.nav-link > a').addClass("sticky");
        console.log('Its\'s sticky');
	    }
	    else{
	        $('header').removeClass("sticky");
	        $('#main').removeClass("sticky");
	        $('li.nav-link > a').removeClass("sticky");
	    }
	}
});

//navigation functionality
$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

