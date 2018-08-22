document.addEventListener('DOMContentLoaded', () => {
  
  const FORM = document.querySelector('.calculator')
  const NUMBERS = FORM.querySelectorAll('.number, .decimal')
  const OPERANDS = FORM.querySelectorAll('.operand')
  const CLEAR = FORM.querySelector('.clear')
  let expression = FORM.querySelector('.expression input')
  let result = FORM.querySelector('.result input')
  let operation = ['', '', '']
  let operations = {
    '+': (addend1, addend2) => addend1 + addend2,
    '-': (minuend, subtrahend) => minuend - subtrahend,
    '*': (factor1, factor2) => factor1 * factor2,
    '/': (dividend, divisor) => dividend / divisor
  }

  function takeNumber ({currentTarget}) {
    let unit = currentTarget.textContent
    let currentNumber = (operation[2] || operation[0])

    if (isDecimal(currentNumber) && unit === '.') return

    createNumber(unit)
  }

  function createNumber (unit) {
    let hasAnOperand = getOperand(operation[1])

    if (!hasAnOperand) operation[0] += unit
    if (hasAnOperand) {
      operation[2] += unit

      doDinamicCalc()
    }

    createFullExpression()
  }

  function createFullExpression () {
    expression.value = operation.join('')
  }

  function isDecimal (number) {
    return number.indexOf('.') >= 0
  }

  function getOperand (operand) {
    return /[\+|\-|\/|/*]/.test(operand)
  }

  function takeOperand ({currentTarget}) {
    if (operation[0]) {
      operation[1] = currentTarget.textContent
    }

    createFullExpression()
  }

  function doDinamicCalc () {
    result.value = operations[operation[1]](operation[0], operation[2])
  }

  function clearExpression () {
    expression.value = ''
    result.value = ''
    operation = ['', '', '']
  }

  FORM.onsubmit = event => event.preventDefault()
  NUMBERS.forEach(number => number.onclick = takeNumber)
  OPERANDS.forEach(operand => operand.onclick = takeOperand)
  CLEAR.onclick = clearExpression
})
