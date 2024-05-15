/** @format */

const studentList = [];

let groupsList = [];

const nodeAddButton = document.getElementById('addButton');
const nodeInput = document.getElementById('input');
const nodeList = document.getElementById('list');
const nodeRandomButton = document.getElementById('nodeRandomButton');
let menu = document.getElementById('menu');

const group = document.getElementById('groups');

function onClickAddButton() {
  const newNode = document.createElement('li');
  newNode.id = nodeInput.value;
  newNode.textContent = nodeInput.value;
  nodeList.appendChild(newNode);
  studentList.push(nodeInput.value.toLowerCase());
  groupsList.push(nodeInput.value);
  nodeInput.value = '';
  nodeAddButton.disabled = true;
}

function onChangeInput() {
  if (nodeInput.value !== '' && !studentList.includes(nodeInput.value.toLowerCase())) {
    nodeAddButton.disabled = false;
  } else {
    nodeAddButton.disabled = true;
  }
}

function groupCalculator() {
  let groupSize = menu.value;

  return Math.ceil(groupsList.length / groupSize); // Arrotondato per eccesso
}

function onClickRandomButton() {
  group.innerHTML = '';
  let groupSize = menu.value;
  let groupsNumber = groupCalculator();
  let studentsCopy = [...groupsList];

  return Math.ceil(groupsList.length / groupSize);
}

function onClickRandomButton() {
  let groupSize = menu.value;
  let groupsNumber = groupCalculator();

  let i = 0;
  while (i < groupsNumber) {
    const newNodeUl = document.createElement('ul');
    newNodeUl.textContent = 'Group ' + (i + 1);
    group.appendChild(newNodeUl);
    let j = 0;
  }

  while (j < groupSize && studentsCopy.length > 0) {
    let randomNumber = Math.floor(Math.random() * studentsCopy.length);
    let randomElement = studentsCopy[randomNumber];

    while (j < groupSize) {
      let randomNumber = Math.floor(Math.random() * groupsList.length);
      let randomElement = groupsList[randomNumber];

      let randomStudent = document.getElementById(randomElement);
      // nodeList.removeChild(randomStudent);
      const copiedElement = randomStudent.cloneNode(true);
      newNodeUl.appendChild(copiedElement);

      studentsCopy.splice(randomNumber, 1);

      groupsList.splice(randomNumber, 1);

      j++;
    }
    i++;
  }
}

function onEnterPress(event) {
  if (event.key === 'Enter' && nodeInput.value !== '' && !studentList.includes(nodeInput.value.toLowerCase())) {
    onClickAddButton();
  }
}

nodeInput.addEventListener('keypress', onEnterPress);

nodeAddButton.addEventListener('click', onClickAddButton);

nodeInput.addEventListener('input', onChangeInput);

nodeRandomButton.addEventListener('click', onClickRandomButton);
