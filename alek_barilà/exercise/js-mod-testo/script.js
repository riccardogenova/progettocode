var testo = document.getElementById("testo");

testo.addEventListener("mouseover", function () {
  testo.classList.add("big");
});

testo.addEventListener("mouseout", function () {
  testo.classList.remove("big");
});
