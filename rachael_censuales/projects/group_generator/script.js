const studentList = [];
const nodeAddButton = document.getElementById("addButton");
const nodeInput = document.getElementById("input");
const nodeList = document.getElementById("list");
const nodeRandomButton = document.getElementById("nodeRandomButton");
let menu = document.getElementById("menu");
let groupsList = [];

const group = document.getElementById("groups");

function onClickAddButton() {
  const newNode = document.createElement("li");
  newNode.id = nodeInput.value;
  newNode.textContent = nodeInput.value;
  nodeList.appendChild(newNode);
  studentList.push(nodeInput.value.toLowerCase());
  groupsList.push(nodeInput.value);
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

function groupCalculator() {
  let groupSize = menu.value;
  return Math.ceil(groupsList.length / groupSize);
}

function onClickRandomButton() {
  let groupSize = menu.value;
  let groupsNumber = groupCalculator();
  let i = 0;
  while (i < groupsNumber) {
    const newNodeUl = document.createElement("ul");
    newNodeUl.textContent = "Group " + (i + 1);
    group.appendChild(newNodeUl);
    let j = 0;
    while (j < groupSize) {
      let randomNumber = Math.floor(Math.random() * groupsList.length);
      let randomElement = groupsList[randomNumber];
      let randomStudent = document.getElementById(randomElement);
      // nodeList.removeChild(randomStudent);
      const copiedElement = randomStudent.cloneNode(true);
      newNodeUl.appendChild(copiedElement);
      groupsList.splice(randomNumber, 1);
      j++;
    }
    i++;
  }
}

nodeAddButton.addEventListener("click", onClickAddButton);

nodeInput.addEventListener("input", onChangeInput);

nodeRandomButton.addEventListener("click", onClickRandomButton);
