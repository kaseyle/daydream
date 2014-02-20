var urls = [
	"http://daydreaming.herokuapp.com/images/stars_1.jpg",
	"http://daydreaming.herokuapp.com/images/stars_2.jpg",
	"http://daydreaming.herokuapp.com/images/stars_3.jpg",
	"http://daydreaming.herokuapp.com/images/stars_4.jpg",
	"http://daydreaming.herokuapp.com/images/stars_5.jpg",
	"http://daydreaming.herokuapp.com/images/stars_6.jpg",
	"http://daydreaming.herokuapp.com/images/stars_7.jpg",
	"http://daydreaming.herokuapp.com/images/stars_8.jpg",
	"http://daydreaming.herokuapp.com/images/stars_9.jpg",
	"http://daydreaming.herokuapp.com/images/stars_10.jpg",
	"http://daydreaming.herokuapp.com/images/stars_11.jpg",
	"http://daydreaming.herokuapp.com/images/stars_12.jpg"
]

var index = 1;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $( "#swipe" ).on( "swipe", swipeHandler );
   
    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler( event ){
    	event.preventDefault();
    	swipe(event);
    }
}

function swipe(event) {
	$( event.target ).addClass( "swipe" );
	$( "#image" ).css('visibility','hidden');
	$( "#image" ).attr('src', urls[index]);
	index = index + 1;
	setTimeout(function() {nextUrl(event)}, 1000);
}

function nextUrl(event) {
	$( "#image" ).css('visibility','visible');
	$( event.target ).removeClass( "swipe" );
	if (index >= urls.length) {
		index = 0;
	}
}