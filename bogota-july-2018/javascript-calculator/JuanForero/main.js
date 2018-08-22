
let inputArray=[];
let inputArray2=[];
let stateInput=true;
let stateOperation=false;
let operators=['*','/','+','-','%'];
function setOperation(op){
    if(operators.includes(inputArray[inputArray.length-1]) || inputArray.length==0){
        //do nothing
        }
    else{
        stateOperation=false;
        stateInput=false;
        inputArray.push(op);
        write();
        }
}

function setNumber(input){
    if(stateInput==true){ 
    inputArray.push(input);
    write();  
     }
     else{
          inputArray2.push(input);
          write();
     }
}

function setDecimal(){
        if(stateOperation==false && stateInput==true){
            stateOperation=true;
            inputArray.push('.');
            write();  
       }
       if(stateOperation==false && stateInput==false){
        stateOperation=true;
        inputArray2.push('.');
        write();   
      }
    }


function clearScreen(){
    document.getElementById('showbox').innerHTML="0"; 
    inputArray=[];
    inputArray2=[];
    stateInput=true;
    stateOperation=false; 
}

function equal(){
    let total;
    let inherit;
    if(inputArray.length>0 && inputArray2.length>0){  
      total=eval(((inputArray.concat(inputArray2))).join(''));   /*Operation*/
      document.getElementById('showbox').innerHTML=total;
      inherit=total.toString();
      inputArray=(inherit.split(''));
      inputArray2=[];
      stateInput=true;
      stateOperation=false; 
    }
}


function deleteDate(){
    if(stateInput==false){
     inputArray2.pop();
     write();
     if(inputArray2.length==0){
    stateInput=true;
     }   
    }
    else{
    inputArray.pop();
    write();
    if(inputArray.length==0){
        document.getElementById('showbox').innerHTML="0"; 
        } 
}
}

function write(){
    document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2)).join('');  
}


