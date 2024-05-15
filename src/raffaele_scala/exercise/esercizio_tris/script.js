/** @format */

// const posizioni = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const tris = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function reset() {
//   for (let i = 0; i < posizioni.length; i++) {
//     posizioni[i] = i + 1;
//   }
// }

// function play(posizione) {
//   posizioni[posizione] = 'X';
//   botPlay();
//   render();
//   console.log(checkWin());
//   if (checkWin() === 'X') {
//     console.log('Hai vinto');
//   }
// }
// function botPlay() {
//   let random = Math.floor(Math.random() * posizioni.length);
//   while (posizioni[random] === 'X' || posizioni[random] === 'O') {
//     random = Math.floor(Math.random() * posizioni.length);
//   }
//   posizioni[random] = 'O';
// }

// function render() {
//   console.log(`
//   ${posizioni[0]} | ${posizioni[1]} | ${posizioni[2]}
//  -----------
//   ${posizioni[3]} | ${posizioni[4]} | ${posizioni[5]}
//  -----------
//   ${posizioni[6]} | ${posizioni[7]} | ${posizioni[8]}
//  `);
// }

// function init() {
//   render();
// }

// function checkWin() {
//   for (let i = 0; i < tris.length; i++) {
//     if (posizioni[tris[i][0] - 1] === 'X' && posizioni[tris[i][1] - 1] === 'X' && posizioni[tris[i][2] - 1] === 'X') {
//       return 'X';
//     } else if (
//       posizioni[tris[i][0] - 1] === 'O' &&
//       posizioni[tris[i][1] - 1] === 'O' &&
//       posizioni[tris[i][2] - 1] === 'O'
//     ) {
//       return 'O';
//       console.log('Hai perso');
//     }
//   }
//   return false;
// }

// console.log(checkWin());
