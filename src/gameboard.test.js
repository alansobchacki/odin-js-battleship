/* eslint-disable no-undef */
import Gameboard from "./gameboard.js";

describe("Gameboard class", () => {
  // tests for the board
  test("should initialize a grid of 10x10 blank squares", () => {
    const gameBoard = new Gameboard();

    expect(gameBoard.board[0][0]).toBe(null);
    expect(gameBoard.board[9][9]).toBe(null);
    expect(gameBoard.board[0].length).toBe(10);
    expect(gameBoard.board[9].length).toBe(10);
    expect(gameBoard.board[10]).toBe(undefined);
  });

  test("should initialize with the correct number of ships", () => {
    const gameBoard = new Gameboard();

    expect(gameBoard.carrier).toEqual({
      health: 5,
      size: 5,
      initials: "ca",
      sunk: false,
    });
    expect(gameBoard.battleship).toEqual({
      health: 4,
      size: 4,
      initials: "ba",
      sunk: false,
    });
    expect(gameBoard.cruiser).toEqual({
      health: 3,
      size: 3,
      initials: "cr",
      sunk: false,
    });
    expect(gameBoard.submarine).toEqual({
      health: 3,
      size: 3,
      initials: "su",
      sunk: false,
    });
    expect(gameBoard.destroyer).toEqual({
      health: 2,
      size: 2,
      initials: "de",
      sunk: false,
    });
  });

  // tests for ship placement
  test("should allow ships to be placed horizontally within the board", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.cruiser, [0, 0], true);

    expect(gameBoard.board[0][0]).toBe("cr");
    expect(gameBoard.board[0][1]).toBe("cr");
    expect(gameBoard.board[0][2]).toBe("cr");
  });

  test("should allow ships to be placed vertically within the board", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.cruiser, [0, 0], false);

    expect(gameBoard.board[0][0]).toBe("cr");
    expect(gameBoard.board[1][0]).toBe("cr");
    expect(gameBoard.board[2][0]).toBe("cr");
  });

  test("should not allow ships to be placed out of bounds", () => {
    const gameBoard = new Gameboard();

    // attempts to place a cruiser horizontally at the right edge of the board
    expect(() => {
      gameBoard.place(gameBoard.cruiser, [0, 9], true);
    }).toThrow("Can't place ship here, index out of bounds");

    // attempts to place a cruiser vertically at the bottom row of the board
    expect(() => {
      gameBoard.place(gameBoard.cruiser, [9, 0], false);
    }).toThrow("Can't place ship here, index out of bounds");
  });

  test("should not allow ships to be placed in occupied squares", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.battleship, [0, 0], true);

    // attempts to place a cruiser in a spot where there's already a battleship
    expect(() => {
      gameBoard.place(gameBoard.cruiser, [2, 0], true);
    }).toThrow("Can't place ship here, there's already a ship here");
  });

  // tests for attack registration
  test("should properly allow ships to be hit", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.battleship, [0, 0], true);
    gameBoard.receiveAttack([0, 2]);

    expect(gameBoard.board[0][2]).toBe("hit");
    expect(gameBoard.battleship.health).toBe(3);
  });

  test("should allow ships to be sunk if all their squares are hit", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.destroyer, [0, 0], true);
    gameBoard.receiveAttack([0, 0]);
    gameBoard.receiveAttack([0, 1]);

    expect(gameBoard.destroyer.sunk).toBe(true);
  });

  test("should allow players to hit empty squares", () => {
    const gameBoard = new Gameboard();

    gameBoard.place(gameBoard.battleship, [0, 0], true);
    gameBoard.receiveAttack([0, 6]);

    expect(gameBoard.board[0][6]).toBe("miss");
    expect(gameBoard.battleship.health).toBe(4);
  });

  test("should not allow players to hit a square that was already attacked", () => {
    const gameBoard = new Gameboard();

    // if the player hits a ship square that was already hit
    gameBoard.board[0][6] = "miss";

    expect(() => {
      gameBoard.receiveAttack([0, 6]);
    }).toThrow("Can't attack this square, it was already hit");

    // if the player his an empty square that was already hit
    gameBoard.place(gameBoard.battleship, [0, 0], false);
    gameBoard.receiveAttack([0, 0]);

    expect(() => {
      gameBoard.receiveAttack([0, 0]);
    }).toThrow("Can't attack this square, it was already hit");
  });
});
