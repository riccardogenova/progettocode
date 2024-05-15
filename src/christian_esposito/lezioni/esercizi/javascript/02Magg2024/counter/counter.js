/** @format */

const decrement = document.getElementById('decrement');
const number = document.getElementById('number');
const increment = document.getElementById('increment');

let num = 0;
number.innerHTML = num;

// function decrement
const clickDecrement = () => {
  num--;
  number.innerHTML = num;
};
decrement.addEventListener('click', clickDecrement);

// function increment
const clickIncrement = () => {
  num++;
  number.innerHTML = num;
};

increment.addEventListener('click', clickIncrement);
