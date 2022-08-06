const reverseString = function(string) {
    var reversedString = new Array();

    for(var i = 0; i < string.length; i++) {
        reversedString.unshift(string[i]);
    }
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
