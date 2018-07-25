let operation = "";

myCalculator = (...operation) => {
    const values = operation.join('');
    let result = eval(values);
    result = fixNumber(result);
    return result;
}

fixNumber = (number) => {
    let fixedNumber;
    if (number % 1 != 0) {
        fixedNumber = number.toPrecision(7);
    } else {
        if (number.toString().length > 7) {
            fixedNumber = number.toExponential();
            const base = fixedNumber.split('e+');
            fixedNumber = Number(base[0]).toFixed(4) + "e+" + base[1];
        }
        else {
            fixedNumber = number;
        }
    }
    return fixedNumber;
}

addToOperation = val => {
    operation += val;
    document.getElementById("operation").getElementsByTagName("P")[0].innerHTML = operation;
}

getResult = () => {
    let result = this.myCalculator(operation);
    document.getElementById("result").getElementsByTagName("P")[0].innerHTML = result;
    document.getElementById("operation").getElementsByTagName("P")[0].innerHTML = result;
    operation = result;
}

clearAll = () => {
    document.getElementById("operation").getElementsByTagName("P")[0].innerHTML = "";
    document.getElementById("result").getElementsByTagName("P")[0].innerHTML = "";
    operation = "";
}