// index.js will handle DOM manipulation

import Player from "./player.js";
import "./styles.css";

// initially hardcoded - must change eventually to allow players to pick a game of hotseat or vs machine
// these settings will build a game of player vs machine
const playerOne = new Player();
const playerTwo = new Player(true);

// This section handles game setup - the initial greetings, player picking, and ship placement
function greetings() {
  const greetingsElement = document.getElementById("greetings");
  const button = document.createElement("button");
  button.textContent = "Easy";

  button.addEventListener("click", setupGame);

  greetingsElement.innerHTML = `
    <h1>Battleship</h1>
    <p>Choose Your Difficulty:</p>
  `;

  greetingsElement.appendChild(button);
}

function hideGreetings() {
  const greetingsElement = document.getElementById("greetings");
  greetingsElement.innerHTML = ``;
}

// initially hardcoded - must change eventually to allow players to pick a game of hotseat or vs machine
function setupGame() {
  hideGreetings();
  placeShips();
  displayBoard(playerOne.gameBoard.board, "one", false);
  displayBoard(playerTwo.gameBoard.board, "two", true);
  displayMessages();
}

function placeShips() {
  playerOne.gameBoard.placeRandom();
  playerTwo.gameBoard.placeRandom();
}

function displayMessages() {
  const messagesElement = document.getElementById("messages");
  const playerOneScore = checkSunkenShips(playerTwo);
  const gameOver = isGameOver();

  messagesElement.innerHTML = `Good luck!`;

  if (gameOver)
    messagesElement.innerHTML = `Game Over! ${playerOneScore == 5 ? "Player One Wins!" : "The Machine Wins!"}`;
}

// This section handles the visuals of game (building squares, updating squares on click)
function displayBoard(board, player, isMachine) {
  const boardElement = getPlayerBoardElement(player);
  boardElement.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const squareElement = createSquareElement(
        rowIndex,
        columnIndex,
        cell,
        isMachine,
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

function createSquareElement(rowIndex, columnIndex, cellContent, isMachine) {
  const squareElement = document.createElement("div");
  const gameOver = isGameOver();
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

  if (isMachine && !gameOver) {
    squareElement.addEventListener("click", () => {
      playerTwo.gameBoard.receiveAttack([rowIndex, columnIndex]);
      playerTwo.attackEnemyPlayer(playerOne.gameBoard);

      updateBoard(true);
    });
  }

  return squareElement;
}

function updateBoard(vsMachine) {
  displayBoard(playerOne.gameBoard.board, "one", false);
  displayBoard(playerTwo.gameBoard.board, "two", vsMachine);
  displayMessages();
}

function isGameOver() {
  const playerOneScore = checkSunkenShips(playerTwo);
  const playerTwoScore = checkSunkenShips(playerOne);

  if (playerOneScore == 5 || playerTwoScore == 5) return true;
}

// helper function for isGameOver
function checkSunkenShips(player) {
  return player.gameBoard.shipsSunk;
}

greetings();
