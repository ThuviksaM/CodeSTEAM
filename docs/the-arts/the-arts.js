/*--------------------------------------------------------------------------------------*/

/* Helpful, but simple functions */
function setText(id, text) {
  document.getElementById(id).innerHTML = text /* Basically use actual command to set txt of something, and make it simpler */
}

function getValue(id) {
  document.getElementById(id).value; /* Basically use actual function to get value of something, and make it simpler */
}

function getElement(id) {
  document.getElementById(id)
}

/*--------------------------------------------------------------------------------------*/

/* Color Wheels */
function drawWheel(order, canvas) {
  var ctx = canvas.getContext("2d"); /* Set up the canvas */
  var poly_x = [65, 45, 100, 110];
  var poly_y = [55, 100, 100, 75];
  var rgb = ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00', '#00FF80', '#00FFFF', '#0080FF', '#0000FF', '#8000FF', '#FF00FF', '#FF0080'];
  var cymk = ['#00FFFF', '#0080FF', '#0000FF', '#8000FF', '#FF00FF', '#FF0080', '#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00', '#00FF80'];
  var ryb = ['#FE2712', '#FC600A', '#FB9902', '#FCCC1A', '#FEFE33', '#B2D732', '#66B032', '#347C98', '#0247FE', '#4424D6', '#8601AF', '#C21460'];
  var drawn = 0;
  ctx.beginPath();
  ctx.moveTo(poly_x[0], poly_y[0]);
  for(item = 1; item < poly_x.length; item += 1 ){
    if (drawn > 1) {
      ctx.fillStyle = order[drawn];
      ctx.fill();
    } else {
      ctx.lineTo(poly_x[1] , poly_y[1])
      var drawn += 1;
      ctx.fillStyle = order[0];
      ctx.fill();
    }
  }
  ctx.closePath();
  ctx.stroke();
}

/* RGB */
var digitCw = getElement("rbg-canva");

/* CYMK */
var printCw = getElement("cymk-canva");

/* RYB */
var paintCw = getElement("ryb-canva");

/*--------------------------------------------------------------------------------------*/
