function myCalculator (...operation)  {
	const values = operation.join(' ');
  return result = eval(values);  
}

console.log(myCalculator("(10+2)*5","+","15"));