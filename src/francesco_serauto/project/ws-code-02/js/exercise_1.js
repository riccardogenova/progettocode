/** @format */

'use strict';

const btnIncrementa = document.getElementById('btnIncrementa');
const btnReset = document.getElementById('btnReset');
const btnElimina = document.getElementById('btnElimina');

//AutoElimina Bottone
function rimuoviBottone() {
  const bottoneDaEliminare = document.getElementById('autoElimina');
  bottoneDaEliminare.remove(bottoneDaEliminare);
}
btnElimina.addEventListener('click', rimuoviBottone);
//Incrementa Paragrafo
let valore = 0;
function incrementaCounter() {
  valore++;
  document.getElementById('counter').textContent = valore;
}
btnIncrementa.addEventListener('click', incrementaCounter);
//Reset Paragrafo
function resetCounter() {
  valore = 0;
  document.getElementById('counter').textContent = valore;
}
btnReset.addEventListener('click', resetCounter);
