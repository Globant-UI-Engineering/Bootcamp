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
  function numb ({currentTarget}) {
    if (!operation[1]) {
      operation[0] += currentTarget.textContent
      expression.value = operation.join('')
    }
    if (operation[1]) {
      operation[2] += currentTarget.textContent
      expression.value = operation.join('')
      doCalc()
    }
  }
  function operandd ({currentTarget}) {
    if (operation[0]) {
      operation[1] = currentTarget.textContent
      expression.value = operation.join('')
    }
  }

  function doCalc () {
    result.value = operations[operation[1]](operation[0], operation[2])
  }

  function clearExpression () {
    expression.value = ''
    operation = ['', '', '']
  }

  FORM.onsubmit = event => event.preventDefault()
  NUMBERS.forEach(number => number.onclick = numb)
  OPERANDS.forEach(operand => operand.onclick = operandd)
  CALC.onclick = doCalc
  CLEAR.onclick = clearExpression
})
