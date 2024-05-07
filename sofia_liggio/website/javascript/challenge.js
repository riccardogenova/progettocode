/*
var lista = document.getElementById("list");
var bottone = document.getElementById("button");
var casella = document.getElementById("name");
var nomi = [];

var bottoneGruppo = document.getElementById("gruppi");
var dropdown = document.getElementById("numero");

function aggiungiAllaLista() {
  var elemento = document.createElement("li");
  elemento.innerHTML = casella.value;
  nomi.push(casella.value);
  lista.appendChild(elemento);
}

function raggruppa() {
  var indice = 0;
}

bottone.addEventListener("click", aggiungiAllaLista);
*/

// DATI
const students = [
  "Raffaele",
  "Gianluca",
  "Marco",
  "Rachele",
  "Sofia",
  "Noemi",
  "Giuseppe",
];
let groupBy = 3; // il numero per cui si vuole raggruppare gli studenti
const studentsGrouped = [
  "Gianluca",
  "Marco",
  "Rachele",
  "Sofia",
  "Noemi",
  "Giuseppe",
];

// AZIONI

function addStudentToList(studentName) {
  students.push(studentName);
}

function randomStudent() {
  const random = Math.random();
  return rando - 0.5;
}

function generateGroups() {
  const copyStudents = [...students]; // oppure si può copiare con students.slice()
  copyStudents.sort(randomStudent);
  for (let i = 0; i < copyStudents.length; i++) {
    const newArray = copyStudents.splice(0, groupBy); // lo splice vuole la posizione di partenza e il num di elementi da eliminare
    studentsGrouped.push(newArray);
  }
}

function selectGroupBy(groupBy) {
  groupBy = selectGroupBy;
}

// CONNECT BUSINESS LOGIC TO UI
function okClickAddStudent() {
  const studentName = document.getElementById("student-name").ariaValueMax;
  addStudentToList(studentName);
}

function onClickGenerateGroups() {
  const groupBy = document.getElementById;
}
document
  .getElementById("add-student")
  .addEventListener("click", onClickAddStudent);
document
  .getElementById("generateGroups")
  .addEventListener("click", generateGroups);

getElementById;
