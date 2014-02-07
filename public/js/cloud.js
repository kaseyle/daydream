var words = new Array();
var maxWords = 4;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
      drop: dropListener,
      out: outListner     
    });
    $( "#button" ).button().click(clickListener);
    $( "#button" ).attr('disabled', 'disabled');
}

function dropListener(event, ui) {
	//$( this ).find( "p" ).html( "Dropped!" );
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) == -1 && words.length < maxWords) {
		words.push(word);
		$(ui.draggable).removeClass("outside");
	}
	console.log(words);
	if (words.length > 0) {
		$( "#button" ).removeAttr('disabled');
	}
	if (words.length >= maxWords) {
		$( ".draggable.outside" ).draggable("option", "revert", "valid");
	}
}

function outListner(event, ui) {
	var word = $(ui.draggable).find("p").text();
	$(ui.draggable).addClass("outside");
	if (words.indexOf(word) > -1) {
		words.splice( words.indexOf(word), 1 );
	}
	console.log(words);
	if (words.length == 0) {
		$( "#button" ).attr('disabled', 'disabled');
	}
	if (words.length < maxWords) {
		$( ".draggable" ).draggable("option", "revert", "false");
	}
}

function clickListener(event) {
	event.preventDefault();
	var url = "/yoga?" + "word1=" + words[0];
	for (var i = 1; i < words.length; i++) {
		url += "&word" + (i+1) + "=" + words[i];
	}
	window.location = url;
	//$.post("/yoga", words);
}
