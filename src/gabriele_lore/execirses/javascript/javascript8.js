/** @format */

//5_Al Clic, aggiungi una classe CSS a un elemento.
var container = document.getElementById('contenitore');
function change() {
  container.setAttribute('class', 'cont');
}
document.getElementById('pulsante').addEventListener('click', change);
