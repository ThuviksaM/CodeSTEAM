/*--------------------------------------------------------------------------------------*/

/* Helpful, but simple functions */
function setText(id, text) {
  document.getElementById(id).innerHTML = text /* Basically use actual command to set txt of something, and make it simpler */
};

function getValue(id) {
  document.getElementById(id).value; /* Basically use actual function to get value of something, and make it simpler */
};

/*--------------------------------------------------------------------------------------*/

/* RGB Color Wheel */
var canva = document.getElementById("rbg-canva");
var cir = canva.getContext("2d");
cir.beginPath();
cir.arc(100, 75, 50, 0, 2 * Math.PI);
cir.stroke();

/*--------------------------------------------------------------------------------------*/

/* CYMK Color Wheel */
var canva = document.getElementById("cymk-canva");
var cir = canva.getContext("2d");
cir.beginPath();
cir.arc(100, 75, 50, 0, 2 * Math.PI);
cir.stroke();

/*--------------------------------------------------------------------------------------*/

/* RYB Color Wheel */
var canva = document.getElementById("ryb-canva");
var cir = canva.getContext("2d");
cir.beginPath();
cir.arc(100, 75, 50, 0, 2 * Math.PI);
cir.stroke();

/*--------------------------------------------------------------------------------------*/
