
//check document is ready//
let sosButtonClicked = false;
let buoyButtonClicks = 0;

$(document).ready(function () {
  console.log("document ready");

$('.sosButton').on('click', function (){
  if (sosButtonClicked === false) {
  console.log("sos button clicked");
  sosButtonClicked = true;
  pattern(gameBoard);
  console.log(gamePattern);
  for (i = 0; i < gamePattern.length; i++) {
    let highlightColor = document.getElementById(gamePattern[i]);
    $(highlightColor).addClass("circleFlash");
  }
}
})


$(".buoy").click(function () { $(this)
  //console.log(this);
  if (buoyButtonClicks < 4) {
  let value = ($(this).attr('id'));
  //console.log(value);
  if (value === gamePattern[0] || value === gamePattern[1] || value === gamePattern[2] || value === gamePattern[3]) {
    console.log('continue');
    $(this).css("background-color", "#21E412");
    buoyButtonClicks += 1;
  }
  else if (buoyButtonClicks < 4) {
    console.log('wrong!');
    //wrong text!
  }
}
else if (buoyButtonClicks >= 4) {
  //trigger next level text!
  console.log('Next level!');
  location.reload();
}
else {
  console.log('gameover');
  //time ran out
  //game over text!
}
})

});

// for (let i = 0; i < gamePattern.length; i++) {
//   if (gamePattern[i] === this) {
//     $(this).css("background-color", "#21E412");
//     setTimeOut()
//   }
//   else {
//     console.log('false');
//   }
// }

//run for loop that shows a pattern from javascript file
//setTimeOut(function, inseconds);
//setTimeOut(function that runs through 5 numbers, in seconds);
//if (pattern is correct) {
  //add class to show 'your safe' screen
  //reset game
  //start new level for loop that shows a new pattern from javascript file
//else {
//add class to show game over screen
//reset game
