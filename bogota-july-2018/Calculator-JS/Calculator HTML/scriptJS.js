/*

var div_select = document.getElementById('panel1');

console.log(typeof(div_select));

div_select.classList.add('color_rojo');

*/
/*
var div_select = document.getElementsByClassName('color_rojo');

console.log(div_select);*/

var num_press = 0.0;
var opt_press = "";
var num_acum = 0.0;
var opt_pend = "";

function pres_num(numero)
{
	var concatenate = "";
	
	if (num_press === 0) {
		num_press = numero;
	}else
	{
		concatenate = "" + num_press + numero;
		num_press = parseFloat(concatenate);
	}
	
	console.log(num_press)

	document.getElementById('result2').innerText = num_press;
}

function pres_opt(opcion)
{
	switch(opcion)
	{
		case "sum":

			// document.getElementById('result1').innerText = "+";
			// num_acum = num_acum + num_press;
			// console.log(num_acum);
			// document.getElementById('acum').innerText = num_acum;
			// num_press = 0.0;

			num_acum = realizar_operacion(opt_pend, num_acum, num_press);
			opt_pend = "sum";
			document.getElementById('result1').innerText = "+";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;
			
			break;

		case "res":

			num_acum = realizar_operacion(opt_pend, num_acum, num_press);
			opt_pend = "res";
			document.getElementById('result1').innerText = "-";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;

			break;

		case "mult":

			num_acum = realizar_operacion(opt_pend, num_acum, num_press);
			opt_pend = "mult";
			document.getElementById('result1').innerText = "x";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;

			break;
		case "div":

			num_acum = realizar_operacion(opt_pend, num_acum, num_press);
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

			num_acum = realizar_operacion(opt_pend, num_acum, num_press);
			opt_pend = "";
			document.getElementById('result1').innerText = "";
			document.getElementById('result2').innerText = "";
			document.getElementById('acum').innerText = num_acum;
			num_press = 0.0;
			num_acum = 0.0;

			break;
	}
}

function realizar_operacion(opcion, numero_acumulado, numero_operador)
{
	switch (opcion) {
		case "sum":
			return numero_acumulado + numero_operador;
			break;
		case "res":
			return numero_acumulado - numero_operador;
			break;
		case "mult":
			return numero_acumulado * numero_operador;
			break;
		case "div":
			return numero_acumulado / numero_operador;
			break;
		default:
			return numero_operador;
			break;
	}
}