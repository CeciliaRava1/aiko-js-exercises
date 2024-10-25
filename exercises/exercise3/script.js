buttonIncrement = document.getElementById('buttonIncrement');
buttonDecrement = document.getElementById('buttonDecrement');
counterSpan = document.getElementById('counter');

let counter = 0;

buttonIncrement.addEventListener('click', registerClickButtonIncrement);
buttonDecrement.addEventListener('click', registerClickButtonDecrement);

function registerClickButtonIncrement() {
    counter++;
    counterSpan.innerHTML = counter;
}

function registerClickButtonDecrement() {
    counter--;
    counterSpan.innerHTML = counter;
}


