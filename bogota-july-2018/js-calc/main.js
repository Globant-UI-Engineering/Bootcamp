window.onload = function (){
    var BtnCalc = document.getElementsByClassName('BtnCalc')
    var inputData =[];
    console.log(Array.from(BtnCalc));
    function getValue(){
        inputData.push(this.value);
        document.getElementById('inputMath').value=inputData.toString().replace(/,/g,"");
        console.log(inputData);
    }
    Array.from(BtnCalc).forEach(function(btn){
        btn.addEventListener('click',getValue);
    });
    function calculator(operation){
    var operators ={
        '+' : function(a,b){
            return a+b;
        },
        '-' : function(a,b){
            return a-b;
        },
        '*': function(a,b){
            return a*b;
        },
        '/': function(a,b){
            return a/b;
        }
    }
    if(operators[operation[1]]){
        return operators[operation[1]](Number(operation[0]),Number(operation[2]));
    }
    else{
        return null;
    }
    
}
}