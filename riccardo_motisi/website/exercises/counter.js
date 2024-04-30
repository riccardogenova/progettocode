let counter = document.getElementById("counter");

function incrementa() {
  let currentCount = parseInt(counter.textContent);
  currentCount++;
  counter.textContent = currentCount;
}
