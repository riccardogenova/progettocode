/** @format */
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
button.addEventListener('click', aggiungi);
button2.addEventListener('click', sottrai);
button3.addEventListener('click', deleteButton);

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
