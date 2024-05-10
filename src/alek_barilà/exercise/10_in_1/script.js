/** @format */

// 1----------------------------------------------------------
const par = document.getElementById('paragrafored');

par.addEventListener('click', function () {
  par.classList.add('red');
});
// 2----------------------------------------------------------
const ghost = document.getElementById('nascondimi');

ghost.addEventListener('click', function () {
  ghost.style.display = 'none';
});
// 3----------------------------------------------------------
function aggiungiParagrafo() {
  var nuovoParagrafo = document.createElement('p');
  var testoParagrafo = document.createTextNode('SONO VIVOOO!');
  var divEsistente = document.getElementById('miodiv');
  nuovoParagrafo.appendChild(testoParagrafo);
  divEsistente.appendChild(nuovoParagrafo);
}
// 4----------------------------------------------------------
var elementoDaCambiare = document.getElementById('testoDaCambiare');

elementoDaCambiare.addEventListener('click', function () {
  elementoDaCambiare.innerText = 'hola baby';
});
// 5---------------------------------------------------------
var DaCambiare = document.getElementById('coloreDaCambiare');

DaCambiare.addEventListener('click', function () {
  DaCambiare.classList.add('red');
});
// 6---------------------------------------------------------
const Pdead = document.getElementById('muorip');

function eliminaParagrafo() {
  Pdead.style.display = 'none';
}
// 7---------------------------------------------------------
const NewWord = document.getElementById('ParolaDaCambiare');
function cambiaParola() {
  NewWord.innerText = 'BRAVO';
}
// 8---------------------------------------------------------
var trans = document.getElementById('trasforma');
var mag = document.getElementById('magia');
mag.addEventListener('click', function () {
  trans.classList.add('boom');
});
// 9--------------------------------------------------------
var csfon = document.getElementById('colsfondo');
csfon.addEventListener('mouseover', function () {
  csfon.style.backgroundColor = 'red';
});
csfon.addEventListener('mouseout', function () {
  csfon.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});
// 10-------------------------------------------------------
var trollf = document.getElementById('imgDaCambiare');

function Premi() {
  var image = document.getElementById('trollf');
  trollf.src = './img/troll.png';
}
// 11------------------------------------------------------
var elementoDaMostrareNascondere = document.getElementById('cucu');
var bottoneMostraNascondi = document.getElementById('mostranascondi');

bottoneMostraNascondi.addEventListener('click', function () {
  if (elementoDaMostrareNascondere.style.display === 'none') {
    elementoDaMostrareNascondere.style.display = 'block';
  } else {
    elementoDaMostrareNascondere.style.display = 'none';
  }
});
// 12------------------------------------------------------
var dropdown = document.getElementById('cambiacolore');

dropdown.addEventListener('change', function () {
  var selectedColor = dropdown.value;

  document.body.style.backgroundColor = selectedColor;
});
// -------------------------------------------------------
