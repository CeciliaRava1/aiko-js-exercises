// Required Node library to request data from the user
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

requestData();

function calculateTip(totalBill, tipPercentage){
    console.log(`The total tip for the bill is ${(totalBill * tipPercentage) / 100}`);
}

function requestData() {
    rl.question("Enter the total amount of the bill: ", (totalBill) => {
        rl.question("Enter your tip percentage: ", (tipPercentage) => {
            calculateTip(totalBill, tipPercentage);
        }) 
    })
}
