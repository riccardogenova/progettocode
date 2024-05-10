/** @format */

//7_ Al Clic di un bottone, sostituisci un elemento esistente con un nuovo elemento.
var container = document.getElementById('contenitore');
function change() {
  container.innerHTML = '<img src="../../lessons/res/DOM.png"/>';
}
document.getElementById('pulsante').addEventListener('click', change);
