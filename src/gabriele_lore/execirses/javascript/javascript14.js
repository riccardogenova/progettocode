/** @format */

//11_Al Clic di un bottone, aggiungi un nuovo paragrafo prima di un elemento esistente.
function change() {
  document.getElementById('scrivi').innerHTML = '<p id="testo">Testo</p>' + document.getElementById('scrivi').innerHTML;
}
document.getElementById('pulsante').addEventListener('click', change);
