convertedValue = document.getElementById('convertedValue');

function sendValue() {
    enteredValue = document.getElementById('inputValue').value;
    convertValue(enteredValue);
};

function convertValue(enteredValue) {
    convertedValue.innerHTML = `The entered value equals ${enteredValue * 0.621371} miles`;
}
