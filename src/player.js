import Gameboard from "./gameboard.js";

class Player {
  constructor(isMachine = false) {
    this.gameBoard = new Gameboard();
    this.isMachine = isMachine;
  }

  isGameOver() {
    if (this.gameBoard.shipsSunk == 5) return true;
  }

  // will only be called if you're playing against a machine
  attackEnemyPlayer(target) {
    let validAttack = false;

    while (!validAttack) {
      try {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        const square = target.board[randomRow][randomCol];

        if (square == "hit" || square == "miss") {
          throw new Error("Can't attack this square, it was already hit");
        }

        if (!square) {
          target.board[randomRow][randomCol] = "miss";
          return;
        }

        if ((square && square !== "hit") || (square && square !== "miss")) {
          const ship = target.ships[square];
          target.board[randomRow][randomCol] = "hit";
          ship.hit();

          if (ship.sunk) target.shipsSunk += 1;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export default Player;
