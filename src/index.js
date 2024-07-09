import Player from "./player.js";
import "./styles.css";

const playerOne = new Player();

function displayBoard(board) {
  const gameBoardElement = document.getElementById("game-board");

  board.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const squareElement = document.createElement("div");
      // const squareContents = playerOne.gameBoard.board[columnIndex][rowIndex];
      // squareElement.innerHTML = `<p>${squareContents}</p>`;

      squareElement.classList.add("square");

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

    if (squareContents == "hit") squareElement.innerHTML = `X`;
  });
}

displayBoard(playerOne.gameBoard.board);
