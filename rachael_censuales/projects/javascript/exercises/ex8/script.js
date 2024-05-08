var text = document.getElementById("text");

function addClass() {
  text.classList.toggle("welcome");
}

text.addEventListener("click", addClass);
