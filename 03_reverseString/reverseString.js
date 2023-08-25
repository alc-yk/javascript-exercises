const reverseString = function(word) {

    var lastElement = '';
    var reverseWord = '';
    word.split("");
    let x = 1

    for(i=0; i<word.length; i++){
        lastElement = word[word.length -x];
        x++;
        reverseWord += lastElement; 
    }
    
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
