  var canvas = null; //canvas object
  var context = null; //canvas's context object
  var clearBtn = null; //clear button object

  /*boolean var to check if the touchstart event
  is caused and then record the initial co-ordinate*/
  var buttonDown = false;

  //onLoad event register
  window.addEventListener('load', initApp, false);

  function initApp() {
    setTimeout(function() { window.scrollTo(0, 1); }, 10); //hide the address bar of the browser.
    canvas = document.getElementById('paintBox');
    clearBtn = document.getElementById('clearBtn');

    setCanvasDmiension();
    initializeEvents();

    context = canvas.getContext('2d'); //get the 2D drawing context of the canvas
}

function setCanvasDmiension() {
  //canvas.width = 300; //window.innerWidth;
  canvas.height = window.innerHeight; //setting the height of the canvas
}

function initializeEvents() {
  canvas.addEventListener('touchstart', startPaint, false);
  canvas.addEventListener('touchmove', continuePaint, false);
  canvas.addEventListener('touchend', stopPaint, false);

  clearBtn.addEventListener('touchend', clearCanvas,false);
}

function clearCanvas() {
  context.clearRect(0,0,canvas.width,canvas.height);
}

function startPaint(evt) {
  if(!buttonDown)
  {
    context.beginPath();
    context.moveTo(evt.touches[0].pageX, evt.touches[0].pageY);
    buttonDown = true;
  }
  evt.preventDefault();
}

function continuePaint(evt) {
  if(buttonDown)
  {
    context.lineTo(evt.touches[0].pageX,evt.touches[0].pageY);
    context.stroke();
  }
}

function stopPaint() {
  buttonDown = false;
}