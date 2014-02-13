var urls = [
	"http://media-cache-ec0.pinimg.com/736x/0f/7d/4c/0f7d4c3b12f5e238f7fe1e81b1672ec6.jpg",
	"http://media-cache-ec0.pinimg.com/736x/d9/3b/65/d93b65cd7bbc1105883080c4cee02cd2.jpg",
	"http://media-cache-ak0.pinimg.com/736x/5e/22/58/5e2258d513870ad4f70bc6afaf187c3e.jpg",
	"http://media-cache-ak0.pinimg.com/736x/14/66/20/146620cf546daef13280b6458d377b30.jpg",
	"http://media-cache-ec0.pinimg.com/736x/fb/92/25/fb922576a878ef59b9ba48e9851ebaca.jpg",
	"http://media-cache-ec0.pinimg.com/736x/d7/c5/e6/d7c5e60537f12f978c6bff1b98bd5963.jpg",
	"http://media-cache-cd0.pinimg.com/736x/53/5b/7e/535b7e231920885749b72fdac4d59336.jpg",
	"http://media-cache-ak0.pinimg.com/736x/d6/0c/94/d60c943132000c58b62cef85fe1834eb.jpg",
	"http://media-cache-ec0.pinimg.com/736x/88/01/6a/88016a3e3f2a81fba2ec32d307ca77dd.jpg",
	"http://media-cache-ak0.pinimg.com/736x/53/bd/2f/53bd2f2790122f3f52f4626fe06f0fe9.jpg",
	"http://media-cache-ak0.pinimg.com/736x/c7/10/6a/c7106a5592a75d9c0200ca314dbd9e7a.jpg"
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