var clickButton = document.getElementById("clickButton");

function addParagraph() {
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "paragrafo";
  document.body.appendChild(newParagraph);
}

clickButton.addEventListener("click", addParagraph);
