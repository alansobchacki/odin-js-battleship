import Ship from "./ship";

describe("Ship class", () => {
  test("should create a Ship object with the given size", () => {
    const size = 5;
    const ship = new Ship(size);

    expect(ship).toBeInstanceOf(Ship);
    expect(ship.size).toBe(size);
  });

  test("should create a Ship object with a different size", () => {
    const size = 10;
    const ship = new Ship(size);

    expect(ship).toBeInstanceOf(Ship);
    expect(ship.size).toBe(size);
  });
});
