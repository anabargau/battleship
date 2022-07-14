const Gameboard = require('./gameboard');
const Ship = require('./ship');
const Player = require('./player');
const manageDOM = require('./manageDOM');

const Game = () => {
  const player = Player(false);
  const computer = Player();

  return { player, computer };
};

module.exports = Game;
