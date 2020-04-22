document.addEventListener("keydown", function(event){

  var gamePattern = [];
  var buttonColours = ["red", "blue", "green", "yellow"];

  randomChosenColour = buttonColours[nextSequence()];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);

})

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function makeSound(color){

  switch (color) {
    case "blue":
        var tom1 = new Audio("sounds/blue.mp3");
        tom1.play();
      break;

    case "green":
        var tom2 = new Audio("sounds/green.mp3");
        tom2.play();
      break;

    case "red":
        var tom3 = new Audio("sounds/red.mp3");
        tom3.play();
      break;

    case "yellow":
        var tom4 = new Audio("sounds/yellow.mp3");
        tom4.play();
      break;

    default: console.log("errorColor");

  }

}
