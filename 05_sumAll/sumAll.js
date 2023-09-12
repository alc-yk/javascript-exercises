const sumAll = function(int1, int2) {
    let finalValue = 0;

    if (typeof int2 != "number" || typeof int1 != "number") {return "ERROR";}
    if (int1 < 0 || int2 < 0) {return "ERROR";}
    
    if (int1 < int2 ) {
        for(i = int1; i<=int2; i++)
            {
                finalValue = finalValue + i;
            }
    }
    else if (int1 > int2 ) {
        for(i = int2; i<=int1; i++)
            {
                finalValue = finalValue + i;
            }
        }

    return finalValue;

};

// Do not edit below this line
module.exports = sumAll;
