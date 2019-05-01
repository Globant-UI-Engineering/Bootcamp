var operator = '';
var firstNumber = 0;
var secondNumber = 0;
var hasSeparator = false;
var inputAnsw = document.querySelector("section input ");

function saveNumber(number) {
    if (this.operator == '') {
        this.inputAnsw.value = this.firstNumber == 0 ? number : this.inputAnsw.value + number;
        this.saveFirstNumber();
    } else {
        this.hasSeparator = this.secondNumber != 0;
        this.inputAnsw.value = this.secondNumber == 0 ? number : this.inputAnsw.value + number;
        this.saveSecondNumber();
    }
}

function saveFirstNumber() {
    this.firstNumber = parseFloat(this.inputAnsw.value);
}

function saveSecondNumber() {
    this.secondNumber = parseFloat(this.inputAnsw.value);
}

function saveOperator(operator) {
    let newOperator = document.querySelector('#' + operator);
    if (this.operator) {
        let lastOperator = document.querySelector('#' + this.operator);
        lastOperator.classList.remove('colorOperator');
    }
    newOperator.classList.add('colorOperator');
    this.operator = operator;

}

function saveSeparator(separator) {
    if (this.inputAnsw.value != '') {
        this.inputAnsw.value = !this.hasSeparator ? this.inputAnsw.value + separator : this.inputAnsw.value;
        this.hasSeparator = true;
    } else {
        this.inputAnsw.value = 0 + separator;
        this.hasSeparator = true;
    }
}

function restart(value) {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.hasSeparator = false;

    if (this.operator)
        document.querySelector('#' + this.operator).classList.remove('colorOperator');

    this.operator = '';

    if (value)
        this.inputAnsw.value = null;
}


function calculateAnswer() {
    var answer = 0;

    switch (this.operator) {
        case 'plus':
            answer = this.firstNumber + this.secondNumber;
            break
        case 'minus':
            answer = this.firstNumber - this.secondNumber;
            break
        case 'times':
            answer = this.firstNumber * this.secondNumber;
            break
        case 'obelus':
            if (this.secondNumber != 0) {
                answer = this.firstNumber / this.secondNumber;
            } else {
                alert("Please don't divide by zero.")
                return
            }
            break
    }

    this.inputAnsw.value = answer;
    this.restart(false);
}