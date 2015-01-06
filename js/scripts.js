
//Set height of content-stripe based on height of img 
function contentStripeAdjust() {
  var biggestHeight = "0";
	$(".content-stripe *").each(function(){
	 if ($(this).height() > biggestHeight ) {
	   biggestHeight = $(this).height()
	 }
	});
	$(".content-stripe").height(biggestHeight);
}

// function videoStripeAdjust() {
//   	$(".video-content-stripe").height(videoHeightCon);

// }

function videoStripeHeight() {
	var container = $(".video-content-stripe").height();
	console.log("videocontainer is " + container);
	
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
	
	if ($(this).scrollTop() > 900) {
    	$('section.content-stripe:first').removeClass("current");
    }else if($(this).scrollTop() < 5) {
    	$('section.content-stripe:first').addClass("current")
    }
	removePrev();
	removeNext();
});




$( document ).ready(function() {
	removePrev();
	removeNext();
	

	$('.single-page-nav').singlePageNav({
       // offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: false,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });
//Add class of current to content-strip in viewport
	$('section.content-stripe').inViewport(
	    function(){$(this).addClass("current");},
	    function(){$(this).removeClass("current");}
	);

	$('section.content-stripe').first().addClass("current");

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

	contentStripeAdjust();

}); //end document.ready();


$(window).resize(function() {
	
	contentStripeAdjust();

});
