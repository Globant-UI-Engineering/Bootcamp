const NUMBER_IN = document.querySelector("#number-input");
const MAX_DIGITS = 9;

const ButtonType = Object.freeze({
  OPERATOR: 0,
  EQUALS: 1,
  NUMBER: 2,
});

const Operators = Object.freeze({
  "÷": (a, b) => (b === 0 ? NaN : a / b),
  "×": (a, b) => a * b,
  "-": (a, b) => a - b,
  "+": (a, b) => a + b,
});

let operandA = 0;
let operandB = 0;
let operator;
let total = 0;

let lastButtonType = ButtonType.NUMBER;

// Setup button events.
{
  [
    ...document.querySelectorAll(
      "#calculator .operators button:not(#equals-button)",
    ),
  ].forEach(el =>
    el.addEventListener("click", e => chooseOperator(e.target.innerHTML)),
  );
  [
    ...document.querySelectorAll(
      "#calculator .numbers button:not(#dot-button)",
    ),
  ].forEach(el =>
    el.addEventListener("click", e => enterNumber(e.target.innerHTML)),
  );

  document.querySelector("#dot-button").addEventListener("click", enterDot);
  document.querySelector("#clear-button").addEventListener("click", clear);
  document
    .querySelector("#change-sign-button")
    .addEventListener("click", changeSign);
  document
    .querySelector("#percentage-button")
    .addEventListener("click", divideOver100);
  document
    .querySelector("#equals-button")
    .addEventListener("click", applyOperator);
}

// Transport keyboard events to mouse events on buttons.
{
  function triggerMouseEvent(node, eventType) {
    let clickEvent = document.createEvent("MouseEvents");
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
  }

  function resolveElement(e) {
    const { key, shift } = e;
    console.log(e);
    console.log(key);
    if (
      [
        ...Array(10)
          .fill(0)
          .map((v, i) => i + ""),
        ".",
        "/",
        "*",
        "-",
        "+",
      ].includes(key)
    ) {
      return document.querySelector(`#calculator button[value="${key}"]`);
    }

    if (key === "Backspace") {
      return document.querySelector("#clear-button");
    }

    if (key === "%") {
      return document.querySelector("#percentage-button");
    }

    if (key === "_") {
      return document.querySelector("#change-sign-button");
    }

    if (key === "Enter") {
      return document.querySelector("#equals-button");
    }
  }

  document.addEventListener("keydown", e => {
    const element = resolveElement(event);
    if (element) {
      element.classList.add("pressed");
      element.click();
    }
  });
  document.addEventListener("keyup", e => {
    const element = resolveElement(event);
    if (element) {
      element.classList.remove("pressed");
    }
  });
}

function clear() {
  operandA = 0;
  operandB = 0;
  total = 0;
  operator = undefined;
  lastButtonType = ButtonType.NUMBER;
  NUMBER_IN.value = "0";
}

function changeSign() {
  NUMBER_IN.value = "" + -parseFloat(NUMBER_IN.value);
}

function divideOver100() {
  NUMBER_IN.value = "" + parseFloat(NUMBER_IN.value) / 100.0;
}

function enterDot() {
  if (lastButtonType !== ButtonType.NUMBER) {
    NUMBER_IN.value = "0";
  }
  lastButtonType = ButtonType.NUMBER;

  const prevVal = NUMBER_IN.value;
  if (prevVal.indexOf(".") !== -1) {
    return;
  }

  const val = NUMBER_IN.value + ".";
  if (isValid(val)) {
    NUMBER_IN.value = val;
  }
}

function enterNumber(newDigit) {
  if (lastButtonType !== ButtonType.NUMBER) {
    NUMBER_IN.value = "0";
  }
  lastButtonType = ButtonType.NUMBER;

  const prevVal = NUMBER_IN.value;
  if (prevVal === "0") {
    NUMBER_IN.value = newDigit;
    return;
  }

  const newVal = prevVal + newDigit;
  if (isValid(newVal)) {
    NUMBER_IN.value = newVal;
  }
}

function isValid(val) {
  const removeNonDigits = val =>
    val
      .split("-")
      .join("")
      .split(".")
      .join("");
  if (removeNonDigits(val).length > MAX_DIGITS) {
    return false;
  }
  return true;
}

function chooseOperator(key) {
  if (lastButtonType === ButtonType.NUMBER) {
    applyOperator();
    operandA = total;
  }
  lastButtonType = ButtonType.OPERATOR;

  operator = Operators[key];
}

function applyOperator() {
  if (lastButtonType === ButtonType.EQUALS) {
    operandA = total;
  } else if (lastButtonType === ButtonType.OPERATOR) {
    operandA = total;
    operandB = parseFloat(NUMBER_IN.value);
  } else {
    operandB = parseFloat(NUMBER_IN.value);
  }
  lastButtonType = ButtonType.EQUALS;

  if (operator) {
    total = operator(operandA, operandB);
    NUMBER_IN.value = "" + total;
  } else {
    total = parseFloat(NUMBER_IN.value);
  }
}
