/*--------------------------------------------------------------------------------------*/

/* Helpful, but simple functions */
function setText(id, text) {
  document.getElementById(id).innerHTML = text /* Basically use the actual command to set the text of something, and make it simpler */
};

function getValue(id) {
  document.getElementById(id).value; /* Basically use the actual function to get the value of somthing and make it simpler */
};


/*--------------------------------------------------------------------------------------*/

/* Function for the calculator */
function solveForAns() {
  var outAns = null;
  while (click "reload" == False) { /* While the reload button isn't clicked, check which num or symbol button is clicked and add that symbol or num as a string to the outAns variable*/ 
    if (id "btn-1" == True) {
        var outAns = outAns+"1";
    } else if (id "btn-2" == True) {
        var outAns = outAns+"2";
    } else if (id "btn-3" == True) {
        var outAns = outAns+"3";
    } else if (id "btn-4" == True) {
        var outAns = outAns+"4";
    } else if (id "btn-5" == True) {
        var outAns = outAns+"5";
    } else if (id "btn-6" == True) {
        var outAns = outAns+"6";
    } else if (id "btn-7" == True) {
        var outAns = outAns+"7";
    } else if (id "btn-8" == True) {
        var outAns = outAns+"8";
    } else if (id "btn-9" == True) {
        var outAns = outAns+"9";
    } else if (id "btn-0" == True) {
        var outAns = outAns+"0";
    } else if (id "btn-." == True) {
        var outAns = outAns+".";
    } else if (id "btn-+" == True) {
        var outAns = outAns+"+";
    } else if (id "btn-_" == True) {
        var outAns = outAns+"-";
    } else if (id "btn-x" == True) {
        var outAns = outAns+"x";
    } else if (id "btn-/" == True) {
        var outAns = outAns+"/";
    } else if (id "btn-=" == True) { /*When the = button is clicked convert the outAns variable into a float and set the text of calc-out to outAns */
        var outAns = float(outAns);
        setText("calc-out", outAns);
    } else if (id "btn-c" == True) { /* When the Clear button is clicked set the outAns variable to null (nothing) */
        var outAns = null;
    }
  }
};

/*--------------------------------------------------------------------------------------*/

/* Function for the die */
function rollTheDie() {
  var highest = 120;
  var dieSides = getValue("sides-input");
  if (dieSides > highest) {
    var invalidSides = "Invalid # of sides, over 120";
    setText("die-out", invalidSides);
  } else {
    var random = Math.float(Math.random * dieSides) + 1;
    setText("die-out", random);
  }
};

/*--------------------------------------------------------------------------------------*/
