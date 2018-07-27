window.onload = function (){
    var BtnCalc = document.getElementsByClassName('BtnCalc')
    console.log(Array.from(BtnCalc));
    function getValue(){
        var value = this.value;
        document.getElementById('result').innerHTML=value;
        console.log(value);
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