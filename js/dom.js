

let sosButtonClicked = false;
let winner = false;
let buoyButtonClicks = 0;

const win = function () {
if (localStorage.nextLevel > 5) {
    console.log('You Won! Levels Complete.');
    winner = true;
    }
}

win();


//check document is ready//
$(document).ready(function () {
  console.log("document ready");

$('.sosButton').on('click', function (){
  if (sosButtonClicked === false) {
  console.log("sos button clicked");
  sosButtonClicked = true;
  pattern(gameBoard);
  //console.log(gamePattern);
  for (i = 0; i < gamePattern.length; i++) {
    let highlightColor = document.getElementById(gamePattern[i]);
    $(highlightColor).addClass("circleFlash");
  }
}
})


$(".buoy").click(function () { $(this)
  //console.log(this);
  if (buoyButtonClicks < 4 && sosButtonClicked) {
  let value = ($(this).attr('id'));
  //console.log(value);
  if (value === gamePattern[0] || value === gamePattern[1] || value === gamePattern[2] || value === gamePattern[3]) {
    //console.log('continue');
    $(this).css("background-color", "#21E412");
    buoyButtonClicks += 1;
    if (buoyButtonClicks === 4) {
      //trigger next level text!
      //console.log('Next level!');
      $(".nextLevel").show();
      setTimeout(function() { $(".nextLevel").hide(); }, 800);
      setTimeout(function(){
    location.reload();
  },850);
  }
}
  else if (buoyButtonClicks < 4 && sosButtonClicked) {
    //console.log('wrong!');
    $(".wrongMove").show();
    setTimeout(function() { $(".wrongMove").hide(); }, 800);
  }
}
else {
  // console.log('gameover');
  //time ran out
  $(".gameOver").css("display", "inline-block");
  winner = true;
}
})

if (localStorage.nextLevel && winner === false) {
    localStorage.nextLevel = Number(localStorage.nextLevel) + 1;
} else if (winner) {
    $(".gameWon").css("display", "inline-block");
    localStorage.clear();
} else {
    localStorage.nextLevel = 1;
}

});
