var Letter = require("./letter.js");

var Word = function(word){
    var letterArr = [];
    this.guessBool = false;

    for (i=0; i < word.length; i++){
        letterArr[i] = new Letter(word[i], false);
    }

    this.stringFunction = function(){
        var newWordArr = [];
        for (i=0; i < letterArr.length; i++){
            newWordArr.push(letterArr[i].toString());
        }
        return newWordArr.join(" ");
    }
    this.letterGuess = function(char){
        for (i=0; i < letterArr.length; i++){
            letterArr[i].checkChar(char);
        }
    }
}

module.exports = Word;
