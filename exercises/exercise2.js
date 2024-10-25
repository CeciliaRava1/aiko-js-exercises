// Node library required to request data from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (personAge) => {
    rl.question("Enter your income: ", (personIncome) => {
        calculateTaxes(personAge, personIncome);
        rl.close();
    });
});

function calculateTaxes(personAge, personIncome) {
    if (personIncome >= 1000) {
        console.log(`You must pay $ ${(personIncome * 40) / 100} in taxes`);
    } else {
        console.log('You do not need to pay taxes');
    }
}
