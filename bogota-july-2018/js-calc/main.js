//window.onload = function (){
    var operators ={
    'sumTwoValues' : function(a,b){
        return a+b;
    },
    'substractTwoValues' : function(a,b){
        return a-b;
    },
    'multiplyTwoValues': function(a,b){
        return a*b;
    },
    'divideTwoValues': function(a,b){
        return a/b;
    }
}
    console.log(operators['sum'](1,1));
//}