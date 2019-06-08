var currentValue = "0";
var oldValue = "0";
var currentOperator = "";

function clear() {
    currentValue = "0";
    oldValue = "0";
    currentOperator = "";
    updateScreen();
}

function initialize() {
    clear();

    const numbers = document.querySelectorAll('.number');
    for (let numberContainer of numbers) {
        numberContainer.addEventListener("click", () => {
            appendValue(numberContainer.innerHTML);
        });
    }

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener("click", () => clear());

    const signButton = document.querySelector('#sign');
    signButton.addEventListener("click", () => switchSign());

    const pointButton = document.querySelector('#point');
    pointButton.addEventListener("click", () => appendPoint());

    const percentButton = document.querySelector('#percent');
    percentButton.addEventListener("click", () => { percentButton.innerHTML = "🙈"; });

    const addButton = document.querySelector('#add');
    addButton.addEventListener("click", () => setOperator("+"));

    const subtractButton = document.querySelector('#subtract');
    subtractButton.addEventListener("click", () => setOperator("-"));

    const multiplyButton = document.querySelector('#multiply');
    multiplyButton.addEventListener("click", () => setOperator("*"));

    const divideButton = document.querySelector('#divide');
    divideButton.addEventListener("click", () => setOperator("/"));

    const equalsButton = document.querySelector('#equals');
    equalsButton.addEventListener("click", () => evaluate());
}

function evaluate() {
    if (currentOperator != "") {
        currentValue = eval(oldValue + currentOperator + currentValue);
        currentOperator = "";
        updateScreen();
    }
}

function setOperator(operator) {
    if (currentOperator != "") {
        evaluate();
    }
    oldValue = currentValue;
    currentValue = "0";
    currentOperator = operator;
}

function switchSign() {
    const allegedValue = parseFloat(currentValue);
    currentValue = new String(-allegedValue);
    updateScreen();
}

function appendPoint() {
    if (!currentValue.includes(".")) {
        appendValue('.');
    }
}

function appendValue(value) {
    if (currentValue == "0") {
        currentValue = new String(value);
    } else {
        currentValue += new String(value);
    }
    updateScreen();
}

function updateScreen() {
    const screen = document.querySelector('#screen');
    if (currentValue == "") {
        screen.innerHTML = "0";
    } else {
        screen.innerHTML = new String(currentValue);
    }
}

initialize();