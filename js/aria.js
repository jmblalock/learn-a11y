const increment = document.querySelector('#inc');
const decrement = document.querySelector('#dec');
const counter = document.querySelector('#count');

let count = 0;

increment.addEventListener('click', add);
decrement.addEventListener('click', subtract);

function add() {
    count = count + 10;
    setCounter();
}

function subtract() {
    count = count - 10;
    setCounter();
}

function setCounter() {
    counter.innerHTML = count;
}

setCounter();