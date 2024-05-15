/** @format */

const words = ['cane', 'gatto', 'elefante', 'tigre', 'leone', 'aspirapolvere'];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
const tentativiMassimi = 6;
let tentativiRimasti = tentativiMassimi;
let parolaDaIndovinare = chosenWord;
let lettereIndovinate = [];

function nuovaPartita() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  parolaDaIndovinare = chosenWord;
  lettereIndovinate = [];
  tentativiRimasti = tentativiMassimi;
  updateDisplay();
  document.getElementById('risposta').disabled = false; // Riattiva il campo di input
  document.getElementById('risposta').value = ''; // Svuota il campo di input
}

function checkLetter(lettera) {
  if (tentativiRimasti > 0) {
    if (parolaDaIndovinare.includes(lettera)) {
      lettereIndovinate.push(lettera);
    } else {
      tentativiRimasti--;
    }
    updateDisplay();
    checkLoss();
    checkWin(); // Aggiunto qui
  }
}

function updateDisplay() {
  const displayParola = parolaDaIndovinare
    .split('')
    .map(lettera => (lettereIndovinate.includes(lettera) ? lettera : '_'))
    .join(' ');
  document.getElementById('parola').textContent = displayParola;
  document.getElementById('tentativi-rimasti').textContent = 'Tentativi rimasti: ' + tentativiRimasti;
}

function checkLoss() {
  if (tentativiRimasti === 0) {
    alert('Hai perso! La parola era: ' + parolaDaIndovinare);
  }
}

function checkWin() {
  const parolaArray = parolaDaIndovinare.split('');
  const vittoria = parolaArray.every(lettera => lettereIndovinate.includes(lettera));

  if (vittoria) {
    alert('Complimenti! Hai indovinato la parola!');
  }
}

function controllaRisposta() {
  const rispostaUtente = document.getElementById('risposta').value.toLowerCase();
  if (rispostaUtente === parolaDaIndovinare) {
    alert('Complimenti! Hai indovinato la parola!');
  } else {
    alert('Sbagliato! La parola corretta era: ' + parolaDaIndovinare);
  }
  document.getElementById('risposta').disabled = true;
  document.getElementById('risposta').disabled = true; // Disabilita il campo di input "Risposta"
  document.getElementById('controlla-risposta').disabled = true; // Disabilita il pulsante "Controlla Risposta"
}

document.getElementById('nuova-partita').addEventListener('click', nuovaPartita);

// Aggiungi la gestione degli eventi per le lettere come nell'esempio precedente

window.onload = nuovaPartita;
