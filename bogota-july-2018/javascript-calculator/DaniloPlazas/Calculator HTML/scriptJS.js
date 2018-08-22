var num_press = 0.0; 	//Number pressed by the user
var opt_press = ""; 	//Arithmetic Operation pressed by the user
var num_acum = 0.0;		//Accumulated Number
var opt_pend = ""; 		//Arithmetic Operation pending execution

/*
	FUNCTION: pres_num
	ARGUMENTS: number (int)
	RETURN: NA
*/
function pres_num(number)
{
	var concatenate = "";

	if (num_press === 0) {
		num_press = number;
	}else
	{
		concatenate = "" + num_press + number;
		num_press = parseFloat(concatenate);
	}

	console.log(num_press)

	document.getElementById('result2').innerText = num_press;
}

/*
	FUNCTION: pres_opt
	ARGUMENTS: option (string)
	RETURN: NA
*/
function pres_opt(option)
{
	switch(option)
	{
		case "sum":

			num_acum = executeOperation(opt_pend, num_acum, num_press);
			opt_pend = "sum";
			document.getElementById('result1').innerText = "+";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;
			break;

		case "res":

			num_acum = executeOperation(opt_pend, num_acum, num_press);
			opt_pend = "res";
			document.getElementById('result1').innerText = "-";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;

			break;

		case "mult":

			num_acum = executeOperation(opt_pend, num_acum, num_press);
			opt_pend = "mult";
			document.getElementById('result1').innerText = "x";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;

			break;
		case "div":

			num_acum = executeOperation(opt_pend, num_acum, num_press);
			opt_pend = "div";
			document.getElementById('result1').innerText = "÷";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;

			break;
		case "clean":

			num_press = 0.0;
			document.getElementById('result2').innerText = "";

			break;
		case "cleanAll":

			num_press = 0.0;
			num_acum = 0.0;
			document.getElementById('result1').innerText = "";
			document.getElementById('result2').innerText = "";
			document.getElementById('acum').innerText = "";

			opt_pend = "";

			break;
		case "eq":

			num_acum = executeOperation(opt_pend, num_acum, num_press);
			opt_pend = "";
			document.getElementById('result1').innerText = "";
			document.getElementById('result2').innerText = "";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;
			num_acum = 0.0;

			break;
	}
}

/*
	FUNCTION: executeOperation
	ARGUMENTS: option (string), acum_number (float), operator_number (float)
	RETURN: result (float)
*/
function executeOperation(option, acum_number, operator_number)
{
	switch (option) {
		case "sum":
			return acum_number + operator_number;
			break;
		case "res":
			return acum_number - operator_number;
			break;
		case "mult":
			return acum_number * operator_number;
			break;
		case "div":
			return acum_number / operator_number;
			break;
		default:
			return operator_number;
			break;
	}
}
