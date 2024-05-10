/** @format */

const bottone = document.getElementById('bottone');
var titolo = document.getElementById('titolo');
function cambiacolore() {
  titolo.style.color = 'red';
}
bottone.addEventListener('click', cambiacolore);
