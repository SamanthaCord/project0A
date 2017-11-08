
//console.log("working");

const gameBoard = [
  ['1', '2', '3', '4'],
  ['5', '6', '7', '8'],
  ['9', '10', '11', '12'],
  ['13', '14', '15', '16']
]

let gamePattern = [];


//randomly selects a number between index 0-4
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const pattern = function (game) {
for (let i = 0; i < gameBoard.length; i++) {
    gamePattern.push(gameBoard[i][getRandomInt(0, 3)]);
  }
}

//pattern(gameBoard);
