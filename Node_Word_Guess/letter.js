var Letter = function(char, bool){
    var knownChar = char;
    var isGuessed = bool;
    this.toString = function(){
        if(isGuessed){
            return char;
        }
        return "_"
    }
    this.checkChar = function(input){
        if (input === knownChar){
            isGuessed = true;
        }
    }
}

module.exports = Letter;