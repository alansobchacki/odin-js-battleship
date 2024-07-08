import Ship from "./ship.js";

class Gameboard {
  constructor() {
    this.board = this.initializeBoard();
    this.carrier = new Ship(5, "ca");
    this.battleship = new Ship(4, "ba");
    this.cruiser = new Ship(3, "cr");
    this.submarineOne = new Ship(3, "s1");
    this.submarineTwo = new Ship(3, "s2");
    this.destroyerOne = new Ship(2, "d1");
    this.destroyerTwo = new Ship(2, "d2");
    this.shipsSunk = 0; // If this value reaches 7, the player loses the game

    // This object helps to handle the logic of receiveAttack()
    this.ships = {
      ca: this.carrier,
      ba: this.battleship,
      cr: this.cruiser,
      s1: this.submarineOne,
      s2: this.submarineTwo,
      d1: this.destroyerOne,
      d2: this.destroyerTwo,
    };
  }

  initializeBoard() {
    const board = [];
    const size = 10;

    for (let i = 0; i < size; i++) {
      const row = new Array(size).fill(null);
      board.push(row);
    }

    return board;
  }

  // When direction is true (default value), it indicates a horizontal position
  // If place() receives false as an argument, it indicates a vertical position
  place(ship, initialCoordinates, direction = true) {
    const length = ship.size;
    const square = ship.initials;
    let column = initialCoordinates[0];
    let row = initialCoordinates[1];

    if (
      (direction && row + length > 10) || // Horizontal
      (!direction && column + length > 10) // Vertical
    ) {
      throw new Error("Can't place ship here, index out of bounds");
    }

    for (let i = 0; i < length; i++) {
      if (direction) {
        if (this.board[column][row + i] !== null) {
          throw new Error("Can't place ship here, there's already a ship here");
        }
      } else {
        if (this.board[column + i][row] !== null) {
          throw new Error("Can't place ship here, there's already a ship here");
        }
      }
    }

    for (let i = 0; i < length; i++) {
      if (direction) {
        this.board[column][row + i] = square;
      } else {
        this.board[column + i][row] = square;
      }
    }
  }

  receiveAttack(coordinates) {
    const column = coordinates[0];
    const row = coordinates[1];
    const square = this.board[column][row];

    if (square == "hit") {
      throw new Error("Can't attack this square, it was already hit");
    }

    if (!square) {
      this.board[column][row] = "hit";
      return;
    }

    if (square && square !== "hit") {
      const ship = this.ships[square];
      this.board[column][row] = "hit";
      ship.hit();

      if (ship.sunk) this.shipsSunk += 1;
    }
  }
}

export default Gameboard;
