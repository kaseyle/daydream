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
	var html = "<ol>";
	html += "<li>Stand straight on both feet.</li><br/>";
	html += "<li>Stretch both arms toward the air, as if celebrating.</li></br>";
	html += "<li>Extend strongly and hold the stance for 2 minutes.</li><br/>";
	html += "<li>Feel your courage & confidence growing.</li></br>";
	html += "<li>After two minutes, relax the pose and breathe.</li></ol>";
	$( "#directions" ).html(html);
	setTimeout(function() {nextPrompt(event)}, 1000);
}
function nextPrompt(event) {
	$( "#directions" ).css('visibility','visible');
}