const text = document.getElementById("text");

function backgroundColorChange() {
  text.style.backgroundColor = "black";
}

text.addEventListener("mouseover", backgroundColorChange);
