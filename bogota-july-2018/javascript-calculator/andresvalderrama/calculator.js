document.addEventListener('DOMContentLoaded', () => {
  
  const FORM = document.querySelector('.calculator')
  const NUMBERS = FORM.querySelectorAll('.number, .decimal')
  const OPERANDS = FORM.querySelectorAll('.operand')
  const CALC = FORM.querySelector('.calc')
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
    let isAValidOperation = checkOperation()
    if (!isAValidOperation) return result.value = 'Bad Expression'

    result.value = operations[operation[1]](operation[0], operation[2])
  }

  function checkOperation () {
    let isDenominatorDiferentFromCero =  operation[1] === '/' && operation[2] !== '0'

    if (isDenominatorDiferentFromCero) return true
  }

  function clearExpression () {
    expression.value = ''
    result.value = ''
    operation = ['', '', '']
  }

  function removeLastItemFromExpression () {
    console.log('remove last item from expression')
  }

  FORM.onsubmit = event => event.preventDefault()
  NUMBERS.forEach(number => number.onclick = takeNumber)
  OPERANDS.forEach(operand => operand.onclick = takeOperand)
  // CALC.onclick = doCalc
  CLEAR.onclick = clearExpression
})
