/** @format */

const bottoneCambiaColore = document.getElementById('cambiaColore');
const paragrafo = document.getElementById('testo');
bottoneCambiaColore.addEventListener('click', coloreCambiato);
function coloreCambiato() {
  paragrafo.style.color = 'purple';
}

const nascondiBottone = document.getElementById('nascondiBottone');
nascondiBottone.addEventListener('click', bottoneNascosto);
function bottoneNascosto() {
  paragrafo.style.visibility = 'hidden';
}

const mostraBottone = document.getElementById('mostraBottone');
mostraBottone.addEventListener('click', bottoneShow);
function bottoneShow() {
  paragrafo.style.visibility = 'visible';
}

const aggiungiParagrafo = document.getElementById('aggiungiParagrafo');
aggiungiParagrafo.addEventListener('click', addnewParagraph);
function addnewParagraph() {
  var nuovoParagrafo = document.createElement('p');
  nuovoParagrafo.textContent = 'new';
  document.body.appendChild(nuovoParagrafo);
}

const bottoneCambiaTesto = document.getElementById('cambiaIltesto');

bottoneCambiaTesto.addEventListener('click', function () {
  const testoDaCambiare = document.getElementById('testo');
  testoDaCambiare.textContent = 'candela michelangelo';
});
