/*Task: 

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

-Given a string, detect whether or not it is a pangram. 
-Return True if it is, False if not.
-Ignore numbers and punctuation.

*/



// Array for alphabet letters 
const alphabetLetters = ["a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let sentence;

let result;

document.querySelector("#submitButton").addEventListener("click", getInputToVariable); 
document.querySelector("#submitButton").addEventListener("click", checkSentence); 
document.querySelector("#submitButton").addEventListener("click", showResult); 
//

function getInputToVariable(){
    sentence = document.querySelector("#InputSentence").value;
}

function checkSentence() {
result="Pangrams"
alphabetLetters.forEach((values)=>{
let regex = new RegExp( values, 'i' );
let findLetters=sentence.search(regex);

if(findLetters<0){
result="not Pangrams"

}
})

}

function showResult(){
    document.querySelector(".result").innerHTML = result;
}


