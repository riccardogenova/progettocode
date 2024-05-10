/** @format */

// nascondi pulsante; mostra pulsante
const paragrafo = document.getElementById('paragrafo');

function nascondiPulsante() {
  paragrafo.style.display = 'none';
}
function mostraPulsante() {
  paragrafo.style.display = 'block';
}
// Passo sopra il paragrafo con il mouse, il p   cambia colore

paragrafo.addEventListener('mouseover', function () {
  paragrafo.style.color = 'blue';
});
paragrafo.addEventListener('mouseover', function () {
  paragrafo.style.fontFamily = 'helvetica';
});

// cambia colore sfondo al click su un elemento dropdown

function cambiaColoreSfondo() {
  var select = document.getElementById('selezionaColore');
  var coloreSelezionato = select.value;
  document.body.style.backgroundColor = coloreSelezionato;
}
const cambiaparagrafo = document.getElementById('cambiaparagrafo');

function cambiaColoreTesto() {
  cambiaparagrafo.style.color = 'red';
}
// clicca qui per nascondere questo elemento
document.getElementById('elementoDaNascondere').addEventListener('click', function () {
  this.style.display = 'none';
});
// clicca e aggiungi un paragrafo

const div_paragrafo = document.getElementById('addparagraph');

const nuovoPulsante = document.getElementById('addtext');

nuovoPulsante.addEventListener('click', function () {
  var nuovoParagrafo = document.createElement('p');
  nuovoParagrafo.textContent = 'nuovo testo';
  div_paragrafo.appendChild(nuovoParagrafo);
});
