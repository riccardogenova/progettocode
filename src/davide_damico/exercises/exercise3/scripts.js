/** @format */

//Esercizio 1 - cambiare colore al click
const paragrafo = document.getElementById('color-text');

function changeColor() {
  paragrafo.style.color = 'red';
}

paragrafo.addEventListener('click', changeColor);

//Esercizio 2 - nascondere al click
const paragrafo2 = document.getElementById('hide-text');

function hideText() {
  paragrafo2.style.display = 'none';
}

paragrafo2.addEventListener('click', hideText);

//Esercizio 3 - aggiungere un'elemento al div
const container = document.querySelector('.container');
const newElement = document.createElement('p');

function addElement() {
  newElement.textContent = 'Elemento aggiunto al click sul div';
  container.appendChild(newElement);
}

newElement.addEventListener('click', addElement);

//Esercizio 4 - cambia il testo di un elemento al click
const paragrafo3 = document.getElementById('change-text');

function changeText() {
  paragrafo3.textContent = 'Testo cambiato al click';
}

paragrafo3.addEventListener('click', changeText);

//Esercizio 5 - aggiungi una classe css a un elemento al click
const paragrafo4 = document.getElementById('add-class');

function addClass() {
  paragrafo4.classList.add('new-class');
}

paragrafo4.addEventListener('click', addClass);

//Esercizio 6 - rimuovi un'altro elemento al click del bottone
const elementRemoved = document.getElementById('deleted-element');

function removeElement() {
  elementRemoved.remove();
}

elementRemoved.addEventListener('click', removeElement);

//Esercizio 7 - sostituisci un elemento con un nuovo elemento al click del bottone
const newElement2 = document.createElement('p');
const elementReplaced = document.getElementById('replaced-element');
function replaceElement() {
  newElement2.textContent = 'Nuovo elemento';
  elementReplaced.replaceWith(newElement2);
}

elementReplaced.addEventListener('click', replaceElement);

//Esercizio 8 - modifica una proprietà css di un elemento al click di un'altro elemento
const elementToAdd = document.getElementById('add-style');
const elementStyle = document.getElementById('style-element');
function changeStyle() {
  elementStyle.style.color = 'blue';
}

elementToAdd.addEventListener('click', changeStyle);

//Esercizio 9 - cambia il colore di sfondo di un elemento quando il mouse passa sopra
const changeBackground = document.getElementById('change-background');
function changeBackgroundColor() {
  changeBackground.style.backgroundColor = 'green';
}

changeBackground.addEventListener('mouseover', changeBackgroundColor);
function changeBackgroundColor2() {
  changeBackground.style.backgroundColor = 'white';
}
changeBackground.addEventListener('mouseout', changeBackgroundColor2);

//Esercizio 10 - cambia l'immagine visualizzata col click sul bottone
const img = document.getElementById('img');
function changeImg() {
  img.src = '../../personal_stuff/images_html_final_model_page/sito-web-1-b.webp';
}

img.addEventListener('click', changeImg);

//Esercizio 11 - aggiungi un paragrafo prima di un elemento esistente al click del pulsante
const button = document.getElementById('add-p');
const newParagraph = document.createElement('p');
function addParagraph() {
  newParagraph.textContent = 'Nuovo paragrafo';
  button.before(newParagraph);
}

button.addEventListener('click', addParagraph);

//Esercizio 12 - mostra o nascondi un elemento ogni volta che si clicca su un bottone
const toggleText = document.getElementById('toggle-text');
const hideBtn = document.getElementById('hide-btn');
const showBtn = document.getElementById('show-btn');

function hide() {
  toggleText.style.display = 'none';
}

function show() {
  toggleText.style.display = 'block';
}

hideBtn.addEventListener('click', hide);
showBtn.addEventListener('click', show);

//Esercizio 13 - aggiungi un elemento al dom tramite un pulsante con un ritrado di 5 secondi
const addElementWithDelay = document.getElementById('add-element-with-delay');
const newElement3 = document.createElement('p');

setTimeout(addElementWithDelay2, 5000);
function addElementWithDelay2() {
  newElement3.textContent = 'Nuovo elemento';
  addElementWithDelay.before(newElement3);
}
