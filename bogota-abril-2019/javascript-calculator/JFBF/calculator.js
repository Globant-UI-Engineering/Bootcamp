const myLabel = document.querySelector('.results:first-child')
const myInput = document.querySelector('.values input')
const operators = document.querySelectorAll('.operations button[name="operator"]');
const RESULT = "Result: "
var number1 = "";
var number2 = "";
var operator = "";
var lastNumber = "";

function saveNumber(num){
    if(operator == ""){
      setDisable(false);
     setNumber(number1,num,true);
    }else{
      setNumber(number2,num,false);
    }
    lastNumber = num;
  }

function startOperating(){
  switch (operator){
    case "+":
      return parseFloat(number1) + parseFloat(number2);

    case "-":
      return parseFloat(number1) - parseFloat(number2);

    case "*":
      return parseFloat(number1) * parseFloat(number2);
    
    case "/":
      return parseFloat(number1) / parseFloat(number2);
  }
} 

function operate(){
  if(number1!="" && number2!="")
  myLabel.innerText = RESULT+startOperating()
  clearAll(false);
}


function saveOperator(op){
  myInput.value = 0;
  if(operator==""){
    operator = op;
  }else{
    number1 = startOperating();
    myLabel.innerText = RESULT+number1;
    myInput.value = 0;
    number2 = "";
    operator = op;
  }
}

function setDisable(value){
  operators.forEach((button) => {
    button.disabled = value;
  });
}

function setNumber(number,num,firstNumber){
  if(num == "." && lastNumber!= "."){
    number = number + num;
  }
  if(num != "."){
    number = number + num;
  }
  if(firstNumber == true){
    number1 = number;
  }else{
    number2 = number;
  }
  myInput.value = parseFloat(number);
}

function clearAll(erase){
  if(erase){
    myLabel.innerText = RESULT+0;
  }
  setDisable(true);
  myInput.value = 0;
  number1 = "";
  number2 = "";
  operator = "";
}

function saveNumberKey(){
  if(operator == ""){
    setDisable(false);
    setNumber(number1,myInput.value,true);
  }else{
    setNumber(number2,myInput.value,false);
  }
  lastNumber = myInput.value;
}