/** @format */

const randomKeywords = ['pippolo', 'poppolo', 'puppolo', 'peppolo', 'pappolo', 'poppola', 'poppoli'];
const keyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];

let numOfAttempts = 5;
const charactersDiscovered = [];

function test(character) {
  if (numOfAttempts === 0) return 'HAI PERSO!';
  if (charactersDiscovered.includes(character)) return 'Hai già inserito questa lettera';

  charactersDiscovered.push(character);
  if (!keyword.includes(character)) numOfAttempts = numOfAttempts - 1;

  const keywordArray = keyword.split('');
  const discoveredWord = keywordArray.map(function (ch) {
    if (charactersDiscovered.includes(ch)) return ch;
    return '*';
  });
  if (discoveredWord.join('') === keyword) return 'HAI VINTO!';
  return `${discoveredWord.join('')} TENTATIVI RIMASTI: ${numOfAttempts}`;
}

test('a');
