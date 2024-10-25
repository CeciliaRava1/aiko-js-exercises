let spanVowelCount = document.getElementById('vowelCount');

vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;

function submitWord(){
    enteredWord = document.getElementById('inputWord').value;
    countVowels(enteredWord);
};

function countVowels(enteredWord){
    vowelCount = 0;
    for(i=0; i <= enteredWord.length; i++){
        if(vowels.includes(enteredWord[i])){
            vowelCount++;
        }
    }
    spanVowelCount.innerHTML = `The word has ${vowelCount} vowels`;
}
