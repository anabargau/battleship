const Player = require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./ship');

test('gets the ship length', () => {
  expect(Ship(2).getShipLength()).toBe(2);
});

test('creates ship\'s area', () => {
  expect(Ship(4).makeArea()).toMatchObject([0, 0, 0, 0]);
});

test('shows ship area', () => {
  expect(Ship(4).getShipArea()).toMatchObject([0, 0, 0, 0]);
});

const testHit = (testShip, location) => {
  testShip.hit(location);
  return testShip.getShipArea();
};

const testSunk = (testShip) => {
  for (let i = 0; i < testShip.getShipLength(); i++) {
    testShip.hit(i);
  }
  return testShip.isSunk();
};

test('hits a ship position', () => {
  expect(testHit(Ship(3), 1)).toMatchObject([0, 1, 0]);
});

test('ship is sunk', () => {
  expect(testSunk(Ship(3))).toBeTruthy();
});

const testBoard = () => {
  const board = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row[j] = '';
    }
    board[i] = row;
  }
  return board;
};

test('create player\'s board correctly', () => {
  expect(Player().gameboard.gameboard).toEqual(testBoard());
});

test('check if coordinates are valid', () => {
  expect(Gameboard().checkIfValidCoord(1, 8, 4, 'horizontal')).toBeFalsy();
});

const testGameboard = Gameboard();
testGameboard.placeShip(2, 2, 3, 'horizontal');

test('check if the right number of cells are occupied', () => {
  expect(testGameboard.showOccupiedCells().length).toEqual(3);
});

test('check if the ship is saved in the array of placed ships', () => {
  expect(JSON.stringify(testGameboard.placedShips[0].ship)).toEqual(JSON.stringify(Ship(3)));
});

testGameboard.receiveAttack(2, 2);

test('check if attack hits the ship', () => {
  expect(testGameboard.placedShips[0].ship.getShipArea()).toEqual([1, 0, 0]);
});

test('check if findind coordinates index works', () => {
  expect(testGameboard.findIndexInArray(testGameboard.placedShips[0].coord, [2, 3])).toEqual(1);
});

testGameboard.receiveAttack(5, 5);

test('missed attacks are registered', () => {
  expect(JSON.stringify(testGameboard.showMissedAttacks())).toBe(JSON.stringify([[5, 5]]));
});

test('all ships sunk when there is still a ship left', () => {
  expect(testGameboard.allShipsSunk()).toBeFalsy();
});

const testGameboard2 = Gameboard();
testGameboard2.placeShip(3, 3, 3, 'vertical');
testGameboard2.receiveAttack(3, 3);
testGameboard2.receiveAttack(4, 3);
testGameboard2.receiveAttack(5, 3);

test('all ships sunk when there are none left', () => {
  expect(testGameboard2.allShipsSunk()).toBeTruthy();
});

test('check if array includes coordinates pair', () => {
  expect(testGameboard2.arrayIncludesCoord(testGameboard2.showOccupiedCells(), [3, 3])).toBeTruthy;
});

test('check if location is available to place a ship when the location is occupied', () => {
  expect(testGameboard2.checkIfAvailablePosition(3, 3, 3, 'horizontal')).toBeFalsy;
});

test('check if location is available to place a ship when the location is out of bounds', () => {
  expect(testGameboard2.checkIfAvailablePosition(10, 3, 3, 'vertical')).toBeFalsy;
});

test('check if location is available to place a ship when the location is free and in bounds', () => {
  expect((testGameboard2.checkIfAvailablePosition(5, 5, 2, 'vertical')).toBeTruthy);
});

const testPlayer = Player();
testPlayer.randomAttack(testPlayer);

test('register random attacks', () => {
  expect(testPlayer.gameboard.showHitPositions().length).toBe(1);
});
