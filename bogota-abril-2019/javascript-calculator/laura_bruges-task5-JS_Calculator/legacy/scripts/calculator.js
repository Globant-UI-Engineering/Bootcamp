var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
var operator = document.querySelector("#operator");

var result = document.querySelector("#result");

document.querySelector("#equals").onclick = () => {
	switch(operator.value) {
		case "+":
			result.textContent = Number(number1.value) + Number(number2.value);
			break;
		case "-":
			result.textContent = Number(number1.value) - Number(number2.value);
			break;
		case "*":
			result.textContent = Number(number1.value) * Number(number2.value);
			break;
		case "/":
			result.textContent = Number(number1.value) / Number(number2.value);
			break;
		case "%":
			result.textContent = Number(number1.value) % Number(number2.value);
			break;
	}
	
};