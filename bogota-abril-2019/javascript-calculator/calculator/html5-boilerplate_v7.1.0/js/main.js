/*
Make a calculator in Javascript that, for two inputs (can be two variables) and one operation, 
it prints the result to the console. Optional: start connecting this program with elements 
in the DOM!
*/

const calculator = {
  showInDisplay: '0',
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

function inputDigit(digit){
  if(calculator.waitingForSecondNumber === true){
    calculator.showInDisplay = digit;
    calculator.waitingForSecondNumber = false; 
  } 
  else {
    calculator.showInDisplay = calculator.showInDisplay === "0" ? digit : calculator.showInDisplay + digit;
  }
}

function inputDecimal(decimal) {
  if (calculator.waitingForSecondNumber===true){
    return;
  }
  if (!calculator.showInDisplay.includes(decimal)){
    calculator.showInDisplay += decimal;
  }
}

function operation(newOperator){
  
  let inputValue = parseFloat(calculator.showInDisplay);

  if (calculator.operator != null && calculator.waitingForSecondNumber === true){
    calculator.operator = newOperator;
    return;
  }
  if (calculator.firstNumber === null){
    calculator.firstNumber = inputValue;
  } 
  else if(calculator.operator != null){

    let currentValue = calculator.firstNumber || 0;
    let result = calculation[calculator.operator](currentValue, inputValue)
    
    calculator.showInDisplay = String(result);
    calculator.firstNumber = result;
    }
  
  calculator.waitingForSecondNumber = true;
  calculator.operator = newOperator;
}

const calculation = {
  "+":(firstNumber, secondNumber) => firstNumber + secondNumber,
  "-":(firstNumber, secondNumber) => firstNumber - secondNumber,
  "*":(firstNumber, secondNumber) => firstNumber * secondNumber,
  "/":(firstNumber, secondNumber) => firstNumber / secondNumber,
  "=":(firstNumber, secondNumber) => secondNumber,
};

function reset(){
  calculator.showInDisplay = "0";
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
}

function updateDisplay(){
  const display = document.querySelector('.calc_display');
  display.value = calculator.showInDisplay;
}
updateDisplay();

const keys = document.querySelector(".calc_keys");

keys.addEventListener('click', event =>{
  
  if(!event.target.matches("button")){
    return;
  }
  if(event.target.classList.contains("operator")){
    operation(event.target.value);
    updateDisplay();
    return;
  }
  if(event.target.classList.contains("clear")){
    reset();
    updateDisplay();
    return;
  }
  if(event.target.classList.contains("decimal")){
    inputDecimal(event.target.value);
    updateDisplay();;
    return;
  }
  inputDigit(event.target.value);
  updateDisplay();
});

