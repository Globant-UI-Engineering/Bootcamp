var clear = document.getElementById('erase');
var back = document.getElementById('backArrow');
var otherValue;
var arrayEval = [];
var displayZeroValue = 0;
var numbers  = document.getElementsByClassName('buttonNumbers');
var screenSeenValue = document.getElementById('screenValue');
var operators = document.getElementsByClassName('operatorButtons');
var decBtn = document.getElementById('decimal');
var makeCalculation = (click) => {
    var operator = click.target.innerText;
    
    switch (operator) {
        case '+' :
            otherValue = displayZeroValue;
            displayZeroValue = '0';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval.push(otherValue);
            arrayEval.push('+');
            break; 
        case '-' :
            otherValue = displayZeroValue;
            displayZeroValue = '0';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval.push(otherValue);
            arrayEval.push('-');
            break;

        case 'x' :
            otherValue = displayZeroValue;
            displayZeroValue = '0';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval.push(otherValue);
            arrayEval.push('*');
            break;

        case '/' :
            otherValue = displayZeroValue;
            displayZeroValue = '0';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval.push(otherValue);
            arrayEval.push('/');
            break;

        case '+/-' :
            otherValue = displayZeroValue;
            displayZeroValue = '0';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval.push(otherValue);
            arrayEval.push('');
            break;
        case '=' :
            arrayEval.push(displayZeroValue);
            var evaluation = eval(arrayEval.join(' '));
            displayZeroValue = evaluation + '';
            screenSeenValue.innerText = displayZeroValue;
            arrayEval = [];
            break;
        default:
            break;
    }
}

var updateSeenVal = (click) => {
    var btnText = click.target.innerText;
    if(displayZeroValue == '0')
        displayZeroValue = '';
    displayZeroValue += btnText;
    screenSeenValue.innerText = displayZeroValue;
}

for (let i = 0; i < numbers .length; i++){
    numbers[i].addEventListener("click", updateSeenVal, false);
}

for (let i = 0; i < operators.length; i++ ){
    operators[i].addEventListener("click", makeCalculation, false);
}

clear.onclick = () => {
    displayZeroValue = '0';
    otherValue = undefined;
    arrayEval = [];
    screenSeenValue.innerHTML = displayZeroValue;
}

back.onclick = () => {
    let lengthOfDisplayVal = displayZeroValue.length;
    displayZeroValue = displayZeroValue.slice(0, lengthOfDisplayVal -1);

    if(displayZeroValue == '')
        displayZeroValue = '0';
        screenSeenValue.innerText = displayZeroValue;

}

decBtn.onclick = () =>{
    if(!displayZeroValue.includes('.'))
        displayZeroValue += '.';
        screenSeenValue.innerText = displayZeroValue;
}