/** @format */

function deletebutton() {
  const eliminabottone = document.getElementById('deleted');

  eliminabottone.remove(deletebutton);
}
let contatore = 0;
function aumenta() {
  contatore++;
  document.getElementById('valore').textContent = contatore;
}
function reset() {
  contatore = 0;
  document.getElementById('valore').textContent = contatore;
}
