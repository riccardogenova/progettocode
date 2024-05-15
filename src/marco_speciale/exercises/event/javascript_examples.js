/** @format */

const hiddenButton = document.getElementById('hidden');
hiddenButton.addEventListener('click', function () {
  hiddenButton.style.display = 'none';
});

const buttonC = document.getElementById('contatore');
var numero = 1;
buttonC.addEventListener('click', function contatoreB() {
  console.log(numero++);
});

//  Modifica lo stile di un elemento tramite JavaScript. Scrivi una funzione in JavaScript
//  che modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra
const para = document.getElementById('parafrago');
para.addEventListener('mouseover', function colorFontChange() {
  para.style.color = 'red';
  para.style.fontSize = '30px';
});

//  Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso,
//  quando si clicca su un bottone e mostrarlo quando si clicca su un altro
const testo = document.getElementById('text');
const buttonShow = document.getElementById('mostra');
const buttonHidden = document.getElementById('nascondi');

buttonHidden.addEventListener('click', function hide() {
  testo.style.display = 'none';
});

buttonShow.addEventListener('click', function show() {
  testo.style.display = 'block';
});

//  Cambia lo sfondo di una pagina.
// Crea un dropdown con diverse opzioni di colore.
// Quando un'opzione viene selezionata, cambia il colore di sfondo della pagina usando JavaScript
const corpo = document.querySelector('body');
const purpleB = document.getElementById('viola');
purpleB.addEventListener('click', function cambioColore() {
  corpo.style.backgroundColor = 'yellow';
});
