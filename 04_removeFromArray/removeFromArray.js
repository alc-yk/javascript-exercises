const removeFromArray = function(argarray, remove) {
    
    for(i=0; i<argarray.length; i++){
        if(argarray[i] === remove){
            argarray.splice(i, 1);
        }
    }

    return argarray;
};

// Do not edit below this line
module.exports = removeFromArray;
