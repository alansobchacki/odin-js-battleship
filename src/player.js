import Gameboard from "./gameboard.js";

class Player {
  constructor() {
    this.gameBoard = new Gameboard();
    this.isGameLost = false;
  }
}

export default Player;
