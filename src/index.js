import './style.css';

const Gameboard = require('./gameboard');
const Ship = require('./ship');
const Player = require('./player');
const manageDOM = require('./manageDOM');

const Game = () => {
  const player = Player(false);
  const computer = Player();

  return { player, computer };
};

const newGame = Game();
for (let i = 0; i < 5; i++) {
  newGame.computer.placeShipRandomly(i + 1);
}
manageDOM.displayUI(newGame.player, newGame.computer);
manageDOM.hoverShip(newGame.player, newGame.computer);

export default Game;
