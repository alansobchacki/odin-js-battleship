// index.js will handle DOM manipulation

import Player from "./player.js";
import "./styles.css";

const playerOne = new Player();
const playerTwo = new Player();

// This section handles game setup - the initial greetings, player picking, and ship placement
function greetings() {
  const greetingsElement = document.getElementById("greetings");
  const button = document.createElement("button");
  button.textContent = "Do you wish to play?";

  button.addEventListener("click", setupGame);

  greetingsElement.innerHTML = `<h1>Battleship</h1>`;
  greetingsElement.appendChild(button);
}

function hideGreetings() {
  const greetingsElement = document.getElementById("greetings");
  greetingsElement.innerHTML = ``;
}

function setupGame() {
  hideGreetings();

  playerOne.gameBoard.placeRandom();
  playerTwo.gameBoard.placeRandom();

  displayBoard(playerOne.gameBoard.board, "one");
  displayBoard(playerTwo.gameBoard.board, "two");
}

// This section handles the visuals of the actual gameplay
function displayBoard(board, player) {
  const boardElement = getPlayerBoardElement(player);

  boardElement.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const squareElement = createSquareElement(
        rowIndex,
        columnIndex,
        cell,
        player,
      );
      boardElement.appendChild(squareElement);
    });
  });
}

function getPlayerBoardElement(player) {
  return player === "one"
    ? document.getElementById("game-board")
    : document.getElementById("game-board-two");
}

function createSquareElement(rowIndex, columnIndex, cellContent, player) {
  const squareElement = document.createElement("div");
  squareElement.classList.add("square");

  if (cellContent === "miss") {
    squareElement.innerHTML = `❌`;
    squareElement.classList.add("miss");
  } else if (cellContent === "hit") {
    squareElement.innerHTML = `✔️`;
    squareElement.classList.add("hit");
  } else {
    squareElement.innerHTML = `<p>?</p>`;
  }

  squareElement.addEventListener("click", () => {
    const currentPlayer = player === "one" ? playerOne : playerTwo;
    currentPlayer.gameBoard.receiveAttack([rowIndex, columnIndex]);
    updateBoard(player);
  });

  return squareElement;
}

function updateBoard(player) {
  const currentPlayer = player === "one" ? playerOne : playerTwo;

  // add a function here to check if the game is over (if given player has 5 sunken ships)
  displayBoard(currentPlayer.gameBoard.board, player);
}

greetings();
