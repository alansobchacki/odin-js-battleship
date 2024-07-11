// index.js will handle DOM manipulation

import Player from "./player.js";
import "./styles.css";

// initializes two players: a human player and a machine player
const playerOne = new Player();
let playerTwo = null;
let playerTurn = true;

function greetings() {
  const greetingsElement = document.getElementById("greetings");
  greetingsElement.innerHTML = `
    <h1>Battleship</h1>
    <p>Choose Your Difficulty:</p>
  `;

  createGameModeButton(greetingsElement, "Easy");
  createGameModeButton(greetingsElement, "Hard");
}

function createGameModeButton(container, difficulty) {
  const gameModeButton = document.createElement("button");
  gameModeButton.textContent = difficulty;
  gameModeButton.addEventListener("click", () => setupGame(difficulty));

  container.appendChild(gameModeButton);
}

function hideGreetings() {
  const greetingsElement = document.getElementById("greetings");
  greetingsElement.innerHTML = ``;
}

function placeShips() {
  playerOne.gameBoard.placeRandom();
  playerTwo.gameBoard.placeRandom();
}

function displayGameBoardTitles() {
  const playerOneBoardIndicator = document.getElementById("player-one");
  playerOneBoardIndicator.insertAdjacentHTML(
    "afterbegin",
    "<h1>Your Board</h1>",
  );

  const playerTwoBoardIndicator = document.getElementById("player-two");
  playerTwoBoardIndicator.insertAdjacentHTML(
    "afterbegin",
    "<h1>Machine Board</h1>",
  );
}

function displayGameBoards() {
  displayBoard(playerOne.gameBoard.board, "one", false);
  displayBoard(playerTwo.gameBoard.board, "two", true);
}

function displayMessage(message) {
  const messagesElement = document.getElementById("messages");

  messagesElement.innerHTML = `${message}`;
}

function displayBoard(board, player, isMachine) {
  const boardElement = getPlayerBoardElement(player);
  boardElement.innerHTML = "";
  boardElement.className = "grid";

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
  }

  if (!isMachine && cellContent) {
    squareElement.classList.add("own");
  }

  if (isMachine && !isGameOver()) {
    squareElement.addEventListener("click", () => {
      if (playerTurn) {
        playerTwo.gameBoard.receiveAttack([rowIndex, columnIndex]);
        playerTwo.attackHumanPlayer(playerOne.gameBoard);

        updateBoard(true);
      }
    });
  }

  return squareElement;
}

function updateBoard(vsMachine) {
  const gameOver = isGameOver();
  playerTurn = false;

  if (gameOver) {
    const playerOneScore = checkSunkenShips(playerTwo);

    playerOneScore == 5
      ? displayMessage("You win!")
      : displayMessage("The Machine wins...");

    displayBoard(playerTwo.gameBoard.board, "two", vsMachine);
    displayBoard(playerOne.gameBoard.board, "one", false);
    return;
  }

  displayBoard(playerTwo.gameBoard.board, "two", vsMachine);
  displayMessage("The machine is planning their next attack...");

  setTimeout(() => {
    displayBoard(playerOne.gameBoard.board, "one", false);
    displayMessage("It's your turn!");
    playerTurn = true;
  }, 2000);
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

function displayHints() {
  const hintsContainer = document.getElementById("hints");

  hintsContainer.innerHTML = `
    <p>
      To win this game, you must sink all enemy ships (5). To do so, click
      on any square on the machine's board that does not have an emoji.
    </p>
    <p>
      If you hit an enemy ship, you'll see this: ✔️. If you miss, you'll see
      this: ❌.
    </p>
    <p>
      Each player has 5 ships. Try and sink all the machine's ships before
      they sink yours!
    </p>
    <p>PS: I doubt you can win this game on hard settings. If you do, please let me know.</p>
  `;
}

// game setup will be called once a player clicks on a button brought up by greetings()
function setupGame(difficulty) {
  playerTwo = difficulty === "Easy" ? new Player(true) : new Player(true, true);

  hideGreetings();
  placeShips();
  displayGameBoardTitles();
  displayGameBoards();
  displayMessage("Good luck!");
  displayHints();
}

greetings();
