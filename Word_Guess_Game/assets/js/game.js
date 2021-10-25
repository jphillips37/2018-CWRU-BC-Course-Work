var game = {
    wins: 0,
    losses: 0,
    userGuess: "",
    remGuesses: 0,
    guessWord: "",
    wordsArray: [
        "BROWNS",
        "DOLPHINS",
        "COWBOYS",
        "TEXANS",
        "CHARGERS",
        "PACKERS",
        "BEARS",
        "BILLS",
        "BRONCOS",
        "GIANTS"
    ],
    lettersGuessed: [""]
}

function randomWord() {  // create a function to select a word to guess and reset remaining guesses counter
game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];
game.remGuesses = Math.floor(game.guessWord.length * 1.5);  // number of guesses is dependant of string length
console.log(game.remGuesses);
}

randomWord();

var lossesID = document.getElementById("losses");
var winsID = document.getElementById("wins");
var remGuessesID = document.getElementById("remGuesses");
var lettersGuessedID = document.getElementById("lettersGuessed");
var wordGuessID = document.getElementById("wordGuess");
var word = game.guessWord.replace(/\w/g, "_"); // use a RegEx to replace all letters with "_"
            
console.log(word);


function updateAll() {
    winsID.textContent = "Wins: " + game.wins;
    lossesID.textContent = "Losses: " + game.losses;
    remGuessesID.textContent = "Remaining Guesses: " + game.remGuesses;
    lettersGuessedID.textContent = game.lettersGuessed.join(''); // join function removes commas from the diplay on the front end
    wordGuessID.textContent = word;
}

updateAll();

// var stringIndexArray = [];
var userLetter = "";
var wordArray = game.guessWord.split(""); // array of letters from the word being guessed
var guessWordArray = word.split(""); // array of word as it appears to the user

function resetAll() {
    // randomWord() gets a new word and resets the number of guesses
    randomWord();
    // reset word to all "_"
    word = game.guessWord.replace(/\w/g, "_");
    // reset lettersGuessed array
    game.lettersGuessed = [];
    // reset arrays
    wordArray = game.guessWord.split("");
    guessWordArray = word.split("");
    //updateAll()
    updateAll();
}

document.onkeyup = function(event) {
    userLetter = event.key; // save user input
    userLetter = userLetter.toUpperCase(); // make input upper case
    
    // make sure userLetter is a letter, check number of guesses remaining, user guessed has not already been guessed, and check that guess word is not complete
    if (userLetter.match(/^[A-Za-z]+$/) && game.remGuesses > 0 && game.lettersGuessed.indexOf(userLetter) == -1 && wordGuessID.textContent.includes("_") == true) { 
        
        console.log(userLetter);
        console.log(game.guessWord.length);
        // check string for userLetter. if it exists, replace the "_" with the letter
        if (game.guessWord.search(userLetter) != -1) {  //search the array to see if the user letter exists in the guess word
            for (i = 0; i < wordArray.length; i++) {  // if the letter is correct, put it in the right spot
                
                if (wordArray[i] === userLetter) { // userLetter is equal to the letter at index i
                    guessWordArray[i] = userLetter;  // it seems easier to change elements in an array rather than characters in a string
                    console.log(guessWordArray);
                    word = guessWordArray.join("");  // concatenate all values of the array to put everything back into a single string
                    updateAll();
                    
                    if (word.includes("_") == false) {
                        game.wins++;
                        updateAll();
                        alert("Contratulations! You have guessed the word!");
                        // resetAll();
                    }
                }
                else {
                    // do nothing here because the guessed letter doesn't belong at this index
                }
            }
        }
        else { //the user letter is not in the guess word
            game.lettersGuessed.push(userLetter); // if userLetter is not in word, then add it to game.lettersGuessed and decrement game.remguesses
            game.remGuesses--; // decrement remaining guesses if incorrect guess
            updateAll();
                if (game.remGuesses == 0) {
                    word = game.guessWord
                    game.losses++;
                    updateAll();
                    alert("You Lose");
                    
                }
        }   
        // updateAll();
        console.log(game.remGuesses);
        
        
    }
    else {
        if(userLetter.match(/^[A-Za-z]+$/)) {
            // not a letter, ignore input
        }
        else if (game.remGuesses == 0) {
            // no guesses remaining, do nothing
        }
        else if (game.lettersGuessed.indexOf(userLetter) >= 0){

        }
    }
};
 