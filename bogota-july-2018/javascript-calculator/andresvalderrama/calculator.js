function calc(number1, operand, number2) {
  
  if (typeof parseInt(number1) !== 'number' || typeof parseInt(number2) !== 'number') return console.log('Bad expression')
  if (!/[\+|\-|\*|\/]/.test(operand)) return console.log('Bad expression')
  
  var operations = {
    '+': (number1, number2) => console.log(number1 + number2),
    '-': (number1, number2) => console.log(number1 - number2),
    '*': (number1, number2) => console.log(number1 * number2),
    '/': (number1, number2) => console.log(number1 / number2)
  }
  
  operations[operand](number1, number2)
}

calc(2, '*', 5)
