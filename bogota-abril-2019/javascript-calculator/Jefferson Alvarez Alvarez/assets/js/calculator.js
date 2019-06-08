var mathExpression = "";

function printMathExpression(mathExp) {
    document.getElementById("screen").value = mathExp;
};

function addSign(sign) {
    if(isNaN(1*mathExpression[mathExpression.length-1])) {
        mathExpression = mathExpression.slice(0, -1) + sign;
    } else {
        mathExpression += sign;
    }
};

function cleanExpression() {
    if(!!mathExpression[mathExpression.length-1] &&
       isNaN(mathExpression[mathExpression.length-1])) {
        mathExpression = mathExpression.substring(0, mathExpression.length-1);
    }
};

function getSeparatedValues(mathString) {
    mathString = mathString.replace(/\+\+/g, '+');
    mathString = mathString.replace(/\-\-/g, '+');
    mathString = mathString.replace(/\+\-/g, '-');
    mathString = mathString.replace(/\-\+/g, '-');

    var numbersAndSigns = [];
    var signs = [];
    var numbers = [];

    var number = "";
    for(var i = 0; i < mathString.length; i++) {
        if(mathString[i] === '+' || mathString[i] === '-' ||
           mathString[i] === '/' || mathString[i] === '*') {
            signs.push(mathString[i]);
            numbers.push(number);
            number = "";
        } else {
            number += mathString[i];
        }
        if(i === mathString.length-1) {
            numbers.push(number);
        }
    }

    var previousSign;
    for(var i = 0; i < numbers.length; i++) {
        if(!numbers[0]) {
            if(i === 0) continue;
            if(signs[i-1] === '+' || signs[i-1] === '-') {
                numbersAndSigns.push(parseFloat(signs[i-1] + numbers[i]));
            } else {
                numbersAndSigns.push(parseFloat(numbers[i]));
            }
            if(!!signs[i]) {
                if(signs[i] === '+' || signs[i] === '-') {
                    numbersAndSigns.push('+');
                } else {
                    numbersAndSigns.push(signs[i]);
                }
            }
        } else {
            if(i === 0) {
                numbersAndSigns.push(parseFloat(numbers[i]));
                if(!!signs[i]) {
                    if(signs[i] === '+' || signs[i] === '-') {
                        numbersAndSigns.push('+');
                    } else {
                        numbersAndSigns.push(signs[i]);
                    }
                }
            } else {
                if(signs[i-1] === '+' || signs[i-1] === '-') {
                    numbersAndSigns.push(parseFloat(signs[i-1] + numbers[i]));
                } else {
                    numbersAndSigns.push(parseFloat(numbers[i]));
                }
                if(!!signs[i]) {
                    if(signs[i] === '+' || signs[i] === '-') {
                        numbersAndSigns.push('+');
                    } else {
                        numbersAndSigns.push(signs[i]);
                    }
                }
            }
        }
    }

    return numbersAndSigns;
};

function getPairs(mathString) {
    var pairs = [];
    var numbersAndSigns = getSeparatedValues(mathString);
    for(var i = 0; i < numbersAndSigns.length-2; i++) {
        if(!isNaN(numbersAndSigns[i])) {
            pairs.push({
                numberOne : numbersAndSigns[i],
                sign      : numbersAndSigns[i+1],
                numberTwo : numbersAndSigns[i+2]
            });
        }
    }
    return pairs;
}

/* eval(mathString) should not be used because of security issues */
function makeOperation() {
    var result;

    var pairs = getPairs(mathExpression);
    while(pairs.length > 0) {
        var pairIdx;
        for(var i = 0; i < pairs.length; i++) {
            pairIdx = i;
            if(pairs[i].sign === '*') {
                result = pairs[i].numberOne * pairs[i].numberTwo;
                break;
            } else if(pairs[i].sign === '/') {
                result = pairs[i].numberOne / pairs[i].numberTwo;
                break;
            } else if(pairs[i].sign === '+') {
                result = pairs[i].numberOne + pairs[i].numberTwo;
            }
        }
        var newMathExp = "";
        for(var i = 0; i < pairs.length; i++) {
            if(i === pairIdx) {
                newMathExp += result;
            } else if(!!pairs[i] && i > pairIdx) {
                newMathExp += pairs[i].sign;
                newMathExp += pairs[i].numberTwo;
            } else if(!!pairs[i] && i < pairIdx) {
                newMathExp += pairs[i].numberOne;
                newMathExp += pairs[i].sign;
            }
        }
        pairs = getPairs(newMathExp);
    }
    if(result == null) {
        result = mathExpression;
    }

    printMathExpression(result);
};

/* Function for each button to not damage sematic tags in HTML*/
document.getElementById("one").onclick = function() {
    mathExpression += 1;
    printMathExpression(mathExpression);
};
document.getElementById("two").onclick = function() {
    mathExpression += 2;
    printMathExpression(mathExpression);
};
document.getElementById("three").onclick = function() {
    mathExpression += 3;
    printMathExpression(mathExpression);
};
document.getElementById("four").onclick = function() {
    mathExpression += 4;
    printMathExpression(mathExpression);
};
document.getElementById("five").onclick = function() {
    mathExpression += 5;
    printMathExpression(mathExpression);
};
document.getElementById("six").onclick = function() {
    mathExpression += 6;
    printMathExpression(mathExpression);
};
document.getElementById("seven").onclick = function() {
    mathExpression += 7;
    printMathExpression(mathExpression);
};
document.getElementById("eight").onclick = function() {
    mathExpression += 8;
    printMathExpression(mathExpression);
};
document.getElementById("nine").onclick = function() {
    mathExpression += 9;
    printMathExpression(mathExpression);
};
document.getElementById("zero").onclick = function() {
    mathExpression += 0;
    printMathExpression(mathExpression);
};
document.getElementById("sum").onclick = function() {
    addSign("+");
    printMathExpression(mathExpression);
};
document.getElementById("minus").onclick = function() {
    addSign("-");
    printMathExpression(mathExpression);
};
document.getElementById("mult").onclick = function() {
    addSign("*");
    printMathExpression(mathExpression);
};
document.getElementById("division").onclick = function() {
    addSign("/");
    printMathExpression(mathExpression);
};
document.getElementById("dot").onclick = function() {
    mathExpression += ".";
    printMathExpression(mathExpression);
};
document.getElementById("equals").onclick = function() {
    cleanExpression();
    makeOperation();
};
document.getElementById("clear").onclick = function() {
    mathExpression = "";
    printMathExpression(mathExpression);
};