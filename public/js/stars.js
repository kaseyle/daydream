var urls = [
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/aries20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/taurus20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/gemini20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/cancer20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/leo20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/virgo20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/libra20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/scorpio20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/sagittarius20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/capricorn20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/aquarius20.jpg";
	"http://www.astrologyweekly.com/zodiac-pictures/constellation/pisces20.jpg";
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