/* notes on interview questions 3/16/18 watch videos on jquery, last day */

$( document ).ready( function () ) {
    
    var amountOfDivs = 0
    var realLoopNumber =0;
                    
    var arrayColors = ["green", "pink", "red", "yellow"]
    
    for (var i = 1; i < arrayColors.length, i++) {
    
        realLoopNumber = 1;
        console.log(i);
    
        setTimeout( function () ) {
                   
           console.log("function ran");
            console.log(i);       
            $ =("body").css("background-color", arrayColors[i]);
    
    }, 1000 * i);

    }
    
    console.log(realLoopNumber);
}