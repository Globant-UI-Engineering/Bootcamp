let firstValue = "";
let secondValue = "";
let operation = "";
let writingFirstValue = true;
let writingOperation = false;

let debugging = false;

function resetValues($event) {
  firstValue = "";
  secondValue = "";
  operation = "";
  writingFirstValue = true;
  let writingOperation = false;
}

function onClearButtonClick($event) {
  resetValues($event);
  setCalculatorView("");
  printCurrentState(debugging);
}

function onDeleteValueButtonClick($event) {
  printCurrentState(debugging);
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
  printCurrentState(debugging);
}

function onDeleteButtonClick($event) {
  printCurrentState(debugging);
  if (writingFirstValue) {
    firstValue = firstValue.substring(0, firstValue.length - 1);
    setCalculatorView(firstValue);
  } else if (writingOperation) {
    operation = "";
    setCalculatorView(firstValue);
    writingOperation = false;
    writingFirstValue = true;
  } else {
    secondValue = secondValue.substring(0, secondValue.length - 1);
    if (secondValue === "") {
      writingOperation = true;
    }
    setCalculatorView(firstValue + " " + operation + secondValue);
  }
  printCurrentState(debugging);
}

function onNumberButtonClick($event) {
  printCurrentState(debugging);
  let value = $event.value;
  if (writingFirstValue) {
    firstValue += value;
    setCalculatorView(firstValue);
  } else {
    writingOperation = false;
    secondValue += value;
    setCalculatorView(firstValue + " " + operation + " " + secondValue);
  }
  printCurrentState(debugging);
}


function onDotButtonClick($event) {
  printCurrentState(debugging);
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
  printCurrentState(debugging);
}


function onOperationClick($event) {
  printCurrentState(debugging);
  if (firstValue === "") {
    firstValue = "0";
  }
  if (firstValue[firstValue.length - 1] === ".") {
    firstValue = firstValue.substring(0, firstValue.length - 1)
  }
  operation = $event.value;
  secondValue = "";
  writingFirstValue = false;
  writingOperation = true;
  setCalculatorView(firstValue + " " + operation);
  printCurrentState(debugging);
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
  printCurrentState(debugging);
  result = calculateResult().toString();
  firstValue = result;
  setCalculatorView(result);
  console.log(result);
  writingFirstValue = true;
  writingOperation = false;
  printCurrentState(debugging);
}

function printCurrentState(debuging = false) {
  if (debuging) {
    console.log("fValue: " + firstValue);
    console.log("operation: " + operation);
    console.log("sValue: " + secondValue);
    console.log("writingFirstValue: " + writingFirstValue);
    console.log("writingOperation: " + writingOperation);
  }
}
