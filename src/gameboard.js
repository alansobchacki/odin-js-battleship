import Ship from "./ship.js";

class Gameboard {
  constructor() {
    this.board = this.initializeBoard();
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
}

export default Gameboard;
