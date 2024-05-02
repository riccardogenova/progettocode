let counter = document.getElementById("button");

function incrementa() {
  let currentCount = parseInt(counter.textContent);
  currentCount++;
  counter.textContent = currentCount;
}
