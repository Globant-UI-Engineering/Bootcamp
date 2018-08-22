function doArithmeticOperation(number1, number2, operation) {

  var arithmeticResult = 0.0;

  switch (operation) {
    case "+":
      arithmeticResult = number1 + number2;
      break;
    case "-":
      arithmeticResult = number1 - number2;
      break;
    case "*":
      arithmeticResult = number1 * number2;
      break;
    case "/":
      arithmeticResult = number1 / number2;
      break;
    default:
      arithmeticResult = 0;

  }

  return arithmeticResult || 0;

}

console.log(doArithmeticOperation(0,100,"+"));
console.log(doArithmeticOperation(25,50,"-"));
console.log(doArithmeticOperation(null,32,"*"));
console.log(doArithmeticOperation("","","/"));
