var operator = '';
var firstNumber = 0;
var secondNumber = 0;
var hasSeparator = false;

function saveNumber(number) {
    if (this.operator == '') {
        document.getElementById('answer').value += number;
        this.saveFirstNumber();
    } else {
        this.hasSeparator = this.secondNumber != 0;
        document.getElementById('answer').value = this.secondNumber == 0 ? number : document.getElementById('answer').value + number;
        this.secondNumber = document.getElementById('answer').value;
    }
}

function saveFirstNumber() {
    this.firstNumber = document.getElementById('answer').value;
}

function saveSecondNumber() {
    this.secondNumber = document.getElementById('answer').value;
}

function selectSeparator(separator) {
    if(document.getElementById('answer').value!=''){
        document.getElementById('answer').value = !this.hasSeparator ? document.getElementById('answer').value + separator : document.getElementById('answer').value;
        this.hasSeparator = true;
    }else{
        document.getElementById('answer').value = 0 + separator;
        this.hasSeparator = true;
    }
}

function reset(value) {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.hasSeparator = false;
    this.operator = '';

    if (value)
        document.getElementById('answer').value = null;
}

function saveOperator(operator) {
    this.operator = operator;

}

function calculateAnswer() {
    this.secondNumber = document.getElementById('answer').value;
    let ans = eval(this.firstNumber + this.operator + this.secondNumber);
    document.getElementById('answer').value = ans;
    reset(false);
}