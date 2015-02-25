


$( document ).ready(function() {


	jQuery.fn.spectragram.accessData = {
	    accessToken: '1517312917.78d68d2.4bafa9ebfcf74d7b8d46d3ab9c417515',
	    clientID: '78d68d2abad5427787753951f5e11376'
	};

	$('ul.jhalzfeed').spectragram('getUserFeed',{
	    query: 'onebxwd',
	    max: 32,
	    size: 'big',
	    wrapEachWith: '<li class="instagram_image"></li>'
	});

});