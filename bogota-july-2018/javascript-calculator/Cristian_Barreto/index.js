const aritmecitExpresionRegEx = /[-+]?[0-9]*\.?[0-9]+[\s]+[\÷\+\-\×]+[\s]+[0-9]*\.?[0-9]/g;
const aritmecitOperatorRegEx = /[\÷\+\-\×]/g;

const resultTextField = document.getElementById('result');
const errorTextField = document.getElementById('error-message');

const numberButttons = document.querySelectorAll('button[name^="number"]');
numberButttons.forEach(button => {
    button.addEventListener('click', handleNumericButtonPress);
});

const operationButttons = document.querySelectorAll('.aritmetic-buttons button:not([name="equal"])');
operationButttons.forEach(button => {
    button.addEventListener('click', handleOperationButtonPress);
});

document.querySelector('button[name="equal"]').addEventListener('click', resolveOperation);

document.querySelector('button[name="point"]').addEventListener('click', handlePressPointButton);
document.querySelector('button[name="backspace"]').addEventListener('click', handleBackSpacePress);

function clearErrorText() {
    errorTextField.innerHTML = 'Write any operation';
}

function handleNumericButtonPress(event) {
    clearErrorText();
    const pressedNumber = event.srcElement.textContent;

    if (resultTextField.innerHTML === '0')
        resultTextField.innerHTML = pressedNumber;
    else
        resultTextField.innerHTML += pressedNumber;

    event.preventDefault();
}


function handleOperationButtonPress(event) {
    clearErrorText();

    const pressedOperation = event.srcElement.textContent;

    if (resultTextField.innerHTML.split(' ').length === 3) {
        resolveOperation();
    }

    if (resultTextField.innerHTML === '0' || resultTextField.innerHTML === '-') {
        if (pressedOperation === '-')
            resultTextField.innerHTML = '-';
        else
            errorTextField.innerHTML = 'First select a number';

        return;
    }

    if (!resultTextField.innerHTML.startsWith('-') && resultTextField.innerHTML.search(aritmecitOperatorRegEx) > 0) {
        errorTextField.innerHTML = 'Before you need to write another number';
        return;
    } else if (resultTextField.innerHTML.split(' ')[1]) {
        errorTextField.innerHTML = 'Before you need to write another number';
        return;
    }

    resultTextField.innerHTML += ` ${pressedOperation} `;

    event.preventDefault();
}


function handleBackSpacePress(event) {
    clearErrorText();
    resultTextField.innerHTML = '0';

    event.preventDefault();
}


function handlePressPointButton(event) {

    if (resultTextField.innerHTML.search(aritmecitExpresionRegEx) < 0 && resultTextField.innerHTML !== '0')
        resultTextField.innerHTML += '0.';
    else
        resultTextField.innerHTML += '.';

    event.preventDefault();
}

function resolveOperation(event = null) {

    const posibleOperations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '×': (num1, num2) => num1 * num2,
        '÷': (num1, num2) => num1 / num2,
    };

    const resumeOperation = resultTextField.innerHTML.split(' ');

    const firstNumber = parseFloat(resumeOperation[0]);
    const operation = resumeOperation[1];
    const secondNumber = parseFloat(resumeOperation[2]);

    const roundResult = (num) => num % 1 === 0 ? num : num.toFixed(2);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errorTextField.innerHTML = 'Require two numbers for this operation';
    } else {
        const auxResult = posibleOperations[operation](firstNumber, secondNumber);

        if (isFinite(auxResult)) {
            errorTextField.innerHTML = 'Result';
            resultTextField.innerHTML = roundResult(auxResult);
        } else {
            errorTextField.innerHTML = 'Math error: The inputs is not a valid expression.';
            resultTextField.innerHTML = '0';
        }
    }

    if (event)
        event.preventDefault();
}