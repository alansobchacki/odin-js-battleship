/* eslint-disable no-undef */
import Gameboard from "./gameboard.js";

describe("Gameboard class", () => {
  test("should be a grid of 10x10 squares", () => {
    const gameBoard = new Gameboard();

    expect(gameBoard.board[0][0]).toBe(null);
    expect(gameBoard.board[9][9]).toBe(null);
    expect(gameBoard.board[0].length).toBe(10);
    expect(gameBoard.board[9].length).toBe(10);
    expect(gameBoard.board[10]).toBe(undefined);
  });
});
