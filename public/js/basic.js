
  console.log("INIT");

  doBind();

  if ($('#swipe').length > 0) {
    $('#swipe').on('touchstart', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        doUnbind();
        setTimeout( function() {doBind();}, 1000 );
    });

    $('#swipe').on('mousedown', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        doUnbind();
        setTimeout( function() {doBind();}, 1000 );
    });

    $('#swipe').on('touchend', function(){
        //When the user let's go of the handle, rebind the controls for page turn
        // Put in a slight delay so that the rebind does not happen until after the swipe has been triggered
        setTimeout( function() {doBind();}, 100 );
    });

    $('#swipe').on('mouseup', function(){
        //When the user let's go of the handle, rebind the controls for page turn
        // Put in a slight delay so that the rebind does not happen until after the swipe has been triggered
        setTimeout( function() {doBind();}, 100 );
    });


    $(window).on('mouseup', function(){
        //When the user let's go of the handle, rebind the controls for page turn
        // Put in a slight delay so that the rebind does not happen until after the swipe has been triggered
        setTimeout( function() {doBind();}, 100 );
    });
  }


function doBind() {
  console.log("Binded!");
  console.log($('#forward').text());
  $(window).on("swipeleft", nextPage);
  $(window).on("swiperight", prevPage);
}

function doUnbind() {
    console.log("Unbinded!");
    $(window).off("swipeleft", nextPage);
    $(window).off("swiperight", prevPage);
}

function nextPage() {
  console.log("YO");
  var nextpage = $('#forward').text();
  if (nextpage.charAt(1) != '?') {
    //$.mobile.changePage(nextpage, "slide", false, true);
    window.location = nextpage;
  }
}

function prevPage() {
  //var prevpage = '/';
  var prevpage = $('#back').text();
  if (prevpage.charAt(1) != '?') {
    //$.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
    window.location = prevpage;
  }
}