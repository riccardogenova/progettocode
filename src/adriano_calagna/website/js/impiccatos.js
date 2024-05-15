/** @format */

const Impiccato = {
  words: ['cane', 'gatto', 'elefante', 'tigre', 'leone', 'aspirapolvere'],
  chosenWord: '',
  guessedLetters: [],
  tentativiMassimi: 6,
  tentativiRimasti: 6,
  parolaDaIndovinare: '',
  lettereIndovinate: [],

  nuovaPartita: function () {
    this.chosenWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.parolaDaIndovinare = this.chosenWord;
    this.lettereIndovinate = [];
    this.tentativiRimasti = this.tentativiMassimi;
    this.updateDisplay();
    document.getElementById('risposta').disabled = false;
    document.getElementById('risposta').value = '';

    // Riattiva il pulsante controlla-risposta
    document.getElementById('controlla-risposta').disabled = false;
  },

  checkLetter: function (lettera) {
    if (this.tentativiRimasti > 0) {
      if (this.parolaDaIndovinare.includes(lettera)) {
        this.lettereIndovinate.push(lettera);
      } else {
        this.tentativiRimasti--;
      }
      this.updateDisplay();
      this.checkLoss();
      this.checkWin();
    }
  },

  updateDisplay: function () {
    const displayParola = this.parolaDaIndovinare
      .split('')
      .map(lettera => (this.lettereIndovinate.includes(lettera) ? lettera : '_'))
      .join(' ');
    document.getElementById('parola').textContent = displayParola;
    document.getElementById('tentativi-rimasti').textContent = 'Tentativi rimasti: ' + this.tentativiRimasti;
  },

  checkLoss: function () {
    if (this.tentativiRimasti === 0) {
      alert('Hai perso! La parola era: ' + this.parolaDaIndovinare);
    }
  },

  checkWin: function () {
    const parolaArray = this.parolaDaIndovinare.split('');
    const vittoria = parolaArray.every(lettera => this.lettereIndovinate.includes(lettera));

    if (vittoria) {
      alert('Complimenti! Hai indovinato la parola!');
    }
  },

  controllaRisposta: function () {
    const rispostaUtente = document.getElementById('risposta').value.toLowerCase();
    if (rispostaUtente === this.parolaDaIndovinare) {
      alert('Complimenti! Hai indovinato la parola!');
    } else {
      alert('Sbagliato! La parola corretta era: ' + this.parolaDaIndovinare);
    }
    document.getElementById('risposta').disabled = true;
    document.getElementById('controlla-risposta').disabled = true;
  },
};

document.getElementById('nuova-partita').addEventListener('click', () => Impiccato.nuovaPartita());

// Aggiungi la gestione degli eventi per le lettere come nell'esempio precedente

window.onload = () => Impiccato.nuovaPartita();
