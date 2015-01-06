
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






$( document ).ready(function() {

	if ($('section.content-stripe:first').hasClass("current")){
		$('a.prev').hide();
	}else {
		$('a.prev').show();
	}

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
	        }, function () {
	               $next.addClass('current');
	        });
	  } else if (t === 'prev' && $('.current').prev('section.content-stripe').length > 0) {
	        var $prev = $('.current').prev('.content-stripe');
	        var top = $prev.offset().top;
	        
	        $('.current').removeClass('current');
	      
	        $('body').animate({
	          scrollTop: top     
	        }, function () {
	               $prev.addClass('current');
	        });
	  } 
	});	

	contentStripeAdjust();

}); //end document.ready();


$(window).resize(function() {
	
	contentStripeAdjust();

});
