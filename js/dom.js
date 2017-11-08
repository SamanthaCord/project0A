
//check document is ready//

$(document).ready(function () {
  console.log("document ready");

$('.sosButton').on('click', function (){
  console.log("sos button clicked");
  pattern(gameBoard);
  console.log(gamePattern);
  for (i = 0; i < gamePattern.length; i++) {
    let highlightColor = document.getElementById(gamePattern[i]);
    $(highlightColor).css("background-color", "#21E412");
  }
})


$(".buoy").click(function () { $(this)
  //console.log(this);
  let value = ($(this).attr('id'));
  console.log(value);
  if (value === gamePattern[0] || value === gamePattern[1] || value === gamePattern[2] || value === gamePattern[3]) {
    console.log('continue');
    $(this).css("background-color", "#21E412");
  }
else {
  console.log('gameover');
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
