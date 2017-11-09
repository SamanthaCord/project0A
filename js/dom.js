

let sosButtonClicked = false;
let winner = false;
let gameRunning = true;
let buoyButtonClicks = 0;
let gameOver = false

const win = function () {
if (localStorage.nextLevel > 5) {
    console.log('You Won! Levels Complete.');
    winner = true;
    }
}

win();

const timerCountdown = function () {
    $("#five").show();
    $(".timerheading").css("display", "none");
    setTimeout(function() { $("#five").hide(); }, 300);
    $("#four").delay(800).show(0);
    setTimeout(function() { $("#four").hide(); }, 1100);
    $("#three").delay(1700).show(0);
    setTimeout(function() { $("#three").hide(); }, 2000);
    $("#two").delay(2500).show(0);
    setTimeout(function() { $("#two").hide(); }, 2800);
    $("#one").delay(3300).show(0);
    setTimeout(function() { $("#one").hide(); }, 3800);
    $("#zero").delay(4200).show(0);
    $(".sharkclock").delay(4200).show(0);
    setTimeout(function() {
      if (!winner) {
        $(".gameOver").show(0);
        gameOver = true
        localStorage.clear();
      }
    }, 4800)

  }


//check document is ready//
$(document).ready(function () {
  console.log("document ready");

$('.sosButton').on('click', function (){
  if (sosButtonClicked === false) {
  console.log("sos button clicked");
  sosButtonClicked = true;
  gameRunning = true;
  pattern(gameBoard);
  timerCountdown();
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
    $(this).css("background-color", "#21E412");
    buoyButtonClicks += 1;
    console.log('continue', buoyButtonClicks, gameOver);

    if (buoyButtonClicks === 4 && !gameOver) {
      //trigger next level text!
      //console.log('Next level!');
      $(".nextLevel").show();
      setTimeout(function() { $(".nextLevel").hide(); }, 800);
      setTimeout(function(){
    location.reload();
  },850);
  }
}
  else if (buoyButtonClicks < 4 && sosButtonClicked && !gameOver) {
    //console.log('wrong!');
    $(".wrongMove").show();
    setTimeout(function() { $(".wrongMove").hide(); }, 800);
  }
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
