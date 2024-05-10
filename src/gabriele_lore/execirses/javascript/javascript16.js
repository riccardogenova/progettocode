/** @format */

//15_ Aggiungi un elemento al DOM dopo un ritardo di 5 secondi.
function write() {
  const elemento = document.createElement('p');
  elemento.textContent = 'testo';
  document.getElementById('body-content').appendChild(elemento);
}
setTimeout(write, 5000);
