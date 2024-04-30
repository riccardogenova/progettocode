var counterDisplay = document.getElementById("counter");

function increaseCounter() {
  counterDisplay.textContent = parseInt(counterDisplay.textContent) + 1;
}

function decreaseCounter() {
  counterDisplay.textContent = parseInt(counterDisplay.textContent) - 1;
}
