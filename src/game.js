const Player = require('./player');

const Game = () => {
  const player = Player(false);
  const computer = Player();

  return { player, computer };
};

module.exports = Game;
