// DATI
const students = [
  "Raffaele",
  "Gianluca",
  "Sameuele",
  "Rachele",
  "Sofia",
  "Noemi",
];
let groupBy = 3;
const studentsGrouped = [["Raffaele", "Samuele"][("Sofia", "Noemi")]];

// ACTIONS
function addStudentToList(studentName) {
  students.push(studentName);
}
function randomStudents() {
  const random = Math.random();
  return random - 0.5;
}
function generateGroup() {
  const copyStudents = [...students];
  copyStudents.sort(randomStudents);
  studentsGrouped = [];
  for (let i = 0; i < copyStudents.length; i++) {
    const newArray = copyStudents.splice(0, groupBy);
    studentsGrouped.push(newArray);
  }
}
function selectGroupBy(selectedGroupBy) {
  groupBy = selectedGroupBy;
}

function onClickAddStudents() {
  const studentName = document.getElementById("studentname").value;
  addStudentToList(studentName);
}
function onClickGenerateGroup() {
  const groupBy = document.getElementById("groupBy").value;
  selectGroupBy(groupBy);
}
// CONNECT TO UI

document
  .getElementById("addstudent")
  .addEventListener("click", onClickAddStudents);

document
  .getElementById("generateGroup")
  .addEventListener("click", generateGroup);

document
  .getElementById("groupBy")
  .addEventListener("change", onClickGenerateGroup);
