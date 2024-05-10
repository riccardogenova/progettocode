/** @format */

const hideBtn = document.getElementById('hide-btn');
const firstText = document.getElementById('first-text');
const addBtn = document.getElementById('add-btn');
const changeBtn = document.getElementById('change-btn');
const textCss = document.getElementById('text-css');
const addCss = document.getElementById('add-css');
const modifyBtn = document.getElementById('modify-css');
const body = document.body;
const changeElement = document.getElementById('change-element');
const changeImg = document.getElementById('change-img');
const elementToChange = document.getElementById('element-to-change');
const delayBtn = document.getElementById('delay-btn');

hideBtn.addEventListener('click', function () {
  if (firstText.style.display === 'none') {
    firstText.style.display = 'block';
  } else {
    firstText.style.display = 'none';
  }
});

firstText.addEventListener('click', function () {
  if (firstText.style.color === 'white') {
    firstText.style.color = 'black';
  } else {
    firstText.style.color = 'white';
  }
});

addBtn.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'lorem ipsum dolor sit amet consectetur adipiscing elit';
  document.body.appendChild(newDiv);
});

changeBtn.addEventListener('click', function () {
  firstText.textContent = 'This is the new text';
});

addCss.addEventListener('click', function () {
  if (textCss.classList.contains('cssclass')) {
    textCss.classList.remove('cssclass');
  } else {
    textCss.classList.add('cssclass');
  }
});

modifyBtn.addEventListener('click', function () {
  if (textCss.classList.contains('cssclass')) {
    textCss.classList.remove('cssclass');
    textCss.classList.add('cssclass2');
  } else {
    textCss.classList.remove('cssclass2');
    textCss.classList.add('cssclass');
  }
});

body.addEventListener('mouseover', function () {
  body.style.backgroundColor = 'grey';
});

body.addEventListener('mouseout', function () {
  body.style.backgroundColor = '#6e6d6d';
});

changeElement.addEventListener('click', function () {
  const newElement = document.createElement('img');
  newElement.src = './image1.jpg';
  elementToChange.parentNode.replaceChild(newElement, elementToChange);
  changeImg.addEventListener('click', function () {
    newElement.src = './image2.jpg';
  });
});

delayBtn.addEventListener('click', function () {
  setTimeout(() => {
    const elementToAppear = document.createElement('h1');
    elementToAppear.textContent = 'This is the appeared element';
    document.body.appendChild(elementToAppear);
  }, 5000);
});
