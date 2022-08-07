const leapYears = function(num) {
    if(num < 0) {
        return "ERROR";
    }
    if(typeof num === 'string'){
        return "ERROR";
    } 
    if(Number.isNaN(num)){
        return "ERROR";
    }

    if(num % 100 == 0 && num % 400 == 0 ) {
        return true;
    } 
    if( num % 100 == 0) {
        return false;
    }
    if(num%4 == 0) {
        return  true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
