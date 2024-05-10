/** @format */

var bottone = document.getElementById('bottone');
var numeriElement = document.getElementById('numeri');

var numeri = 0;

bottone.addEventListener('click', function () {
  numeri++;
  numeriElement.textContent = numeri;
});
