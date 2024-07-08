import Player from "./player.js";
import "./styles.css";

const playerOne = new Player();
// const playerTwo = new Player();

function displayBoard(board) {
  const gameBoardElement = document.getElementById("game-board");

  board.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const squareElement = document.createElement("div");
      const squareContents = playerOne.gameBoard.board[columnIndex][rowIndex];

      squareElement.innerHTML = `<p>${squareContents}</p>`; // for debugging reasons

      squareElement.classList.add("square");

      // Assign the onClick handler
      squareElement.addEventListener("click", () => {
        playerOne.gameBoard.receiveAttack([columnIndex, rowIndex]);
        updateBoard();
      });

      gameBoardElement.appendChild(squareElement);
    });
  });
}

function updateBoard() {
  const gameBoardElement = document.getElementById("game-board");

  Array.from(gameBoardElement.children).forEach((squareElement, index) => {
    const rowIndex = Math.floor(index / 10);
    const columnIndex = index % 10;

    const squareContents = playerOne.gameBoard.board[columnIndex][rowIndex];

    squareElement.innerHTML = `<p>${squareContents}</p>`;
  });
}

displayBoard(playerOne.gameBoard.board);
