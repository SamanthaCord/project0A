
////GLOBAL VARIABLES/////

let sosButtonClicked = false;
let winner = false;
let gameRunning = true;
let buoyButtonClicks = 0;
let gameOver = false

//function to check if all levels have been passed and game has been won

const win = function () {
if (localStorage.nextLevel > 5) {
    console.log('You Won! Levels Complete.');
    winner = true;
    }
}

// run win function

win();

// timer countdown function. shows numbers and then hides them. Each number has a different delay to avoid them showing in the browser all at once.

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
      if (!winner) {              //if there is no winner show gameover titles
        $(".gameOver").show(0);
        gameOver = true           //indicates game is now over buttons can't be clicked
        localStorage.clear();     //resets the levels passed score to zero
      }
    }, 4800)                      //delays gameover function running and titles showing until all counter numbers have shown
  }


//check document is ready//
$(document).ready(function () {
  console.log("document ready");

//when sos button is clicked//
$('.sosButton').on('click', function (){
  if (sosButtonClicked === false) {     //only allow this button to be clicked if it hasn't already been clicked
  console.log("sos button clicked");
  sosButtonClicked = true;            //indicates sos button has now been clicked
  gameRunning = true;                 //indicates game is now running
  pattern(gameBoard);                 //runs game pattern function to generate the pattern
  timerCountdown();                   //starts the countdown
  //console.log(gamePattern);
  for (i = 0; i < gamePattern.length; i++) {          //turn the dots green when the pattern shows
    let highlightColor = document.getElementById(gamePattern[i]);
    $(highlightColor).addClass("circleFlash");        //make the dots flash from green to red when pattern is revealed
  }
}
})

//when a dot is clicked
$(".buoy").click(function () { $(this)
  //console.log(this);
  //if less than 4 dots have been clicked and sos button has been clicked
  if (buoyButtonClicks < 4 && sosButtonClicked) {
  let value = ($(this).attr('id'));           //get the ID of that dot
  //console.log(value);
  //check if the ID of the dot matches any of the values in the pattern array
  if (value === gamePattern[0] || value === gamePattern[1] || value === gamePattern[2] || value === gamePattern[3]) {
    //if the ID matches one of the values turn the got green
    $(this).css("background-color", "#21E412");
    buoyButtonClicks += 1;            //add 1 to the number of dots clicked
    // console.log('continue', buoyButtonClicks, gameOver);

    //if clicks is equal to 4 and game isn't over
    if (buoyButtonClicks === 4 && !gameOver) {

      //show next level text!
      //console.log('Next level!');
      $(".nextLevel").show();
      setTimeout(function() { $(".nextLevel").hide(); }, 800);    //hide next level text after time
      setTimeout(function(){
      //reload page after delay, to allow 'next level' titles to run first
    location.reload();
  },850);
  }
}
  //if dot clicked, less than 4 dots clicked, sos button clicked and game not over
  else if (buoyButtonClicks < 4 && sosButtonClicked && !gameOver) {
    //console.log('wrong!');
    //show wrong move titles
    $(".wrongMove").show();
    setTimeout(function() { $(".wrongMove").hide(); }, 800);    //hide wrong move titles again after time
  }
}
})

if (localStorage.nextLevel && !winner) {         //if there's no winner
    localStorage.nextLevel = Number(localStorage.nextLevel) + 1;   //add 1 to local storage to indicate level has been passed
    //if there is a winner, show game won titles
} else if (winner) {
    $(".gameWon").css("display", "inline-block");
    localStorage.clear();         //clear local storage after game is won
} else {
    localStorage.nextLevel = 1;
}

});
