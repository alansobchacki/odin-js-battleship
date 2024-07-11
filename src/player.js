import Gameboard from "./gameboard.js";

class Player {
  constructor(isMachine = false, hardMode = false) {
    this.gameBoard = new Gameboard();
    this.isMachine = isMachine;
    this.hardMode = hardMode;
  }

  isGameOver() {
    if (this.gameBoard.shipsSunk == 5) return true;
  }

  // the code below only applies to machine players
  targetedShip = null;

  // this function will only be called when: 1 - the machine hits something; 2 - the machine is on hard mode
  calculateAttack(target, square) {
    for (let row = 0; row < target.board.length; row++) {
      for (let col = 0; col < target.board[row].length; col++) {
        if (target.board[row][col] === square) {
          return [row, col];
        }
      }
    }
    return null;
  }

  attackHumanPlayer(target) {
    let validAttack = false;
    const directAttack = this.calculateAttack(target, this.targetedShip);

    while (!validAttack) {
      try {
        const row = !this.targetedShip
          ? Math.floor(Math.random() * 10)
          : directAttack[0];
        const col = !this.targetedShip
          ? Math.floor(Math.random() * 10)
          : directAttack[1];

        const square = target.board[row][col];

        if (square == "hit" || square == "miss") {
          throw new Error("Can't attack this square, it was already hit");
        }

        if (!square) {
          target.board[row][col] = "miss";
          return;
        }

        if ((square && square !== "hit") || (square && square !== "miss")) {
          const ship = target.ships[square];
          this.targetedShip = square;

          target.board[row][col] = "hit";
          ship.hit();

          if (ship.sunk) {
            target.shipsSunk += 1;
            this.targetedShip = null;
          }

          return;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export default Player;
