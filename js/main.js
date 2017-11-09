
//console.log("working");

////////GLOBAL VARIABLES//////

const gameBoard = [
  ['1', '2', '3', '4'],
  ['5', '6', '7', '8'],
  ['9', '10', '11', '12'],
  ['13', '14', '15', '16']
]

let gamePattern = [];


///////randomly selects a number between index 0-4////////
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////create pattern function////////////

const pattern = function (game) {
for (let i = 0; i < gameBoard.length; i++) {        ////loops through each line of the gameboard array
    gamePattern.push(gameBoard[i][getRandomInt(0, 3)]);   ///picks a random value between the index of 0 and 3 from each line in the gameboard array and adds it to the game pattern array
  }
}

//pattern(gameBoard);
