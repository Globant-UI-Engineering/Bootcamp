
const operators = {
    "add": function (a, b) { return a + b; },
    "subtract": function (a, b) { return a - b; },
    "multiply": function (a, b) { return a * b; },
    "divide": function (a, b) { return a / b; },
};

function calculator (a, b, op) {
    const res = operators[op](a, b);
    console.log(res);
}

this.calculator(10, 20, "divide");