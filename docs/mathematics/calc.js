/*--------------------------------------------------------------------------------------*/

/* Calculator */
function solveForAns() {
  while (click "#btn-=" == False) {
    if (click "btn-1" == True) {
      var outAns = outAns+"1";
    } else if (click "btn-2" == True) {
      var outAns = outAns+"2";
    } else if (click "btn-3" == True) {
      var outAns = outAns+"3";
    } else if (click "btn-4" == True) {
      var outAns = outAns+"4";
    } else if (click "btn-5" == True) {
      var outAns = outAns+"5";
    } else if (click "btn-6" == True) {
      var outAns = outAns+"6";
    } else if (click "btn-7" == True) {
      var outAns = outAns+"7";
    } else if (click "btn-8" == True) {
      var outAns = outAns+"8";
    } else if (click "btn-9" == True) {
      var outAns = outAns+"9";
    } else if (click "btn-0" == True) {
      var outAns = outAns+"0";
    } else if (click "btn-." == True) {
      var outAns = outAns+".";
    } else if (click "btn-+" == True) {
      var outAns = outAns+"+";
    } else if (click "btn-_" == True) {
      var outAns = outAns+"-";
    } else if (click "btn-x" == True) {
      var outAns = outAns+"x";
    } else if (click "btn-/" == True) {
      var outAns = outAns+"/";
    } else if (click "btn-=" == True) {
      document.getElementById("calc-out").innerHTML = outAns;
    }
  }
};

/*--------------------------------------------------------------------------------------*/
