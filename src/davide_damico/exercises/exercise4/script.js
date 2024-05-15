/** @format */

const nameList = [];
const nameListGroup = [];
const inputField = document.getElementById('input');
const addButton = document.querySelector('.add-button');
const namesList = document.getElementById('list-names');
const generateButton = document.querySelector('.generate-button');
const groupsSelect = document.querySelector('.groups');

addButton.addEventListener('click', onClickAddButton);
inputField.addEventListener('input', onInputChange);
generateButton.addEventListener('click', onClickGenerateButton);
inputField.addEventListener('keypress', onKeyPress);

function onClickAddButton() {
  const newName = document.createElement('li');
  newName.id = inputField.value;
  newName.textContent = inputField.value;
  namesList.appendChild(newName);
  nameList.push(inputField.value.toLowerCase());
  nameListGroup.push(inputField.value);
  inputField.value = '';
  addButton.disabled = true;
}

function onInputChange() {
  const isInputEmpty = inputField.value === '';
  const isAlreadyInList = nameList.includes(inputField.value.toLowerCase());
  if (!isInputEmpty && !isAlreadyInList) addButton.disabled = false;
  else addButton.disabled = true;
}

function getNumOfGroups() {
  return parseInt(groupsSelect.value);
}

function onClickGenerateButton() {
  const numGroups = getNumOfGroups();
  const groupSize = Math.ceil(nameList.length / numGroups);
  const shuffledList = shuffleArray(nameListGroup.slice());
  namesList.innerHTML = '';

  for (let i = 0; i < numGroups; i++) {
    const group = shuffledList.slice(i * groupSize, (i + 1) * groupSize);
    const groupElement = document.createElement('ol');
    groupElement.textContent = `Group ${i + 1}`;
    group.forEach(name => {
      const nameElement = document.createElement('li');
      nameElement.textContent = name;
      groupElement.appendChild(nameElement);
    });
    namesList.appendChild(groupElement);
  }
}

function onKeyPress(event) {
  if (event.key === 'Enter' && inputField.value !== '' && !nameList.includes(inputField.value.toLowerCase())) {
    onClickAddButton();
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
