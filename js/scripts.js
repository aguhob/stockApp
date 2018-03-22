// Waits for DOM to be fully loaded.
$( document ).ready( function () {

  //Stores the Div with myBox.
  var box = $("#myBox");
  // starts the string to hold color value.
  var colorString = "rgb(";

  //loops every second to create color and set it to box.
  var loopingColor = setInterval(function () {

    colorString = "rgb(";
    colorString = colorString + giveMeARandomNumber() + ", " + giveMeARandomNumber() + ", " +
    giveMeARandomNumber() + ")";

    box.css( "background-color", colorString);


  }, 1000);

  // Click button to change color of box.
  $("#buttonColor").click( function () {

    clearInterval(loopingColor);

    colorString = "rgb(";
    colorString = colorString + giveMeARandomNumber() + ", " + giveMeARandomNumber() + ", " +
    giveMeARandomNumber() + ")";

    box.css( "background-color", colorString);

  });

});

// Generate a random number from 0 to 254
function giveMeARandomNumber() {

  var number = Math.random() * 255;
  number = Math.floor(number);

  return number;
}
