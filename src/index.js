import Player from "./player.js";
import "./styles.css";

const playerOne = new Player();

function displayBoard(board) {
  const gameBoardElement = document.getElementById("game-board");

  board.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.innerHTML = `<p>?</p>`;

      squareElement.addEventListener("click", () => {
        playerOne.gameBoard.receiveAttack([rowIndex, columnIndex]);
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

    const squareContents = playerOne.gameBoard.board[rowIndex][columnIndex];
    squareElement.innerHTML = `<p>?</p>`;

    if (squareContents == "miss") {
      squareElement.innerHTML = `❌`;
      squareElement.classList.add("miss");
    }

    if (squareContents == "hit") {
      squareElement.innerHTML = `✔️`;
      squareElement.classList.add("hit");
    }
  });
}

playerOne.gameBoard.place(playerOne.gameBoard.cruiser, [0, 0], true);
displayBoard(playerOne.gameBoard.board);

console.log(playerOne.gameBoard.board);
