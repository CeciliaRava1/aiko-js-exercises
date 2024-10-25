let modifiedText = document.getElementById('modifiedText');

function submitText(){
    enteredText = document.getElementById('inputText').value;
    modifiedText.innerHTML = enteredText;
};
