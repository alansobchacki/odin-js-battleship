import Player from "./player.js";

const playerOne = new Player();

function displayBoard(board) {
  const gameBoardElement = document.getElementById("game-board");

  board.forEach((row, rowIndex) => {
    row.forEach((square, columnIndex) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.dataset.row = rowIndex;
      squareElement.dataset.column = columnIndex;
      gameBoardElement.appendChild(squareElement);
    });
  });
}

displayBoard(playerOne.gameBoard.board);

// console.log(playerOne);
// console.log(playerOne.gameBoard.board); // a matrix of 10x10 null values
