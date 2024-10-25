// Validate Password: Write a function that checks if a password is correct based on two predefined options.
// Instructions:
//      a. Write a function called validPassword that takes a string as an argument.
//      b. If the string matches one of the two defined passwords, the function should return a message to the console.
//      c. If the string differs from these values, it should return another message to the console.


// Node library required to request data from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const predefinedPassword1 = 'holamundo';
const predefinedPassword2 = 'chaumundo';

function validPassword(inputPassword, predefinedPassword1, predefinedPassword2) {
    if (inputPassword === predefinedPassword1 || inputPassword === predefinedPassword2) {
        console.log('Access granted to the system');
        rl.close(); // Closes the input via console.
    } else {
        console.log('The entered password is incorrect. Please try again');
        requestPassword();
    }
}

function requestPassword() {
    rl.question("Enter the password to access the system: ", (inputPassword) => {
        validPassword(inputPassword, predefinedPassword1, predefinedPassword2);
    }); // Allows input via console.
}

requestPassword();




