window.onload = function (){
    document.getElementById('equal').addEventListener('click', function () {
        var inputText = document.getElementById('inputMath').value;
        document.getElementById('inputMath').value='';
        document.getElementById('result').innerHTML=calculator(inputText);
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