const repeatString = function(string, num) {
	var repeatedString ='';
	if(num < 0) {
		return 'ERROR';
	}
	for (i = 0; i < num; i++) {
		repeatedString += string;
	}
	return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
