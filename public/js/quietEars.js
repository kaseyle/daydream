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
	$( event.target ).hide();
	$( "#directions" ).css('visibility','hidden');
	$( "#directions" ).addClass("swipe");
	var html = "<ul>";
	html += "<li>Place your hands behind your head. Make sure they are relaxed.</li><br/>";
	html += "<li>Place your thumbs in your ears so that you close the ear canal.</li></br>";
	html += "<li>You will hear a high-pitched rushing sound. This is normal</li><br/>";
	html += "<li>Listen to this sound for 10-15 minutes.</li></ul>";
	html += "<li>Then put your arms at your sides and relax.</li></ul>"
	$( "#directions" ).html(html);
	setTimeout(function() {nextPrompt(event)}, 1000);
}

function nextPrompt(event) {
	$( "#directions" ).css('visibility','visible');
}