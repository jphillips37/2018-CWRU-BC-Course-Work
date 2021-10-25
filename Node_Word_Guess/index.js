var inquirer = require("inquirer");
var Word = require("./word.js");
var randomWordArray = ["testWord", "nextWord", "thirdWord"];

//var newTestWord = new Word(randomWordArray[0]);
var remGuesses = 10;
var gameWord = new Word(randomWordArray[Math.floor(Math.random() * randomWordArray.length)].toUpperCase());
var lettersGuessed = [];

function wordGame(){
    // console.log(gameWord.stringFunction().search("_"));
    // console.log(remGuesses);

    if (gameWord.stringFunction().search("_") >= 0 && remGuesses > 0) {
        var oldString = gameWord.stringFunction();
        //prompt user for a letter guess
        inquirer.prompt([
            {
                name: "guess",
                message: "Choose a letter"
            }
        ]).then(function(response){
            //console.log(response.guess);
            gameWord.letterGuess(response.guess.toUpperCase());
            if (gameWord.stringFunction() == oldString){
                remGuesses--;
            }

            lettersGuessed.push(response.guess.toUpperCase());

            console.log("--------------------");
            console.log(" ");
            console.log(gameWord.stringFunction());
            console.log(" ");
            console.log("Remaining Guesses: " + remGuesses);
            console.log("Letters Guessed: " + lettersGuessed.join(" "));
            console.log(" ");
            console.log("--------------------");
            wordGame();
        });
    }
    else {
        inquirer.prompt([
            {
                name: "replay",
                type: "confirm",
                message: "Would you like to play again?" 
            }
        ]).then(function(response){
            if (response.replay) {
                lettersGuessed = []
                remGuesses = 10;
                gameWord = new Word(randomWordArray[Math.floor(Math.random() * randomWordArray.length)].toUpperCase());
                wordGame();
            }
        })
    }
}
wordGame();
// newTestWord.letterGuess("e");
// newTestWord.letterGuess("W");
// console.log(newTestWord.stringFunction());