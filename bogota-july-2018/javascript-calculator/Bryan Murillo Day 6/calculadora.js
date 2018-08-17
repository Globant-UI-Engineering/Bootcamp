var numA;
var numB;
var operator;

var operation = {
    '+': function(a,b) {return a+b},
    '-': function(a,b) {return a-b},
    '*': function(a,b) {return a*b},
    '/': function(a,b) {return b !== 0 ? a/b : "Divisón por 0"}
}

function addDisplay (obj) {
    let display = document.querySelector(".display");
    if (/^\D+/.test(display.innerHTML)){
        cleanDisplay();
        addDisplay(obj);
    } else {
        if (/[\.+\-*\/]/g.test(obj)) {
            evalChar(obj);
        } else {
            display.innerHTML += obj;
        }
    }
}

function deleteDisplay () {
    let display = document.querySelector(".display");
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
}

function cleanDisplay () {
    let display = document.querySelector(".display");
    display.innerHTML = "";
}

function evalChar (char) {
    let display = document.querySelector(".display");
    if (char === ".") {
        if (display.innerHTML.includes(char)) {
            if (/\.[0-9]+[+\-*\/][0-9]+/.test(display.innerHTML)) {
                display.innerHTML += char;
            }
        } else display.innerHTML += char;
    } else {
        if (/[+\-*\/]/.test(display.innerHTML)) {
            calculate ();
            display.innerHTML += char;
        } else {
            display.innerHTML += char;
        }
    }
}

function calculate () {
    let display = document.querySelector(".display");
    let i =  display.innerHTML.search(/[+\-*\/]/);
    numA = Number(display.innerHTML.slice(0,i));
    numB = Number(display.innerHTML.slice(i+1,display.innerHTML.length));
    operator = display.innerHTML.slice(i,i+1);
    display.innerHTML = operation[operator](numA,numB);
}