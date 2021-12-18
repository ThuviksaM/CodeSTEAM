/*--------------------------------------------------------------------------------------*/

/* Calculator */
function solveForAns() {
  while (click "reload" == False) {
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
    } else if (id "btn-=" == True) {
        var outAns = float(outAns);
        document.getElementById("calc-out").innerHTML = setText(outAns);
    } else if (id "btn-c" == True) {
        var outAns = none;
    }
  }
};

/*--------------------------------------------------------------------------------------*/

/* Die */
function rollDie() {
  var dieSide = 
};
