/* eslint-disable no-undef */
import Ship from "./ship";

// a valid ship size is any value ranging from 2 to 5
describe("Ship class", () => {
  test("should create a Ship object with the given valid size", () => {
    const validSize = 5;
    const ship = new Ship(validSize);

    expect(ship).toBeInstanceOf(Ship);
    expect(ship.size).toBe(validSize);
  });

  test("should only create a Ship object with a valid ship size", () => {
    const invalidSizes = [0, 1, 10, 999];

    invalidSizes.forEach((size) => {
      expect(() => new Ship(size)).toThrow("Invalid ship size");
    });
  });

  test("should only accept integers as valid parameters", () => {
    const invalidSizes = ["5", 5.5, null, undefined, {}, [], NaN];

    invalidSizes.forEach((size) => {
      expect(() => new Ship(size)).toThrow("Ship size must be an integer");
    });
  });

  test("should lose health twice if it is hit twice", () => {
    const ship = new Ship(3);

    ship.hit();
    ship.hit();
    expect(ship.health).toBe(1);
  });

  test("should be sunk if its health becomes zero", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();

    expect(ship.sunk).toBe(true);
  });

  test("should not be able to be hit if it is already sunk", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.health).toBe(0);
  });
});
