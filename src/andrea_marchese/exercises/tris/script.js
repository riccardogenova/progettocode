/** @format */

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = 'X';

function printBoard() {
  console.log(
    '\n' +
      ' ' +
      board[0] +
      ' | ' +
      board[1] +
      ' | ' +
      board[2] +
      '\n' +
      ' ---------\n' +
      ' ' +
      board[3] +
      ' | ' +
      board[4] +
      ' | ' +
      board[5] +
      '\n' +
      ' ---------\n' +
      ' ' +
      board[6] +
      ' | ' +
      board[7] +
      ' | ' +
      board[8] +
      '\n',
  );
}

function makeMove(index) {
  if (board[index] === ' ') {
    board[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  } else {
    console.log('This spot is already taken.');
  }
  printBoard();
  checkWin();
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== ' ' && board[a] === board[b] && board[a] === board[c]) {
      console.log('Player ' + board[a] + ' wins!');
      board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      currentPlayer = 'X';
      break;
    }
  }
}

printBoard();
