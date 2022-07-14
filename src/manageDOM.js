const Gameboard = require('./gameboard');
const Ship = require('./ship');
const Player = require('./player');
const Game = require('./index');

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

  const displayUI = (player, computer) => {
    content.textContent = '';
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'BATTLESHIP';
    content.appendChild(title);
    const boardsDiv = document.createElement('div');
    boardsDiv.classList.add('boards-area');
    boardsDiv.appendChild(createBoardArea(player));
    boardsDiv.appendChild(createBoardArea(computer));
    content.appendChild(boardsDiv);
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
        const hover = document.getElementById(`${x + 1}${y}player`);
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

  const hoverShip = (length, player, computer) => {
    let size = length;
    const board = player.gameboard;
    const orientation = 'horizontal';
    const cells = document.getElementsByClassName('player-cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('mouseover', () => showHover(cells[i], length, orientation));
      cells[i].addEventListener('mouseout', removeHover);
      cells[i].addEventListener('click', () => {
        if (board.placeShip(parseInt(cells[i].id[0]), parseInt(cells[i].id[1]), length, orientation)) {
          size--;
        }
        displayUI(player, computer);
        if (size > 0) {
          hoverShip(size, player, computer);
        }
      });
    }
  };

  const setHitListeners = (board, player, computer) => {
    const cells = document.getElementsByClassName('computer-cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', () => {
        console.log('ii');
        board.receiveAttack(cells[i].id[0], cells[i].id[1]);
        displayUI(player, computer);
      });
    }
  };

  return { displayUI, hoverShip, setHitListeners };
})();

module.exports = manageDOM;
