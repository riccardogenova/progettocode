"use strict";
//AutoElimina Bottone
function rimuoviBottone() {
  const bottoneDaEliminare = document.getElementById("autoElimina");
  bottoneDaEliminare.remove(bottoneDaEliminare);
}
//Incrementa Paragrafo
let valore = 0;
function incrementaCounter() {
  valore++;
  document.getElementById("counter").textContent = valore;
}
//Reset Paragrafo
function resetCounter() {
  valore = 0;
  document.getElementById("counter").textContent = valore;
}
