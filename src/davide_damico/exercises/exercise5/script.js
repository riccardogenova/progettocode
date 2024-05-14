/** @format */

// costruire una classe che ha come scopo il gioco dell'impiccato

// dati di cui ho bisogno:
// keyword = "qualcosa"
// attempts = numero di tentativi
// savedWords = parole salvate

class HangMan {
  constructor(keywordToDiscover) {
    this.keyword = keywordToDiscover;
    this.attempts = 6;
    this.savedLetters = [];
  }

  //controllo se la parola da indovinare ha la lettera , pusho la lettera corretta in savedLetters e rimuovo la lettera giusta dalla parola da indovinare
  guessLetter(letter) {
    if (this.keyword.includes(letter)) {
      this.savedLetters.push(letter);
      console.log('Lettera corretta');
      this.keyword = this.keyword.replace(letter, '');
    } else if (this.savedLetters.includes(letter)) {
      console.log('Lettera già indovinata');
    } else {
      this.attempts--;
      console.log(`Lettera: ${letter} sbagliata, Tentativi: ${this.attempts}`);
    }
  }

  //Se la parola da indovinare è uguale alla parola con cui si prova a indovinare allora vinci , sennò game over
  guessWord(word) {
    if (this.keyword === word) {
      console.log('Hai vinto');
    } else {
      console.log('Hai perso');
    }
  }
}

//Parola da indovinare
const parola = new HangMan('serpente');

//Tentativo di indovino parola
parola.guessWord('serpente');

//Lettere che sto provando
parola.guessLetter('p');
parola.guessLetter('f');
parola.guessLetter('p');

console.log(parola.savedLetters);

//CODICE RICCARDO
console.log('\n CODICE DI RICCARDO');

//Arrey parole randomiche
const randomKeyWords = ['ciao', 'mela', 'pippo', 'paperino', 'topolino', 'gatto', 'cane', 'cavallo', 'topo', 'topa'];

//RandomKey presa dall'arrey
const keyword = randomKeyWords[Math.floor(Math.random() * randomKeyWords.length)];

let numOfAttemps = 5;
const charactersDiscovered = [];

function test(character) {
  if (numOfAttemps === 0) {
    return 'Hai perso';
  }
  if (charactersDiscovered.includes(character)) {
    return 'Hai già inserito questa lettera';
  }
  charactersDiscovered.push(character);

  if (keyword.includes(character)) {
    charactersDiscovered.push(character);
  } else {
    numOfAttemps--;
  }

  //Split rende una stringa in un array con le parole singole
  const keywordArray = keyword.split('');

  const discoveredWord = keywordArray.map(function (ch) {
    if (charactersDiscovered.includes(ch)) {
      return ch;
    } else {
      return '*';
    }
  });
  //Transforma lo split dinuovo in una stringa
  if (discoveredWord.join('') === keyword) {
    return 'Hai vinto';
  }
  return `${discoveredWord.join('')} Tentativi rimasti: ${numOfAttemps}`;
}
