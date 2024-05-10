/** @format */

//Esercizio 1

const toggleText = document.getElementById('toggle-text');

function hide() {
  toggleText.style.display = 'none';
}

function show() {
  toggleText.style.display = 'block';
}

//Esercizio 2

toggleText.onmouseover = function () {
  toggleText.style.backgroundColor = 'rgb(44, 44, 44)';
  toggleText.style.border = '1px solid black';
  toggleText.style.borderRadius = '12px';
  toggleText.style.padding = '10px';
  toggleText.style.color = 'white';
  toggleText.style.fontSize = '24px';
};

toggleText.onmouseout = function () {
  toggleText.style.backgroundColor = 'white';
  toggleText.style.border = 'none';
  toggleText.style.color = 'black';
  toggleText.style.padding = '0px';
  toggleText.style.fontSize = '34px';
};

//Esercizio 3

const menuBackground = document.getElementById('background');

menuBackground.onchange = function () {
  if (menuBackground.value == 1) {
    document.body.style.backgroundColor = 'white';
  } else if (menuBackground.value == 2) {
    document.body.style.backgroundColor = 'green';
  } else if (menuBackground.value == 3) {
    document.body.style.backgroundColor = 'red';
  } else if (menuBackground.value == 4) {
    document.body.style.backgroundColor = 'blue';
  } else if (menuBackground.value == 5) {
    document.body.style.backgroundColor = 'orange';
  }
};
