"use strict";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function printBoard() {
  console.log("");
  console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]} `);
  console.log("-----------");
  console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]} `);
  console.log("-----------");
  console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `);
  console.log("");
}

let player = "X";
let randomX;
let randomY;

function makeMove(x, y) {
  //! fix ? loop bot undefined ??
  if (board[x][y] !== "") {
    console.log(`Posizione già occupata!`);
    printBoard();
    return;
  }
  board[x][y] = player;

  if (player === "X") {
    player = "O";
    do {
      //! Fix loop condizione vittoria - board piena
      randomX = Math.floor(Math.random() * 3);
      randomY = Math.floor(Math.random() * 3);
    } while (board[randomX][randomY] !== "");
    makeMove(randomX, randomY);
  } else {
    player = "X";
  }
  printBoard();
}
makeMove(0, 0);
makeMove(0, 0);
