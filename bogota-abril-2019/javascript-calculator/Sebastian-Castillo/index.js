class Calculator {
  constructor(displayOperation, displayResult) {
    this.text = '';
    this.displayOperation = displayOperation;
    this.displayResult = displayResult;
  }

  display() {
    this.displayOperation.innerText = `${this.text}`;
  }

  showResult() {
    if (this.displayOperation.innerText != '') {
      const result = this.doOperation();
      this.displayResult.innerText = `${
        this.displayOperation.innerText
      } = ${result}`;
      this.displayOperation.innerHTML = 'Ans';
      this.text = '';
    }
  }

  doOperation() {
    const operation = this.displayOperation.innerHTML;
    let number = 0;
    let count = 0;
    let sign = '';
    for (let index = 0; index < operation.length; index++) {
      if (operation[index] == '.' || !isNaN(operation[index])) {
        number += operation[index];
      } else {
        sign = operation[index];
        count = Number(number);
        number = 0;
      }
    }
    return this.operations(count, parseInt(number), sign);
  }

  operations(number1, number2, operation) {
    switch (operation) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case 'x':
        return number1 * number2;
      case '÷':
        return number1 / number2;
      default:
        return number1;
    }
  }

  delete() {
    this.text = this.text.slice(0, -1);
    this.display();
  }

  clear() {
    this.text = '';
    this.displayOperation.innerHTML = '0';
    this.displayResult.innerHTML = '0';
  }
}

const $displayOperation = document.querySelector('#displayOperation');
const $displayResult = document.querySelector('#displayResult');
const $buttons = document.querySelectorAll('#button');
const $clear = document.querySelector('#clear');
const $delete = document.querySelector('#delete');
const $result = document.querySelector('#equal');

const calculator = new Calculator($displayOperation, $displayResult);

$delete.addEventListener('click', () => calculator.delete());
$clear.addEventListener('click', () => calculator.clear());
$result.addEventListener('click', () => calculator.showResult());

for (let index = 0; index < $buttons.length; index++) {
  $buttons[index].addEventListener('click', (event) => {
    if (isDiferentToEqualButtons(event)) {
      calculator.text += event.srcElement.value;
      calculator.display();
    }
  });
}

window.addEventListener('keypress', (event) => {
  if (isDiferentToEqualKey(event)) {
    calculator.text += event.key;
    calculator.display();
  } else {
    calculator.showResult();
  }
});

/*
 * Utils Operations
 */

const isDiferentToEqualButtons = (event) =>
  event.srcElement.value != '=' ? true : false;

const isDiferentToEqualKey = (event) => (event.key != '=' ? true : false);
