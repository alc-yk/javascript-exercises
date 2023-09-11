const removeFromArray = function(argarray, ...removeObj) {
    

    for(i=0; i<argarray.length; i++){

        for(j=0; j<removeObj.length; j++){

            if(argarray[i] === removeObj[j]){
            argarray.splice(i, 1); 
            i--;
            }
        }
    }

    return argarray;
};

// Do not edit below this line
module.exports = removeFromArray;
