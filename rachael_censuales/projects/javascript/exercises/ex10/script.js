const clickButton = document.getElementById("clickButton");
const text = document.getElementById("text");

function elementSwap() {
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "Sostituito";
  text.parentNode.replaceChild(newParagraph, text);
}

clickButton.addEventListener("click", elementSwap);
