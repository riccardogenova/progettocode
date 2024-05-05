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
  if (
    nodeInput.value !== "" &&
    !studentList.includes(nodeInput.value.toLowerCase())
  ) {
    nodeButtonAdd.disabled = false;
  } else {
    nodeButtonAdd.disabled = true;
  }
}
function groupCalculator() {
  const selectedValue = nodeSelect.value;
  const arrayLenght = studentList.length;
  return Math.ceil(arrayLenght / selectedValue);
}
function onClickButtonGen() {
  //   nodeDivGroup.innerHTML = "";
  const groupNumber = groupCalculator();
  const selectedValue = nodeSelect.value;
  let i = 0;
  while (i < groupNumber) {
    const newNodeUl = document.createElement("ul");
    newNodeUl.textContent = "Gruppo " + (i + 1);
    nodeDivGroup.appendChild(newNodeUl);
    let j = 0;
    while (j < selectedValue) {
      let randomNumber = Math.floor(Math.random() * studentListGroup.length);
      const randomStudent = studentListGroup[randomNumber];
      const randomLi = document.getElementById(randomStudent);
      nodeList.removeChild(randomLi);
      newNodeUl.appendChild(randomLi);
      studentListGroup.splice(randomNumber, 1);
      j++;
    }
    i++;
  }
}

nodeButtonAdd.addEventListener("click", onClickButtonAdd);

nodeInput.addEventListener("input", onChangeInput);

nodeButtonGen.addEventListener("click", onClickButtonGen);
