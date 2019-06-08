var result = document.getElementById('result');
var num1,num2, op="",fin=0;
result.value='0';

function operation(numb){
    if(numb=='clear'){
        result.value='0';            
        op = "";
    }else{
        if(result.value=='0'){
            if(numb=="+" || numb=="-" || numb=="/" || numb=="x" ){                
                result.value='0';
            }else{
                result.value=numb;            
            }
        }else{            
            if(numb=="="){
                if(num1!=0 && num2 !=0){
                    apply();                                    
                }
                fin=1;
            }else{
                if(fin==1){
                    result.value=numb;
                    op="";
                    fin=0;
                }else{
                    result.value = result.value+numb;
                    if(numb=="+" || numb=="-" || numb=="/" || numb=="x"){                
                        if(op==""){
                            op = numb;                       
                        }else{
                            apply();
                            result.value=result.value+numb;
                            op = numb;                       
                        }
                    }
                }
            }
        }        
    }
}

function apply(){
    var aux;
    if(op=="+"){                    
        aux = result.value.split("+");
        num1 = parseFloat(aux[0]);
        num2 = parseFloat(aux[1]);
        result.value=add(num1,num2);
    }
    if(op=="-"){                    
        aux = result.value.split("-");
        num1 = parseFloat(aux[0]);
        num2 = parseFloat(aux[1]);
        result.value=subs(num1,num2);
    }
    if(op=="/"){                    
        aux = result.value.split("/");
        num1 = parseFloat(aux[0]);
        num2 = parseFloat(aux[1]);
        result.value=divide(num1,num2);
    }
    if(op=="x"){                    
        aux = result.value.split("x");
        num1 = parseFloat(aux[0]);
        num2 = parseFloat(aux[1]);
        result.value=mult(num1,num2);
    }
}

function add(a,b){
    return a+b;
}

function subs(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function mult(a,b){
    return a*b;
}