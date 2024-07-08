/* eslint-disable no-undef */
import Gameboard from "./gameboard.js";

describe("game class", () => {
  test("should initialize a grid of 10x10 blank squares", () => {
    const gameBoard = new Gameboard();

    expect(gameBoard.board[0][0]).toBe(null);
    expect(gameBoard.board[9][9]).toBe(null);
    expect(gameBoard.board[0].length).toBe(10);
    expect(gameBoard.board[9].length).toBe(10);
    expect(gameBoard.board[10]).toBe(undefined);
  });

  // a battleship board usually holds 1 carrier, 1 battleship, 1 cruiser, 2 submarines and 2 destroyers
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
    expect(gameBoard.submarineOne).toEqual({
      health: 3,
      size: 3,
      initials: "s1",
      sunk: false,
    });
    expect(gameBoard.submarineTwo).toEqual({
      health: 3,
      size: 3,
      initials: "s2",
      sunk: false,
    });
    expect(gameBoard.destroyerOne).toEqual({
      health: 2,
      size: 2,
      initials: "d1",
      sunk: false,
    });
    expect(gameBoard.destroyerTwo).toEqual({
      health: 2,
      size: 2,
      initials: "d2",
      sunk: false,
    });
  });

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
      gameBoard.place(gameBoard.cruiser, [0, 2], true);
    }).toThrow("Can't place ship here, there's already a ship here");
  });
});
