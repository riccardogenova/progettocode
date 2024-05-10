/** @format */

const numberChoices = document.getElementById('number-choices');
const userInput = document.getElementById('user-input');
const addBtn = document.getElementById('add-btn');
const listItems = document.getElementById('list-items');
const randomBtn = document.getElementById('randomize-btn');
const groupList = document.getElementById('group-list');
const olElement = document.querySelector('ol');
const students = [];

addBtn.addEventListener('click', function () {
  const userText = userInput.value;

  if (userText === '') {
    alert('Inserici un nome!');
  } else {
    const newElement = document.createElement('li');
    newElement.textContent = userText;
    listItems.appendChild(newElement);
    students.push(userText);
    userInput.value = '';
    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));
  }
});

userInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});

userInput.addEventListener('keyup', function () {
  const userValue = userInput.value;
  let isDuplicate = false;
  addBtn.disabled = false;

  for (let i = 0; i < students.length; i++) {
    if (students[i].toLowerCase() === userValue.toLowerCase()) {
      isDuplicate = true;
      addBtn.disabled = true;
      break;
    }
  }
});

randomBtn.addEventListener('click', function () {
  groupList.innerHTML = '';
  const chosedNumber = parseInt(numberChoices.value);
  const studentsCopy = [...students];

  while (studentsCopy.length > 0) {
    const group = [];

    for (let i = 0; i < chosedNumber && studentsCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * studentsCopy.length);
      group.push(studentsCopy[randomIndex]);
      studentsCopy.splice(randomIndex, 1);
    }

    let groupElement = document.createElement('li');
    groupElement.textContent = group.join(', ');
    groupList.appendChild(groupElement);
    localStorage.setItem('group', group);
  }
});
