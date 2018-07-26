let data = {
    "a": "",
    "b": "",
    "op": ""
}

const operators = {
    "add": function (a, b) { return a + b; },
    "subtract": function (a, b) { return a - b; },
    "multiply": function (a, b) { return a * b; },
    "divide": function (a, b) { return a / b; },
};

let nums = document.getElementById('num');
let op = document.getElementById('operator');
let equal = document.getElementById('equal');
let del = document.getElementById('del');
let print = document.querySelector('.container > div:first-child > span');

function calculator (a, b, op) { 
    if(data.op) {
        data.a = operators[op](a, b);
        data.b = "";
    }
    print.innerHTML = data.a;
};

function addNumber(num) {
    if(data.op) {
        data.b = data.b.concat(num.toString());
        print.innerHTML = data.b;
    }else {
        data.a = data.a.concat(num.toString());
        print.innerHTML = data.a;
    }   
};

nums.addEventListener("click", number => {
    let num = number.target.textContent;
    this.addNumber(num);
} );

op.addEventListener("click", (e) => {
    data.op = e.target.value;
});

equal.addEventListener("click", () => {
    const a = parseInt(data.a);
    const b = parseInt(data.b);
    console.log(a, b);
    this.calculator(a, b, data.op);
    data.op = "";
});

del.addEventListener("click", () => {
    data.a = "";
    data.b = "";
    print.innerHTML = data.a;
})