const bottone = document.getElementById("my-button");
bottone.addEventListener("click", function incrementbutton() {
  bottone.textContent = parseInt(bottone.textContent) + 1;
});
