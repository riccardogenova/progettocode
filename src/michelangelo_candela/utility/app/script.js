/** @format */

'use strict';

const btnAddStudents = document.getElementById('btnAddStudents');
const textInputStudents = document.getElementById('textInputStudents');
const listStudents = document.getElementById('listStudents');
const codeStudents = [];

function addStudentNames() {
  const newStudent = textInputStudents.value.trim();
  const newList = document.createElement('li');
  newList.textContent = newStudent;
  listStudents.appendChild(newList);
  codeStudents.push(newStudent);
  textInputStudents.value = '';

  newList.addEventListener('click', function () {
    listStudents.removeChild(newList);
    const index = codeStudents.indexOf(newStudent);
    if (index !== -1) {
      codeStudents.splice(index, 1);
      groupedStudentsList.innerHTML = '';
    }
  });
}
const btnResetStudents = document.getElementById('btnResetStudents');

function resetStudentList() {
  listStudents.innerHTML = '';
  codeStudents.length = 0;
  groupedStudentsList.innerHTML = '';
}

btnResetStudents.addEventListener('click', resetStudentList);

function validateName(name) {
  return (
    name.trim() !== '' && name.length >= 2 && name.length <= 20 && !/\d/.test(name) && !codeStudents.includes(name)
  );
}

function nameCheck() {
  const name = textInputStudents.value.trim();
  const userIcon = document.getElementById('userIcon');
  if (validateName(name)) {
    btnAddStudents.disabled = false;
    userIcon.className = 'fa fa-user';
    textInputStudents.style.borderColor = 'lightgreen';
  } else {
    window.alert(
      'Il nome non è valido. Assicurati che sia composto solo da lettere e che sia compreso tra 2 e 20 caratteri. Inoltre, controlla che non ci siano nomi duplicati.',
    );
    btnAddStudents.disabled = true;
    userIcon.className = 'fa fa-user-times';
    textInputStudents.style.borderColor = 'lightcoral';
  }
}

textInputStudents.addEventListener('blur', nameCheck);
btnAddStudents.addEventListener('click', addStudentNames);

const groupedStudentsList = document.getElementById('groupedStudents');
const groupSizeSelect = document.getElementById('groupSize');
const btnGenerateGroups = document.getElementById('btnGenerateGroups');

function generateGroups() {
  if (codeStudents.length >= groupSizeSelect.value) {
    const groupSize = Number(groupSizeSelect.value);
    const students = codeStudents.slice().sort(function () {
      return Math.random() - 0.5;
    });
    const numGroups = Math.ceil(students.length / groupSize);
    groupedStudentsList.innerHTML = '';

    for (let i = 0; i < numGroups; i++) {
      const group = students.slice(i * groupSize, (i + 1) * groupSize);
      const groupItem = document.createElement('li');
      groupItem.textContent = 'Gruppo ' + (i + 1) + ': ' + group.join(',');
      groupedStudentsList.appendChild(groupItem);
    }
  } else {
    window.alert('Devi avere almeno ' + groupSizeSelect.value + ' studenti nella lista per generare i gruppi.');
  }
}

btnGenerateGroups.addEventListener('click', generateGroups);
