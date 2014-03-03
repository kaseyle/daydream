$.event.special.swipe.horizontalDistanceThreshold = 60;

doBind();

addBindings('#swipe');

addBindings('.swipe');

setTimeout( function() {hideArrows();}, 1200 );

function hideArrows() {
  if ( $( ".arrow").length > 0 ) {
    $( ".arrow").css('visibility','hidden');
  }
}

$("#message").slideUp(0);
$("#message").slideDown(1000);

setTimeout( function() {$("#message").slideUp(1000);}, 3000 );

function addBindings(name) {
  if ($(name).length > 0) {
    $(name).on('touchstart', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        doUnbind();
        setTimeout( function() {doBind();}, 1000 );
    });

    $(name).on('mousedown', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        doUnbind();
        setTimeout( function() {doBind();}, 1000 );
    });

    $(name).on('touchend', function(){
        //When the user let's go of the handle, rebind the controls for page turn
        // Put in a slight delay so that the rebind does not happen until after the swipe has been triggered
        setTimeout( function() {doBind();}, 100 );
    });

    $(name).on('mouseup', function(){
        //When the user let's go of the handle, rebind the controls for page turn
        // Put in a slight delay so that the rebind does not happen until after the swipe has been triggered
        setTimeout( function() {doBind();}, 100 );
    });
  }
}

function doBind() {
  $(window).on("swipeleft", nextPage);
  $(window).on("swiperight", prevPage);
}

function doUnbind() {
    $(window).off("swipeleft", nextPage);
    $(window).off("swiperight", prevPage);
}

function nextPage() {
  var first = false;
  var nextpage = $('#forward').text();
  if (nextpage.charAt(1) != '?') {
    //$.mobile.changePage(nextpage, "slide", false, true);
    window.location = nextpage;
  }
}

function prevPage() {
  var prevpage = $('#back').text();
  if (prevpage.charAt(1) != '?') {
    //$.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
    window.location = prevpage;
  }
}