/** @format */

function deleteButton() {
  const button = document.querySelector('.button3');
  button.remove();
}

function aggiungi() {
  var counterElement = document.getElementById('counter');
  var currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue + 1;
}

function sottrai() {
  var counterElement = document.getElementById('counter');
  var currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue - 1;
}
