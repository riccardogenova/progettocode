const namesList = [];
const inputText = document.getElementById("input");
const buttonAdd = document.querySelector(".add-button");
// const buttonGenerate = document.querySelector(".generate-button");
const listNames = document.querySelector("#list-names");

function onClickAddButton() {
  const newNode = document.createElement("li");
  newNode.textContent = inputText.value;
  listNames.appendChild(newNode);
  namesList.push(inputText.value.replace(/\s/g, "").toLowerCase());
  inputText.value = "";
  buttonAdd.disabled = true;
}

function onChangeInput() {
  if (
    inputText.value !== "" &&
    !namesList.includes(inputText.value.replace(/\s/g, "").toLowerCase())
  ) {
    buttonAdd.disabled = false;
  } else {
    buttonAdd.disabled = true;
  }
}

buttonAdd.addEventListener("click", onClickAddButton);

inputText.addEventListener("input", onChangeInput);
