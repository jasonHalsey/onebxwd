


$( document ).ready(function() {


jQuery.fn.spectragram.accessData = {
    accessToken: '5901508.b9888bd.82aa912f348e47c6b515c83757b0536c',
    clientID: 'b9888bd34df24f36a40fa65b876c72c9'
};

// $('div.jhalzfeed').spectragram({
//     query: 'jhalz',
//     max: 14,
//     size: 'big',
//     wrapEachWith: '<p></p>'
// });

$('div.jhalzfeed').spectragram('getUserFeed',{
    query: 'jhalz',
    max: 14,
    size: 'big',
    wrapEachWith: '<p></p>'
});

});