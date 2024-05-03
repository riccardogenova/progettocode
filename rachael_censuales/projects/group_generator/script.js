const studentList = [];
const nodeAddButton = document.getElementById("addButton");
const nodeInput = document.getElementById("input");
const nodeList = document.getElementById("list");
const nodeRandomButton = document.getElementById("nodeRandomButton");

function onClickAddButton() {
  const newNode = document.createElement("li");
  newNode.textContent = nodeInput.value;
  nodeList.appendChild(newNode);
  studentList.push(nodeInput.value.toLowerCase());
  nodeInput.value = "";
  nodeAddButton.disabled = true;
}

function onChangeInput() {
  if (
    nodeInput.value !== "" &&
    !studentList.includes(nodeInput.value.toLowerCase())
  ) {
    nodeAddButton.disabled = false;
  } else {
    nodeAddButton.disabled = true;
  }
}

nodeAddButton.addEventListener("click", onClickAddButton);
nodeInput.addEventListener("input", onChangeInput);

function onClickRandomButton() {}

nodeRandomButton.addEventListener("click", onClickRandomButton);
