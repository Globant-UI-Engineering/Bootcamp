window.onload = function (){
    var BtnCalc = document.getElementsByClassName('BtnCalc')
    var inputData =[];
    var indexOfOperator;
    var keyOperatorAllowed = true;
    function buttonHandler(){
        var keyPressed = getValue(this);

        var controlOperator ={
            '=': function(){
                var result = calculator(inputData.toString().replace(/,/g,""));
                clearInputData();
                inputData.push(result);
                printInputData(inputData);
                keyOperatorAllowed = true;

            },
            'clc': function(){
                clearInputData();
                printInputData("");
                keyOperatorAllowed = true;
            },
            'x': function(){
                if(keyOperatorAllowed){
                indexOfOperator=inputData.length;
                printInputData(keyPressed);};
                keyOperatorAllowed = false;
            },
            '/': function(){
                if(keyOperatorAllowed){
                indexOfOperator=inputData.length;
                printInputData(keyPressed);};
                keyOperatorAllowed = false;
            },
            '-': function(){
                if(keyOperatorAllowed){
                indexOfOperator=inputData.length;
                printInputData(keyPressed);};
                keyOperatorAllowed = false;
            },
            '+': function(){
                if(keyOperatorAllowed){
                indexOfOperator=inputData.length;
                printInputData(keyPressed);};
                keyOperatorAllowed = false;
            },
        }
        if(controlOperator[keyPressed]){
         controlOperator[keyPressed]();
        }else{
            printInputData(keyPressed);
        }
    }
    function clearInputData(){
    inputData.splice(0,inputData.length);
    }
    function printInputData(data){
        if(data){inputData.push(data)};
        document.getElementById('inputMath').value=inputData.toString().replace(/,/g,"");
    }
    function getValue(btn){
        return btn.value;
    }
    Array.from(BtnCalc).forEach(function(btn){
        btn.addEventListener('click',buttonHandler);
    });
    function calculator(operation){
        var firstNumber =operation.slice(0,indexOfOperator);
        var secondNumber = operation.slice(indexOfOperator+1);
    var operators ={
        '+' : function(a,b){
            return a+b;
        },
        '-' : function(a,b){
            return a-b;
        },
        'x': function(a,b){
            return a*b;
        },
        '/': function(a,b){
            return a/b;
        }
    }
    if(operators[operation[indexOfOperator]]){
        return operators[operation[indexOfOperator]](Number(firstNumber),Number(secondNumber));
    }
    else{
        return null;
    }
    
}
}