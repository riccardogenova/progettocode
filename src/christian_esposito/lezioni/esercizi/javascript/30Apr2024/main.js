/** @format */

// EXERCISES 1
const text1 = document.getElementById('ex1');
const btnColor = document.getElementById('btn_ex1');

// const redTextEx1 = () => {
//   text1.style.color = 'red';
// };

btnColor.addEventListener('click', function redT() {
  text1.style.color = 'red';
});
// EXERCISES 2

const cube = document.getElementById('ex2');
const btnHidden = document.getElementById('btn_hidden');

btnHidden.addEventListener('click', function cubeHidden() {
  cube.style.display = 'none';
});

// EXERCISES 3

const ex3 = document.getElementById('ex3');
const btnEx3 = document.getElementById('btn_ex3');

btnEx3.addEventListener('click', function () {
  const newP = document.createElement('p');
  newP.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  document.body.insertBefore(newP, ex3);
});

// EXERCISES 4

const ex4Text = document.getElementById('ex4_text');
const btnEx4 = document.getElementById('btn_ex4');
btnEx4.addEventListener('click', function () {
  ex4Text.innerHTML = "Facciamo l'esercizio 5";
});

// EXERCISES 5

const ex5 = document.getElementById('ex5');
const btn5 = document.getElementById('btn_ex5');
btn5.addEventListener('click', function () {
  ex5.classList.add('class_add');
});

// EXERCISES 6

const btnEx6 = document.getElementById('btn_ex6');
btnEx6.addEventListener('click', function () {
  text1.remove();
});

// EXERCISES 7

// const pEx7 = document.getElementById("ex7")
const btnEx7 = document.getElementById('btn_ex7');
const textEx7 = document.getElementById('text_ex7');

const sostituzioneElement = (element, html) => {
  element.outerHTML = html;
};

btnEx7.addEventListener('click', function () {
  sostituzioneElement(
    textEx7,
    '<button>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident cupiditate voluptatibus sint perferendis ipsum,a iste veritatis iusto adipisci non dignissimos quod quia repudiandae optio excepturi soluta corrupti.Error, iste?</div>',
  );
});

// EXERCISES 8

const btnEx8 = document.getElementById('btn_ex8');

const changeStyleColor = () => {
  btnEx8.style.backgroundColor = 'yellow';
};

btnEx8.addEventListener('click', changeStyleColor);

// EXERCISES 9

const cubeColor = document.getElementById('color_ex9');

const changeCubeColor = () => {
  cubeColor.style.backgroundColor = 'red';
};

cubeColor.addEventListener('mouseover', changeCubeColor);

// EXERCISES 10
const imgEx10 = document.getElementById('img_ex10');
const textEx10 = document.getElementById('text_ex10');

const changeImg = () => {
  textEx10.innerHTML = 'TI AVEVO DETTO DI NON TOCCARLO';
  imgEx10.src = 'https://static.nexilia.it/mangaforever/2022/04/hitek_0f97929746fe2146e9cf7817b278c4c2_1580822679.png';
};

imgEx10.addEventListener('click', changeImg);

// EXERCISES 11

const elementEx11 = document.getElementById('ex11');
const newEl = document.getElementById('newEl11');
const btnEx11 = document.getElementById('btn_ex11');

const addElement = () => {
  const newP = document.createElement('p');
  newP.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  elementEx11.insertBefore(newP, newEl);
};

btnEx11.addEventListener('click', addElement);

// EXERCISES 13

// EXERCISES 14

const cubeEx14 = document.getElementById('ex14');
const btnHiddenEx14 = document.getElementById('btn_hidden_ex14');
const btnShowEx14 = document.getElementById('btn_show_ex14');

const hiddenCubeEx14 = () => {
  cubeEx14.style.display = 'none';
};

const showCubeEx14 = () => {
  cubeEx14.style.display = 'block';
};

btnHiddenEx14.addEventListener('click', hiddenCubeEx14);
btnShowEx14.addEventListener('click', showCubeEx14);

// EXERCISES 15

const elEx15 = document.getElementById('ex15');
const addElementEx15 = document.getElementById('addElement');
const btnEx15 = document.getElementById('btn_ex15');

const newElementEx15 = () => {
  const newP = document.createElement('p');
  newP.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  setTimeout(() => {
    elEx15.insertBefore(newP, addElementEx15);
  }, 5000);
};

btnEx15.addEventListener('click', newElementEx15);
