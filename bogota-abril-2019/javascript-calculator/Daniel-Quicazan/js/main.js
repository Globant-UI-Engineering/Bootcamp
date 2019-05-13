let firstValue = "";
let secondValue = "";
let operation = "";
let writingFirstValue = false;

function onNumberButtonClick($event) {
  value = $event.value;
  if (writingFirstValue) {
    firstValue += value;
    setCalculatorView(firstValue);
  } else {
    secondValue += value;
    setCalculatorView(firstValue + " " + operation + " " + secondValue);
  }
}

function onOperationClick($event) {
  operation = $event.value;
  writingFirstValue = true;
  setCalculatorView(firstValue + " " + operation);
}


function setCalculatorView(value) {
  document.getElementById('calculator-view').value = value;
}

function getCalculatorView() {
  return  document.getElementById('calculator-view').value;
}

function appendToCalculatorView(value) {
  document.getElementById('calculator-view').value += value;
}
