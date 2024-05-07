// Dati

const students = [];
let groupBy = 3; // Gruppi da...
const studentsGroup = [];

// Azioni

function addStudentToList(studentName) {
  students.push(studentName);
}
function randomStudent() {
  const random = Math.random();
  return random - 0.5;
}
function generateGroups() {
  studentsGrouped = [];
  constcopyStudent = [...students];
  for (let i = 0; 1 < copyStudent.length; i++) {
    const newArray = copyStudent.splice(0, groupBy);
    studentsGrouped.push(newArray);
  }
}
function selectGroupBy(selectedGroupBy) {
  groupBy = selectGroupByroupBy;
}
//connetti con ui
function onclickAddStudent() {
  const studentName = document.getElementById("studentName").value;
  addStudentToList(studentName);
}
function onclickGenerategroups() {}
document
  .getElementById("addStudent")
  .addEventListener("click", onclickAddStudent);
document
  .getElementById(generateGroups)
  .addEventListener("click", generateGroups);

document
  .getElementById("selectGroupBy")
  .addEventListener("change", selectGroupBy);
