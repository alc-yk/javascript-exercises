const repeatString = function(word, number) {
    
    var str = word.toString();
    var finishedStr = '';

    for (i=0; i<number; i++){
        finishedStr = finishedStr + str;
    }

    return finishedStr;

};

// Do not edit below this line
module.exports = repeatString;
