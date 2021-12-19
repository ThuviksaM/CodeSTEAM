/*--------------------------------------------------------------------------------------*/

/* Helpful, but simple functions */
function setText(id, text) {
  document.getElementById(id).innerHTML = text /* Basically use actual command to set txt of something, and make it simpler */
};

function getValue(id) {
  document.getElementById(id).value; /* Basically use actual function to get value of something, and make it simpler */
};


/*--------------------------------------------------------------------------------------*/

/* Function for the calculator */
function solveForAns() {
  var outAns = null;
  while (click "reload" == False) { /* While reload btn isn't clicked, check which num or sym btn is clicked and add that sym or num as a str to the outAns var */ 
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
    } else if (id "btn-=" == True) { /* If = button is clicked convert outAns var into a float and set txt of calc-out to outAns */
        var outAns = float(outAns);
        setText("calc-out", outAns);
    } else if (id "btn-c" == True) { /* If Clear button is clicked set outAns var to null (nothing) */
        var outAns = null;
    }
  }
};

/*--------------------------------------------------------------------------------------*/

/* Function for the die */
var highest = 120; /* Store highest num of sides for die (120) in highest var */
var invalidSides = "Invalid # of sides, over 120"; /* Store wht to say if dieSide > highest in invalidSides var */
function rollTheDie() {
  var dieSides = getValue("sides-input"); /* Store num of sides inputed by user in dieSides var */
  var random = Math.float(Math.random * dieSides) + 1; /* Store wht num to roll the die to (a randm num) in random var */
  if (dieSides > highest) { /* If dieSides is > highest, set txt of die-out to invalidSides */
    setText("die-out", invalidSides);
  } else { /* Else set txt of die-out to random */
    setText("die-out", random);
  }
};

/*--------------------------------------------------------------------------------------*/
