var result;

function sum(firstNumber, secondNumber) {

    result = firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
}

function showResult() {
    document.getElementById('result').value = result;
}

function operationSelected() {
    result = 0;
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var operation = document.getElementById('operation').value;
    
    switch (operation.toLowerCase()) {
        case 'add':
            sum(firstNumber, secondNumber);
        break;
        case 'substract':
            substract(firstNumber, secondNumber);
        break;
        case 'multiply':
            multiply(firstNumber, secondNumber);
        break;
        case 'divide':
            if (secondNumber != 0)
                divide(firstNumber, secondNumber);
            else
                result = 'Really?';
        break;
        default:
            result = 'Select an operation';
    }
    showResult();
}
