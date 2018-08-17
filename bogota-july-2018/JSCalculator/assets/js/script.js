
var operations = {
	"+": (num1, num2) => num1 + num2,
	"-": (num1, num2) => num1 - num2,
	"*": (num1, num2) => num1 * num2,
	"/": (num1, num2) => num2 !== 0 ? num1/num2 : "Error!, use Clear button",
	"":(num1, num2) => num2
}

var keyCodes = {
	"106": "*",
	"107": "+",
	"109": "-",
	"111": "/"
}

var res = 0;
var first = true;
var equal = false;
var opc = "";
var num2 = 0;

var input = document.querySelector("#input-numbers");
var output = document.querySelector("output");
var options  =document.querySelectorAll(".operator");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");

for(var i = 0; i < options.length; i++){
	options[i].addEventListener("click", function(){
		if(first){
			res = Number(input.value);
			opc = this.id;
			first = false;
		}
		else{
			if(equal === false){
				num2 = Number(input.value);
				res = operations[opc](res,num2);
				opc = this.id;
			}
			else{
				opc = this.id;
				equal = false;
			}
		}
	
	input.focus();
	input.select();
	input.value = "";
	output.textContent = res;
	});
}

equals.addEventListener("click", function(){
	if(input.value !== ""){
		num2 = Number(input.value);
		res = operations[opc](res,num2);
		first = false;
	}
	input.value = "";
	output.textContent = res;
	opc = "";
	equal = true;
});

clear.addEventListener("click", function(){
	res = 0;
	num2 = 0;
	input.value = "";
	output.textContent = "The results will appear here!";
	opc = "";
	first = true;
	equal = false;
});

document.addEventListener("keypress", function(event){
	if (event.keyCode === 13){
		document.querySelector("#equals").click();
	}
});