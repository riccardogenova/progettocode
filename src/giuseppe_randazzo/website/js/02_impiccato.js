/** @format */

const keyword = 'testardi';
let numOfAttempts = 5;
const charactersDiscovered = [];

function test(charachter) {
  if (numOfAttempts === 0) return 'HAI PERSO!';
  if (charactersDiscovered.includes(charachter)) return 'HAI GIA` DICHIARATO';
  //    if (charachter === keyword[numOfAttempts]) charactersDiscovered.push(charachter);

  charactersDiscovered.push(charachter);
  if (!keyword.includes(charachter)) numOfAttempts = numOfAttempts - 1;
  //      else numOfAttempts = numOfAttempts - 1;

  const keywordarray = keyword.split('');
  const discoveredWord = keywordarray.map(function (ch) {
    if (charactersDiscovered.includes(ch)) return ch;
    return '-';
  });
  return `${discoveredWord.join('')} TENTATIVI RIMASTI: ${numOfAttempts}`;
}
