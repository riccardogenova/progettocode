/** @format */

const counter = document.getElementById('counter');
let button = document.getElementById('button');

function increaseCounter() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

button.addEventListener('click', increaseCounter);
