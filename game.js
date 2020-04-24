//document.addEventListener("keydown", nextSequence);

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).on("keydown", function(){
  nextSequence();
  $(document).off();
});

function nextSequence() {

  //document.removeEventListener("keydown", nextSequence);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  /* for( var i = 0; i < 4; i++) {
    $("." + buttonColours[i]).click( function() { handler(buttonColours[i]); });
  } */

  $(".btn").click( function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  });

}
