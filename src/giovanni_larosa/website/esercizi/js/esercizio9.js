/** @format */

var titolo = document.getElementById('titolo');
var body = document.body;
function cambiacolore() {
  titolo.style.color = 'red';
}
titolo.addEventListener('mouseover', cambiacolore);
