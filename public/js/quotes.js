var urls = [
	"http://daydreaming.herokuapp.com/images/quotes_1.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_2.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_3.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_4.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_5.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_6.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_7.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_8.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_9.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_10.jpg",
	"http://daydreaming.herokuapp.com/images/quotes_11.jpg"
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