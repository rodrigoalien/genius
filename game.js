//document.addEventListener("keydown", nextSequence);

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
//var start = false;

$(document).on("keydown", function() {
  $("#level-title").text("Level " + level);
  //start = true;
  nextSequence();
  $(document).off();
});

function nextSequence() {

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  /* for( var i = 0; i < 4; i++) {
    $("." + buttonColours[i]).click( function() { handler(buttonColours[i]); });
  } */

  $(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
  });
}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed").delay(100).queue( function() {
    $(this).removeClass("pressed").dequeue();
  });

}
