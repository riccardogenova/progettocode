const studentList = [];
const studentListGroup = [];
const nodeInput = document.getElementById("nome");
const nodeButtonAdd = document.getElementById("aggiungi");
const nodeList = document.getElementById("listaNomi");
const nodeButtonGen = document.getElementById("genera");
const nodeSelect = document.getElementById("select");
const nodeDivGroup = document.getElementById("group-box");

function onClickButtonAdd() {
  const newNode = document.createElement("li");
  newNode.id = nodeInput.value;
  newNode.textContent = nodeInput.value;
  nodeList.appendChild(newNode);
  studentList.push(nodeInput.value.toLowerCase());
  studentListGroup.push(nodeInput.value);
  nodeInput.value = "";
  nodeButtonAdd.disabled = true;
}
function onChangeInput() {
  const isInputEmpty = nodeInput.value === "";
  const isAlreadyInList = studentList.includes(nodeInput.value.toLowerCase());
  if (!isInputEmpty && !isAlreadyInList) nodeButtonAdd.disabled = false;
  else nodeButtonAdd.disabled = true;
}
function getNumOfGroup() {
  const selectedValue = nodeSelect.value;
  const arrayLenght = studentList.length;
  return Math.ceil(arrayLenght / selectedValue);
}
function onClickButtonGen() {
  nodeDivGroup.innerHTML = "";
  const groupNumber = groupCalculator();
  let studentListGroupCopy = [...studentListGroup];
  const selectedValue = nodeSelect.value;
  let i = 0;
  while (i < groupNumber) {
    const newNodeUl = document.createElement("ul");
    newNodeUl.textContent = "Gruppo " + (i + 1);
    nodeDivGroup.appendChild(newNodeUl);
    let j = 0;
    while (j < selectedValue && studentListGroupCopy.length > 0) {
      let randomNumber = Math.floor(
        Math.random() * studentListGroupCopy.length
      );
      const randomStudent = studentListGroupCopy[randomNumber];
      const randomLi = document.getElementById(randomStudent);
      const copiedLi = randomLi.cloneNode(true);
      newNodeUl.appendChild(copiedLi);
      studentListGroupCopy.splice(randomNumber, 1);
      j++;
    }
    i++;
  }
}
function onPressEnter(event) {
  if (
    event.key === "Enter" &&
    nodeInput.value !== "" &&
    !studentList.includes(nodeInput.value.toLowerCase())
  ) {
    onClickButtonAdd();
  }
}

nodeButtonAdd.addEventListener("click", onClickButtonAdd);

nodeInput.addEventListener("input", onChangeInput);

nodeButtonGen.addEventListener("click", onClickButtonGen);

nodeInput.addEventListener("keypress", onPressEnter);
