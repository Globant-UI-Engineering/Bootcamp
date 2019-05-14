let firstValue = "";
let secondValue = "";
let operation = "";
let writingFirstValue = true;
let writingOperation = false;

function resetValues($event) {
  firstValue = "";
  secondValue = "";
  operation = "";
  writingFirstValue = true;
}

function onClearButtonClick($event) {
  resetValues($event);
  setCalculatorView("");
}

function onDeleteValueButtonClick($event) {
  printCurrentState();
  if (writingFirstValue) {
    firstValue = "";
    setCalculatorView("");
  } else if (writingOperation) {
    operation = "";
    setCalculatorView(firstValue);
  } else {
    secondValue = "";
    setCalculatorView(firstValue + " " + operation);
  }
}

function onDeleteButtonClick($event) {
  printCurrentState();
  if (writingFirstValue) {
    firstValue = firstValue.substring(0, firstValue.length - 1);
    setCalculatorView(firstValue);
  } else if (writingOperation) {
    operation = "";
    setCalculatorView(firstValue);
  } else {
    secondValue = secondValue.substring(0, secondValue.length - 1);
    setCalculatorView(firstValue + " " + operation + secondValue);
  }
}

function onNumberButtonClick($event) {
  printCurrentState();
  let value = $event.value;
  if (writingFirstValue) {
    firstValue += value;
    setCalculatorView(firstValue);
  } else {
    secondValue += value;
    setCalculatorView(firstValue + " " + operation + " " + secondValue);
  }
  printCurrentState();
}


function onDotButtonClick($event) {
  printCurrentState();
  let value = $event.value;
  if (writingFirstValue && !firstValue.includes('.')) {
    if (firstValue === "")
      firstValue = "0";
    firstValue += value;
    setCalculatorView(firstValue);
  } else if (!writingFirstValue && !secondValue.includes('.')) {
    if (secondValue=== "")
      secondValue = "0";
    secondValue += value;
    setCalculatorView(firstValue + " " + operation + " " + secondValue);
  }
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
