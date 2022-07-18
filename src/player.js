const Gameboard = require('./gameboard');
const manageDOM = require('./manageDOM');

const Player = (cpu = true) => {
  const computer = cpu;
  const gameboard = Gameboard();
  let name = '';
  if (computer) {
    name = 'Computer';
  } else {
    name = 'You';
  }

  const getRandomNum = () => Math.floor(Math.random() * 10);

  const getRandomOrientation = () => {
    const randomOr = Math.floor(Math.random() * 2);
    if (randomOr === 0) {
      return 'horizontal';
    }
    return 'vertical';
  };

  const placeShipRandomly = (length) => {
    const x = getRandomNum();
    const y = getRandomNum();
    const orientation = getRandomOrientation();
    if (gameboard.checkIfAvailablePosition(x, y, length, orientation)) {
      gameboard.placeShip(x, y, length, orientation);
    } else {
      placeShipRandomly(length);
    }
  };

  const randomAttack = (player) => {
    const x = getRandomNum();
    const y = getRandomNum();
    const attack = player.gameboard.receiveAttack(x, y);
    if (!attack) {
      randomAttack(player);
    }
  };

  return {
    gameboard, placeShipRandomly, randomAttack, computer, name,
  };
};

module.exports = Player;
