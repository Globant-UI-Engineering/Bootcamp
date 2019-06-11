window.onload = function(){
    init();
};

/**
 * This is the Array that represents the operation in screen.
 */
var operation = clearAndInitScreen();

/**
 * This function initialize all the functionalities of the calculator.
 */
var init = function(){
    render();
    initNumbers();
    initOperators();
};

/**
 * It returns an array with one element (0), this is the initial state of the screen.
 */
function clearAndInitScreen(){
    return [0];
}


/**
 * This method adds all the number buttons click listeners.
 */
var initNumbers = function(){
    for(let i = 0; i<10; i++){
        var numberButton = document.getElementById("number" + i);
        numberButton.onclick = function(event){
            var lastElement = operation[operation.length-1];
            if(typeof lastElement == "string" && lastElement.indexOf(".") == -1){
                operation.push(i);
            } 
            else if(typeof lastElement == "string" && lastElement.indexOf(".") != -1){
                operation[operation.length-1] = parseFloat(operation[operation.length-1] + i);
            }
            else if(typeof lastElement == "number" && (lastElement * 10) % 10 == 0){
                operation[operation.length-1] = parseInt(operation[operation.length-1].toString() + i);
            }
            else if(typeof lastElement == "number" && (lastElement * 10) % 10 != 0){
                operation[operation.length-1] = parseFloat(operation[operation.length-1].toString() + i);
            }
            render();
            
        };
    }
};


/**
 * This method initialize all the calculator's operators.
 */
var initOperators = function(){
    initBinaryOperators();
    initUnaryOperators();
    initOtherOperators();
};


/**
 * This method adds all the binary operator button listeners such as +, -, / and *.
 */
var initBinaryOperators = function() {
    var binaryOperators = document.querySelectorAll(".binary-oper");
    for (let i = 0; i < binaryOperators.length; i++) {
        binaryOperators[i].onclick = function (event) {
            var lastElement = operation[operation.length - 1];
            if (typeof lastElement == "number" || (typeof lastElement == "string") && lastElement.length > 1) {
                operation.push(binaryOperators[i].innerText);
            }
            render();
        };
    }
}

/**
 * This method adds all the unary operator button listeners such as the negate function.
 */
var initUnaryOperators = function() {

    var negateButton = document.getElementById("negate");
    negateButton.onclick = function (event) {
        var lastElement = operation[operation.length - 1];
        if (typeof lastElement == "string") {
            var result = eval(operation.slice(0, operation.length - 1).join(''));
            operation.push(-result);
        }
        else if (typeof lastElement == "number") {
            operation[operation.length - 1] = -lastElement;
        }
        render();
    };


}


/**
 * This method adds all the remaining operators such as %, ., clear and equals.
 */
var initOtherOperators = function () {
    var percentageButton = document.getElementById("percentage");
    percentageButton.onclick = function (event) {
        if (operation.length > 2) {
            operation[operation.length - 1] = operation[operation.length - 1] / 100;
        }
        render();
    };
    var dotButton = document.getElementById("dot");
    dotButton.onclick = function (event) {
        var lastElement = operation[operation.length - 1];
        if (typeof lastElement == "string" && lastElement.indexOf(".") == -1) {
            operation.push(".");
        }
        else if (typeof lastElement == "number" && lastElement.toString().indexOf(".") == -1) {
            operation[operation.length - 1] += ".";
        }
        render();
    };

    var clearButton = document.getElementById("clear");
    clearButton.onclick = function (event) {
        operation = clearAndInitScreen();
        render();
    };

    var equalButton = document.getElementById("equal");
    equalButton.onclick = function(event){
        var resultString = operation.join('');
        try{
            var result = eval(resultString);
            if(isFinite(result)){
                operation = [result];
            } else{
                operation = ["ERROR"];
            }
            
        } catch(err){
            operation = ["ERROR"];
            
        }
        render();
    }
}

/**
 * Draw in screen the actual operation fixed to 13 characters
 */
var render = function(){
    document.getElementById("screen-text").innerText = operation.join('').slice(0,13);
}

