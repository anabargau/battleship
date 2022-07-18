const Ship = require('./ship');

const Gameboard = () => {
  const occupiedCells = [];
  const placedShips = [];
  const missedAttacks = [];
  const hitPositions = [];

  const buildBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const gameboardRow = [];
      for (let j = 0; j < 10; j++) {
        gameboardRow[j] = '';
      }
      board[i] = gameboardRow;
    }
    return board;
  };

  const gameboard = buildBoard();

  const checkIfAvailablePosition = (x, y, length, orientation) => {
    if (orientation === 'vertical') {
      if (x + length > 10) {
        return false;
      }
    } else if (y + length > 10) {
      return false;
    }
    if (orientation === 'vertical') {
      for (let i = x; i < x + length; i++) {
        if (arrayIncludesCoord(occupiedCells, [i, y]) || i > 10) {
          return false;
        }
      }
    } else {
      for (let i = y; i < y + length; i++) {
        if (arrayIncludesCoord(occupiedCells, [x, i]) || i > 10) {
          return false;
        }
      }
    }
    return true;
  };

  const placeShip = (coordX, coordY, length, orientation) => {
    if (checkIfAvailablePosition(coordX, coordY, length, orientation)) {
      const newShip = {};
      newShip.ship = Ship(length);
      newShip.coord = [];
      for (let i = 0; i < length; i++) {
        if (orientation === 'vertical') {
          occupiedCells.push([coordX + i, coordY]);
          newShip.coord.push([coordX + i, coordY]);
        } else {
          occupiedCells.push([coordX, coordY + i]);
          newShip.coord.push([coordX, coordY + i]);
        }
      }
      placedShips.push(newShip);
      return true;
    }
    return false;
  };

  const findIndexInArray = (array, coord) => {
    const x = coord[0];
    const y = coord[1];
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === x && array[i][1] === y) {
        return i;
      }
    }
    return -1;
  };

  const arrayIncludesCoord = (array, coord) => {
    const x = coord[0];
    const y = coord[1];
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === x && array[i][1] === y) {
        return true;
      }
    }
    return false;
  };

  const hitShip = (x, y) => {
    for (let i = 0; i < placedShips.length; i++) {
      if (arrayIncludesCoord(placedShips[i].coord, [x, y])) {
        const index = findIndexInArray(placedShips[i].coord, [x, y]);
        placedShips[i].ship.hit(index);
        return;
      }
    }
  };

  const allShipsSunk = () => {
    let sunkShips = 0;
    for (let i = 0; i < placedShips.length; i++) {
      if (placedShips[i].ship.isSunk()) {
        sunkShips++;
      }
    }
    if (sunkShips === placedShips.length) {
      return true;
    }
    return false;
  };

  const showOccupiedCells = () => occupiedCells;

  const showMissedAttacks = () => missedAttacks;

  const showHitPositions = () => hitPositions;

  const receiveAttack = (coordX, coordY) => {
    if (arrayIncludesCoord(hitPositions, [coordX, coordY])) {
      return false;
    } if (arrayIncludesCoord(occupiedCells, [coordX, coordY])) {
      hitShip(coordX, coordY);
      hitPositions.push([coordX, coordY]);
    } else {
      missedAttacks.push([coordX, coordY]);
      hitPositions.push([coordX, coordY]);
    }
    return true;
  };

  return {
    gameboard, buildBoard, placeShip, showOccupiedCells, receiveAttack, placedShips, findIndexInArray, showMissedAttacks, allShipsSunk, arrayIncludesCoord, checkIfAvailablePosition, showHitPositions,
  };
};

module.exports = Gameboard;
