$( document ).ready(function() {
	var biggestHeight = "0";
	$(".content-stripe *").each(function(){
	 if ($(this).height() > biggestHeight ) {
	   biggestHeight = $(this).height()
	 }
	});

	$(".content-stripe").height(biggestHeight);
});


$(window).resize(function() {
	var biggestHeight = "0";
	$(".content-stripe *").each(function(){
	 if ($(this).height() > biggestHeight ) {
	   biggestHeight = $(this).height()
	 }
	});

	$(".content-stripe").height(biggestHeight);

});