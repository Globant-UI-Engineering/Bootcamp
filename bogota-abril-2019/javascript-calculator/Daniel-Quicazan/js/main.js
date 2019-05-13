let firstValue = "";
let secondValue = "";
let operation = "";
let writingFirstValue = true;

function onNumberButtonClick($event) {
  printCurrentState();
  value = $event.value;
  if (writingFirstValue) {
    firstValue += value;
    setCalculatorView(firstValue);
  } else {
    secondValue += value;
    setCalculatorView(firstValue + " " + operation + " " + secondValue);
  }
  printCurrentState();
}

function onOperationClick($event) {
  printCurrentState();
  if (firstValue === "") {
    firstValue = "0";
  }
  operation = $event.value;
  secondValue = "";
  writingFirstValue = false;
  setCalculatorView(firstValue + " " + operation);
  printCurrentState();
}


function setCalculatorView(value) {
  document.getElementById('calculator-view').value = value;
}


function calculateResult() {
  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);
  switch (operation) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "/":
      return firstValue / secondValue;
    case "*":
      return  firstValue * secondValue;
  }
}

function setResult() {
  setCalculatorView(calculateResult())
}

function printCurrentState() {
  console.log("fValue: " + firstValue);
  console.log("operation: " + operation);
  console.log("sValue: " + secondValue);
  console.log("writingFirstValue: " + writingFirstValue)
}
