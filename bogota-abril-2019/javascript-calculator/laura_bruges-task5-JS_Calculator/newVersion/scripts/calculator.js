// *************** Variable initialization ***************
const operators = "/*-+";
let operand1 = "0";
let operand2 = "";
let operator = "";
let result = 0;
let operand1Span = document.querySelector("#operand1");
let operand2Span = document.querySelector("#operand2");
let operatorSpan = document.querySelector("#operator");
let resultSpan = document.querySelector("#result");


// *************** Event definition ***************
// Click events
document.querySelectorAll(".number").forEach((number) => {
    number.onclick = () => {
        displayOperand(number.textContent);
    }
});

document.querySelectorAll(".operation").forEach((operator) => {
    operator.onclick = () => {
        let op = operator.textContent;
        if(op === "x") {
            op = "*";
        }
        if(operand1 && (!operand2 || operand2 === "0")) {
            setOperator(op);        
        }
    }
});


document.querySelector("#equals").onclick = () => {
    displayResult();
}

document.querySelectorAll(".del").forEach((delElement) => {
    delElement.onclick = () => {
        deleteOrClear(delElement.textContent);
    }

})

// Keyboard events
document.querySelector("body").onkeydown = (keydown) => {
    let key = keydown.key;
    console.log(key);
    if(!isNaN(key)) {
        displayOperand(key);
    } else {
        if(operators.includes(key) && operand1 && (!operand2 || operand2 === "0")) {
            setOperator(key);        
        } else {
            switch(key) {
                case 'Enter':
                    displayResult();
                    break;
                case 'Delete':
                    clearOperand();
                    break;
                case 'Backspace':
                    backspaceOperand();
                    break;
            }
        }
    }
}

// *************** Functions ***************

function displayOperand(value) {
    /**
     * Displays the current operand numerical value
     * @param {String} value input value (decimal digit)
     */
    if(!operator) {
        operand1 = updateOperand(operand1Span, operand1, value);
    } else {
        operand2 = updateOperand(operand2Span, operand2, value);
    }
}

function updateOperand(operandSpan, operand, newValue) {
    /**
     * Updates the operand value concatenating the input value stored in newValue
     * @param {DOMElement} operandSpan Span that displays the target operand value
     * @param {String} operand Target operand current value
     * @param {String} newValue input value (decimal digit)
     * @return {String} Updated operand value.
     */
    if(operand === "0") {
        operand = newValue;           
    } else {
        operand += newValue;
    }            
    operandSpan.textContent = operand;
    resultSpan.textContent = operand;
    return operand;
}

function setOperator(operatorVal) {
    /**
     * Sets the operator value (which defines the operator to be performed)
     * @param {String} operatorVal operator to be applied.
     */
    operator = operatorVal;
    operatorSpan.textContent = operator;
    operand2Span.textContent = "0";
}

function displayResult(){
    /**
     * Displays the calculation result.
     */
    if(operand1 && operator) {
        result = calculate();
        resultSpan.textContent = result + "";
        operand1 = result;
        operand2 = "";
        operator = "";
        operand1Span.textContent = operand1;
        operand2Span.textContent = operand2;
        operatorSpan.textContent = operator;
    }
}

function calculate() {
    /**
     * Calculates the result of the operation between the 2 operands
     */
    let operationResult = 0;
    let operand1Num = Number(operand1);
    let operand2Num = operand2 ? Number(operand2) : 0;
    switch(operator) {
        case "+":
            operationResult = operand1Num + operand2Num;
            break;
        case "-":
            operationResult = operand1Num - operand2Num;
            break;
        case "*":
            operationResult = operand1Num * operand2Num;
            break;
        case "/":
            operationResult = operand1Num / operand2Num;
            break;
    }

    return operationResult;
}

function deleteOrClear(key) {
    /**
     * Performs a clear or delete operation according to the delete operation key value
     * @param {String} key delete operation key.
     */
    switch(key) {
        case "C":
            deleteEverything();
            break;
        case "CE":
            clearOperand();
            break;
        default:
            backspaceOperand();
            break;
    }
}

function deleteEverything() {
    /**
     * Clears operands and operator values
     */
    operand1 = "0";
    operand2 = "";
    operator = "";
    result = 0;

    operand1Span.textContent = operand1;
    operand2Span.textContent = operand2;
    operatorSpan.textContent = operator;
    resultSpan.textContent = result + "";
}

function clearOperand(){
    /**
     * Clears the operand enabled for edition and sets its value to 0.
     */
    if(operand1 && !operator) {
        operand1 = "0";
        operand1Span.textContent = operand1;
    } else {
        operand2 = "0";
        operand2Span.textContent = operand2;
    }

    resultSpan.textContent = "0";
}

function backspaceOperand() {
    /**
     * Removes the last digit of the operator in edition or sets its value to 0 
     */
    if(!operator) {
        operand1 = sliceOperand(operand1Span, operand1);
    } else {
        operand2 = sliceOperand(operand2Span, operand2);
    }
}

function sliceOperand(operandSpan, operand) {
    /**
     * Removes the last digit of the operator in edition or sets its value to 0 
     * @param {DOMElement} operandSpan Span that displays the target operand value
     * @param {String} operand Target operand current value
     * @return {String} Updated operand value.
     */
    let newVal = "0";
    if(operand.length > 1) {
        newVal = operand.slice(0, operand.length - 1);
    }
    operandSpan.textContent = newVal;
    resultSpan.textContent = newVal;    
    return newVal;
}