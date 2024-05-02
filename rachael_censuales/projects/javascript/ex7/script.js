var clickButton = document.getElementById("clickButton");

function changeText() {
  clickButton.textContent = "ive got changed";
}

clickButton.addEventListener("click", changeText);
