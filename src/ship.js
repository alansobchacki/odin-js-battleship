class Ship {
  constructor(size) {
    if (!Number.isInteger(size)) {
      throw new Error("Ship size must be an integer");
    }

    if (size < 2 || size > 5) {
      throw new Error("Invalid ship size");
    }

    this.size = size;
    this.health = size;
    this.sunk = false;
  }

  hit() {
    if (this.sunk) return;

    this.health -= 1;
    if (this.health == 0) this.isSunk();
  }

  isSunk() {
    return (this.sunk = true);
  }
}

export default Ship;
