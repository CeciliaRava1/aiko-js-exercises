// Node library required to request data from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function requestNumber() {
    rl.question("Enter a number: ", (enteredNumber) => {
        fizzBuzz(enteredNumber);
    }); // Allows data entry via console.
}

requestNumber();

function fizzBuzz(enteredNumber) {
    rl.close();
    if (enteredNumber % 3 === 0 && enteredNumber % 5 === 0) {
        console.log('fizzbuzz');
    } else if (enteredNumber % 5 === 0) {
        console.log('buzz');
    } else if (enteredNumber % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(enteredNumber);
    }
}
