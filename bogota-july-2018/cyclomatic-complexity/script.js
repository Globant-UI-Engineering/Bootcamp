
function calculateAge(age1, age2, age3, age4, age5, age6, age7, age8){
	var res = 0;
	//--1--
	for(var i = 0; i < arguments.length; i++){
		//--2--
		res += (arguments[i] * arguments[i]);
	}
	//--3-
	return Math.floor(Math.sqrt(res)/2);
}