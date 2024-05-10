/** @format */

var bottone = document.getElementById('bottoneContatore');
var contatore = document.getElementById('valoreContatore');

var valore = 0;
bottone.addEventListener('click', function () {
  valore++;

  contatore.textContent = valore;
});
