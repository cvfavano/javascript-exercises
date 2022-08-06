 function removeFromArray() {
	//arguments[0]
	//.filter(function(){

	if (arguments.length < 2) {
		return 'ERROR';
	}
	//loop through the given argument/s
	for(let i = 1; i<arguments.length; i++){
		//loop through the array
		for(j = 0; j < arguments[0].length; j++){
			if(arguments[0][j] === arguments[i] ) {
				arguments[0].splice(j,1);
			
			}
		} 
	}	
	console.log(arguments[0])
	return arguments[0];
}
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
