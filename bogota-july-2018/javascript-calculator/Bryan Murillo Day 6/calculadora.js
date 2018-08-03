var numA;
var numB;
var operador;

var op = {
    '+': function(a,b) {return a+b},
    '-': function(a,b) {return a-b},
    '*': function(a,b) {return a*b},
    '/': function(a,b) {return b !== 0 ? a/b : "Divisón por 0"}
}

function addDisplay (obj) {
    console.log(obj);
    let lbl = document.querySelector(".display");
    
    if (/[\.+\-*\/]/g.test(obj)) {
        tratarCaracter(obj);
    } else {
        lbl.innerHTML += obj;
    }
}

function deleteDisplay () {
    let lbl = document.querySelector(".display");
    lbl.innerHTML = lbl.innerHTML.slice(0, lbl.innerHTML.length - 1);
}

function cleanDisplay () {
    let lbl = document.querySelector(".display");
    lbl.innerHTML = "";
}

function tratarCaracter (c) {
    let lbl = document.querySelector(".display");
    if (c === ".") {
        if (s.includes(c)) {
            if (/\.[0-9]?[+\-*\/]/.test(lbl.innerHTML)) {
                lbl.innerHTML += c;
            }
        } else lbl.innerHTML += c;
    } else {
        if (/[+\-*\/]/.test(lbl.innerHTML)) {
            calcular ();
            lbl.innerHTML += c;
        } else {
            lbl.innerHTML += c;
        }
    }
}

function calcular () {
    let lbl = document.querySelector(".display");
    let i =  lbl.innerHTML.search(/[+\-*\/]/);
    numA = Number(lbl.innerHTML.slice(0,i));
    numB = Number(lbl.innerHTML.slice(i+1,lbl.innerHTML.length));
    operador = lbl.innerHTML.slice(i,i+1);
    lbl.innerHTML = op[operador](numA,numB);
}