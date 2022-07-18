import './style.css';

const manageDOM = require('./manageDOM');
const Game = require('./game');

const newGame = Game();
for (let i = 0; i < 5; i++) {
  newGame.computer.placeShipRandomly(i + 1);
}
manageDOM.displayUI(newGame.player, newGame.computer);

export default Game;
