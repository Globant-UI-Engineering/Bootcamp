var calculations={
    total:0,
    first:null,
    second:null,
    operand:null,
    decimal:false
}

var nums=document.querySelectorAll('button[data-value]');
nums.forEach(value=>{
    value.addEventListener('click',(element)=>{
    var temp= document.getElementById('operation').innerHTML;
     if(!calculations.decimal){
        temp+= element.srcElement.innerHTML;
        if(element.srcElement.innerHTML=='.') 
        calculations.decimal=true;
    }else if(element.srcElement.innerHTML!='.'){
        temp+= element.srcElement.innerHTML;   
    }
     document.getElementById('operation').innerHTML= temp;
    var total = document.getElementById('display-total');
    if(calculations.first!=null && calculations.operand!=null){
        var tempArray = temp.split(calculations.operand);
        calculations.second =  Number(tempArray[tempArray.length-1]);
        switch(calculations.operand){
            case '+':
                calculations.total = calculations.first + calculations.second;
            break; 
            case '-':
                calculations.total = calculations.first - calculations.second;
            break; 
            case 'x':
                calculations.total = calculations.first * calculations.second;
            break;
            case '÷':
                if(calculations.second!=0){
                    calculations.total = calculations.first / calculations.second;
                } else{
                    clearValues();
                }
            break; 
            }
            total.innerHTML= calculations.total==0 ? 0 : calculations.total;
        } else{
            if(calculations.total!=0)
            document.getElementById('operation').innerHTML = temp.replace(calculations.total,'');
            calculations.total=0;
        }
    })
});

function clearValues(){
    document.getElementById('operation').innerHTML="";
    document.getElementById('display-total').innerHTML="0";
    clearObject();
}  

function clearObject(){
    calculations={
        total:0,
        first:null,
        second:null,
        operand:null,
    }
}


function addOperand(operand){
   var operation=document.getElementById('operation').innerHTML;
    if(operation!=''){
        if(!isNaN(operation.substr(operation.length-1))){
            document.getElementById('operation').innerHTML +=operand;
        } else{
            document.getElementById('operation').innerHTML = operation.substring(0,operation.length-1) + operand;
        }
        var numArray = document.getElementById('operation').innerHTML.split(operand);
        obtainFirst(numArray,operand);
    }
}

function obtainFirst(numArray,operand){
    numArray.pop();
    if(numArray.length!=0){
        if(calculations.total==0 && calculations.first==null){
            calculations.first = Number(numArray[numArray.length-1]);
        } else{
            calculations.first= calculations.total;
        }
        calculations.operand = operand;
        calculations.decimal =false;
    }
}

function setOperation(){
    if(calculations.total==0){
        document.getElementById('operation').innerHTML = '';
    } else{
        document.getElementById('operation').innerHTML = calculations.total;
    }
    calculations.first=null;
    calculations.second=null;
    calculations.operand=null;
    calculations.decimal=false;
}

function absolute(){
    calculations.total*=-1;
    document.getElementById('display-total').innerHTML = calculations.total;
    if(calculations.total==0){
        document.getElementById('operation').innerHTML = '';
    } else{
        document.getElementById('operation').innerHTML = calculations.total;
    }
}