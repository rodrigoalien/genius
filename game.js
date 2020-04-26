//document.addEventListener("keydown", nextSequence);

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
//var start = false;

$(document).keypress(function() {
  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// The user push the buttons.

/* for( var i = 0; i < 4; i++) {
  $("." + buttonColours[i]).click( function() { handler(buttonColours[i]); });
} */

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length -1);

});



function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

}

// play the audio of button press

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed").delay(100).queue( function() {
    $(this).removeClass("pressed").dequeue();
  });

}

function checkAnswer(currentLevel) {

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if(gamePattern.length === currentLevel + 1) {
      setTimeout(nextSequence, 1000);
    }
  }
  else {

    playSound("wrong");
    $("body").addClass("game-over").delay(200).queue( function() {
      $(this).removeClass("game-over").dequeue();
    });

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }

}

function startOver() {
  gamePattern = [];
  started = false;
  level = 0;
}
