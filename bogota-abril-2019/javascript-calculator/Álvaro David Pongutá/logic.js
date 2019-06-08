//Declarando todos los elementos del HTML
const result = document.getElementById("result");
const clearButton = document.getElementById("clearButton");
const signPositiveOrNegativeButton = document.getElementById("signPositiveOrNegativeButton");
const percentageButton = document.getElementById("percentageButton");
const multiplicationButton = document.getElementById("multiplicationButton");
const divisionButton = document.getElementById("divisionButton");
const substractionButton = document.getElementById("substractionButton");
const sumButton = document.getElementById("sumButton");

//Variables
let firstNumber= "none";
let secondNumber= "none";
let operation= "none";
let aClear= true;

//Funciones de los botones

//Teclas del teclado presionadas
document.onkeypress = function (e) {
    e = e || window.event;
    //Numeros
    if(e.keyCode == 48){
        numberButton(0);
    }
    if(e.keyCode == 49){
        numberButton(1);
    }
    if(e.keyCode == 50){
        numberButton(2);
    }
    if(e.keyCode == 51){
        numberButton(3);
    }
    if(e.keyCode == 52){
        numberButton(4);
    }
    if(e.keyCode == 53){
        numberButton(5);
    }
    if(e.keyCode == 54){
        numberButton(6);
    }
    if(e.keyCode == 55){
        numberButton(7);
    }
    if(e.keyCode == 56){
        numberButton(8);
    }
    if(e.keyCode == 57){
        numberButton(9);
    }
    //Enter
    if(e.keyCode == 13){
        resultButtonFunction();
    }
    //Suma
    if(e.keyCode == 43){
        sumButtonFunction();
    }
    //Resta
    if(e.keyCode == 45){
        substractionButtonFunction();
    }
    //Multiplicación
    if(e.keyCode == 42){
        multiplicationButtonFunction();
    }
    //División
    if(e.keyCode == 47){
        divisionButtonFunction();
    }
    //Decimal
    if(e.keyCode == 46){
        decimalButtonFunction();
    }
};

//Esta función cambia el estilo de los botones
function changeStyleButton(button){
    button.style.cssText= "border-color: #FFFFFF; background-color: #FFFFFF; color: #F77F08;";
}

//Esta función cambia el estilo de los botones
function changeStyleButtonsToStandard(){
    if(operation == 'x'){
        multiplicationButton.style.cssText= "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
    }
    if(operation == '/'){
        divisionButton.style.cssText= "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
    }
    if(operation == '-'){
        substractionButton.style.cssText= "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
    }
    if(operation == '+'){
        sumButton.style.cssText= "border-color: #F77F08; background-color: #F77F08; color: #FFFFFF;";
    }
}

//Esta función cambia el estilo de los botones si alguno estaba actualmente presionado
function changeBetweenOperations(button){
    changeStyleButtonsToStandard();
    changeStyleButton(button);
}

//Esta función aplica para todos los botones con números
function numberButton(number){

    //Se cambia el valor de AC por C
    clearButton.innerText= "C";
    aClear= false;

    if(operation == "none"){
        if(result.innerText.indexOf('.') > -1 || result.innerText != 0 ){
            result.innerText += number;
        }else if(result.innerText.indexOf('-0') > -1){
            result.innerText = '-'+number;
        }else{
            result.innerText= number;
        }
    } else {
        if(firstNumber == Number(result.innerText)){
            result.innerText= number;
        } else if(result.innerText.indexOf('.') > -1 || result.innerText != 0 ){
            result.innerText += number;
        }else if(result.innerText.indexOf('-0') > -1){
            result.innerText = '-'+number;
        }else{
            result.innerText= number;
        }
    } 

}

clearButton.onclick = function() {
    if(!aClear){
        //Se cambia el valor de AC por C
        clearButton.innerText= "AC";
        aClear= true;
    } else if(operation != "none") {
        changeStyleButtonsToStandard();
        operation = "none";
        firstNumber= "none";
    }
    result.innerText= 0;
};

signPositiveOrNegativeButton.onclick = function() {
    if(result.innerText.indexOf('-') == -1){
        result.innerText= '-' + result.innerText;
    } else {
        result.innerText= result.innerText.slice(1);
    }
    firstNumber= Number(result.innerText);
};

percentageButton.onclick = function() {
    result.innerText= result.innerText/100;
};

function decimalButtonFunction(){
    if(result.innerText.indexOf('.') == -1 && firstNumber == "none"){
        result.innerText += '.';
    }else{
        result.innerText = '0.';
    }
}

function multiplicationButtonFunction(){
    changeBetweenOperations(multiplicationButton);
    firstNumber= Number(result.innerText);
    operation = 'x';
}

function divisionButtonFunction(){
    changeBetweenOperations(divisionButton);
    firstNumber= Number(result.innerText);
    operation = '/';
}

function substractionButtonFunction(){
    changeBetweenOperations(substractionButton);
    firstNumber= Number(result.innerText);
    operation = '-';
}

function sumButtonFunction(){
    changeBetweenOperations(sumButton);
    firstNumber= Number(result.innerText);
    operation = '+';
}

function resultButtonFunction(){
    if(operation != "none"){
        secondNumber= Number(result.innerText);
        if(operation == 'x'){
            result.innerText= ""+ (firstNumber * secondNumber);
        }
        if(operation == '/'){
            result.innerText= ""+ (firstNumber / secondNumber);
        }
        if(operation == '-'){
            result.innerText= ""+ (firstNumber - secondNumber);
        }
        if(operation == '+'){
            result.innerText= ""+ (firstNumber + secondNumber);
        }
        changeStyleButtonsToStandard();
    }
}