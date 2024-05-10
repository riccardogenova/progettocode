let counter = 0;

let aumento = document.getElementById("contenitore");

document.addEventListener("click", function () {
  counter++;
  aumento.textContent = counter;
});
