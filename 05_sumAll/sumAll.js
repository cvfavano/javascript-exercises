function sumAll(num1, num2) {
    var sumTotal = 0;

    if (num1 < 0 || num2 < 0 ) {
        return "ERROR";
    }

    if( isNaN(num1)  || isNaN(num2) ){ 
        return "ERROR";
    }

    if (typeof num1 === 'string' || typeof num2 === 'string' ) {
        return "ERROR";
    }
    //check which num is larger and swap if necessary
    if (num1 > num2) {
        let holderNum = num1;
        
        num1 = num2;
        num2 = holderNum;
    }
    
    for(var i = num1; i <= num2; i++){
        sumTotal += i; 
    }
    return sumTotal;

};
// Do not edit below this line
module.exports = sumAll;
