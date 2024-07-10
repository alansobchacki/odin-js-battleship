// index.js will handle DOM manipulation

import Player from "./player.js";
import "./styles.css";

// initializes two players: a human player and a machine player
const playerOne = new Player();
const playerTwo = new Player(true);

// This section handles game setup - the initial greetings, player picking, and ship placement
function greetings() {
  const greetingsElement = document.getElementById("greetings");
  const easyMode = document.createElement("button");
  easyMode.textContent = "Easy";

  easyMode.addEventListener("click", setupGame);

  greetingsElement.innerHTML = `
    <h1>Battleship</h1>
    <p>Choose Your Difficulty:</p>
  `;

  greetingsElement.appendChild(easyMode);
}

function hideGreetings() {
  const greetingsElement = document.getElementById("greetings");
  greetingsElement.innerHTML = ``;
}

function setupGame() {
  hideGreetings();
  placeShips("player-one-ships");
  placeShips("player-two-ships");
  displayBoard(playerOne.gameBoard.board, "one", false);
  displayBoard(playerTwo.gameBoard.board, "two", true);
  displayMessages();
}

// this section will handle ship placement
function placeShips(playerShips) {
  const shipElement = document.getElementById(playerShips);

  shipElement.innerHTML = `
  <br></br>

  <p>Cruiser</p>
  <div class="ship">
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
  </div>

  <p>Battleship</p>
  <div class="ship">
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
  </div>

  <p>Cruiser</p>
  <div class="ship">
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
  </div>

  <p>Submarine</p>
  <div class="ship">
    <div class="square">?</div>
    <div class="square">?</div>
    <div class="square">?</div>
  </div>

  <p>Destroyer</p>
  <div class="ship">
    <div class="square">?</div>
    <div class="square">?</div>
  </div>
  `;

  playerShips == "player-one-ships"
    ? playerOne.gameBoard.placeRandom()
    : playerTwo.gameBoard.placeRandom();
}

// This section handles the visuals of game (displaying messages, updating squares on click)
function displayMessages() {
  const messagesElement = document.getElementById("messages");
  const playerOneScore = checkSunkenShips(playerTwo);
  const gameOver = isGameOver();

  messagesElement.innerHTML = `Good luck!`;

  if (gameOver)
    messagesElement.innerHTML = `Game Over! ${playerOneScore == 5 ? "Player One Wins!" : "The Machine Wins!"}`;
}

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

  if (!isMachine && cellContent) {
    squareElement.classList.add("own");
  }

  if (isMachine && !isGameOver()) {
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
