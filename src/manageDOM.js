const Game = require('./game');

const manageDOM = (() => {
  const content = document.getElementById('content');

  const displayBoard = (player) => {
    const displayedBoard = document.createElement('div');
    displayedBoard.classList.add('board');
    const board = player.gameboard;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        displayedBoard.appendChild(cell);
        if (player.computer === true) {
          cell.id = `${i.toString()}${j.toString()}computer`;
          cell.classList.add('computer-cell');
        } else {
          cell.id = `${i.toString()}${j.toString()}player`;
          cell.classList.add('player-cell');
        }
        if (board.arrayIncludesCoord(board.showMissedAttacks(), [i, j])) {
          cell.classList.add('missed');
        }
        if (board.arrayIncludesCoord(board.showOccupiedCells(), [i, j])) {
          if (board.arrayIncludesCoord(board.showHitPositions(), [i, j])) {
            cell.classList.add('hit');
          }
          cell.classList.add('occupied');
        }
        for (let k = 0; k < board.showSunkShipsCoord().length; k++) {
          if (board.arrayIncludesCoord(board.showSunkShipsCoord()[k], [i, j])) {
            cell.classList.add('sunk');
          }
        }
      }
    }
    return displayedBoard;
  };

  const createBoardArea = (player) => {
    const boardArea = document.createElement('div');
    const boardTitle = document.createElement('div');
    const board = displayBoard(player);
    boardArea.appendChild(boardTitle);
    boardArea.appendChild(board);
    if (player.computer) {
      boardTitle.textContent = 'Enemy\'s board';
    } else {
      boardTitle.textContent = 'Your board';
    }
    boardArea.classList.add('board-area');
    boardTitle.classList.add('board-title');
    return boardArea;
  };

  const setHitListeners = (player, computer) => {
    const cells = document.getElementsByClassName('computer-cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', () => {
        if (player.gameboard.placedShips.length === 5) {
          computer.gameboard.receiveAttack(parseInt(cells[i].id[0]), parseInt(cells[i].id[1]), computer.randomAttack(player));
          displayUI(player, computer);
        }
      });
    }
  };

  const playAgain = () => {
    const newGame = Game();
    for (let i = 0; i < 5; i++) {
      newGame.computer.placeShipRandomly(i + 1);
    }
    manageDOM.displayUI(newGame.player, newGame.computer);
  };

  const showFinishedGamewinMsg = (winner) => {
    const winMsg = document.createElement('div');
    winMsg.id = 'win-message';
    const winnerMessage = document.getElementById('game-message');
    winnerMessage.textContent = `${winner} won!`;
    const playAgainMessage = document.createElement('div');
    playAgainMessage.textContent = 'Do you want to play again?';
    playAgainMessage.classList.add('play-again-message');
    const yesBtn = document.createElement('button');
    yesBtn.textContent = 'Yes';
    yesBtn.id = 'yes-btn';
    const noBtn = document.createElement('button');
    noBtn.textContent = 'No';
    noBtn.id = 'no-btn';
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(yesBtn);
    btnContainer.appendChild(noBtn);
    winMsg.appendChild(playAgainMessage);
    winMsg.appendChild(btnContainer);
    content.appendChild(winMsg);
    yesBtn.addEventListener('click', playAgain);
    noBtn.addEventListener('click', () => winMsg.style.display = 'none');
  };

  const checkIfAllShipsSunk = (player, computer) => {
    let winner = '';
    if (player.gameboard.allShipsSunk()) {
      winner = computer;
    }
    if (computer.gameboard.allShipsSunk()) {
      winner = player;
    }
    return winner.name;
  };

  const createTitleDiv = () => {
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Battleship';
    return title;
  };

  const createMessageDiv = () => {
    const gameMessage = document.createElement('div');
    gameMessage.id = 'game-message';
    return gameMessage;
  };

  const createBoardsDiv = (player, computer) => {
    const boardsDiv = document.createElement('div');
    boardsDiv.classList.add('boards-area');
    boardsDiv.appendChild(createBoardArea(player));
    boardsDiv.appendChild(createBoardArea(computer));
    return boardsDiv;
  };

  const checkIfFinishedGame = (player, computer) => {
    if (player.gameboard.placedShips.length === 5) {
      const winner = checkIfAllShipsSunk(player, computer);
      if (winner) {
        showFinishedGamewinMsg(winner);
        return true;
      }
    }
    return false;
  };

  const changeMessage = (placedShips, hitPositions) => {
    const message = document.getElementById('game-message');
    clearMessage();
    if (placedShips < 5) {
      message.textContent = showPlaceShipMessage();
    } else if (placedShips === 5 && hitPositions === 0) {
      message.textContent = showStartGameMessage();
    }
  };

  const showHover = (cell, length, orientation) => {
    const x = parseInt(cell.id[0]);
    const y = parseInt(cell.id[1]);
    let i = 0;
    if (orientation === 'horizontal') {
      while (y + i < 10 && i < length) {
        const hover = document.getElementById(`${x}${y + i}player`);
        if (!hover.classList.contains('occupied')) {
          hover.classList.add('hover');
        }
        i++;
      }
    } else {
      while (x + i < 10 && i < length) {
        const hover = document.getElementById(`${x + i}${y}player`);
        if (!hover.classList.contains('occupied')) {
          hover.classList.add('hover');
        }
        i++;
      }
    }
  };

  const removeHover = () => {
    const cells = document.getElementsByClassName('player-cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.remove('hover');
    }
  };

  const shiftKeyPressed = (e) => {
    if (e.shiftKey) {
      return 'vertical';
    }
    return 'horizontal';
  };

  const hoverShip = (player, computer, size = 5) => {
    let orientation;
    let length = size;
    const board = player.gameboard;
    const cells = document.getElementsByClassName('player-cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('mouseover', (e) => {
        orientation = shiftKeyPressed(e);
        showHover(cells[i], length, orientation);
      });
      cells[i].addEventListener('mouseout', removeHover);
      cells[i].addEventListener('click', (e) => {
        orientation = shiftKeyPressed(e);
        if (board.placeShip(parseInt(cells[i].id[0]), parseInt(cells[i].id[1]), length, orientation)) {
          length--;
        }
        displayUI(player, computer);
      });
    }
  };

  const clearMessage = () => {
    const message = document.getElementById('game-message');
    message.textContent = '';
  };

  const showStartGameMessage = () => 'Let\'s start the game! You make the first attack!';

  const showPlaceShipMessage = () => 'Place all your ships!';

  const displayUI = (player, computer) => {
    content.textContent = '';
    const title = createTitleDiv();
    content.appendChild(title);
    const gameMessage = createMessageDiv();
    content.appendChild(gameMessage);
    const boardsDiv = createBoardsDiv(player, computer);
    content.appendChild(boardsDiv);
    changeMessage(player.gameboard.placedShips.length, computer.gameboard.showHitPositions().length);
    if (checkIfFinishedGame(player, computer)) {
      return;
    }
    setHitListeners(player, computer);
    if (player.gameboard.placedShips.length < 5) {
      hoverShip(player, computer, 5 - player.gameboard.placedShips.length);
    }
  };

  return {
    displayUI, hoverShip, setHitListeners, showStartGameMessage,
  };
})();

module.exports = manageDOM;
