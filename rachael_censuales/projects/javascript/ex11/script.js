const text = document.getElementById("text");
const clickButton = document.getElementById("clickButton");

function modifyCss() {
  text.style.backgroundColor = "red";
}
clickButton.addEventListener("click", modifyCss);
