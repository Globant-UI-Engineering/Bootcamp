var displayNumber = [];
var number;
var accumulated;

function add(i) { // to get the value of the typed number
    var addNumber = document.getElementById(i).value;
    addNumber = parseInt(addNumber);
    displayNumber.push(addNumber);
    showNumberTyped();
}

// to show into the div every typed number and get that value
function showNumberTyped() {
    document.getElementById("result").innerHTML = displayNumber;
    document.getElementById("result").innerHTML = displayNumber.join('');
    number = document.getElementById("result").innerHTML;
    number = parseInt(number);
}

//to get the accumulated value
function getAccumulatedValue() {
    accumulated = document.getElementById("accumulated").innerHTML;
    accumulated = parseInt(accumulated);
    //console.log(number);
}

function operation(i) {
    //document.getElementById("accumulated").innerHTML = number;
    var a = parseInt(document.getElementById("accumulated").innerHTML);
    var b = parseInt(document.getElementById("result").innerHTML);
    var operator = document.getElementById("operation").innerHTML = i;    
    var finalValue;
    if (operator === "+") {
        finalValue = a + b;            
    }if (operator === "-") {
        finalValue = a - b;
    }if (operator === "*") {
        finalValue = a * b;
    }if (operator === "/") {
        finalValue = a / b;
    }   
    document.getElementById("accumulated").innerHTML = finalValue;
    displayNumber = [];
    document.getElementById("result").innerHTML = displayNumber;
}

function clean(){
    document.getElementById("accumulated").innerHTML = "0";
    displayNumber = [];
    document.getElementById("result").innerHTML = "";
}