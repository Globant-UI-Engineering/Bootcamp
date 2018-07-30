//save user input
let inputArray=[];
let state=true;
let hasDec=false;
let inputArray2=[];
let operators=['*','/','+','-','%'];
//Function for operators
function setOperation(op){
    if(operators.includes(inputArray[inputArray.length-1]) || inputArray.length==0){
        //do nothing
        }
    else{
        hasDec=false;
        state=false;
        inputArray.push(op);
        document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2).join('')); 
        }
}
//Function to setting buttons
function setText(input){
    if(state==true){ 
        
    inputArray.push(input);
    document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2).join(''));  
     }
     else{
          inputArray2.push(input);
          document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2).join('')); 
     }
}
//Function to decimal
function setDecimal(){
        if(hasDec==false && state==true){
         hasDec=true;
         inputArray.push('.');
         document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2).join(''));   
       }
       if(hasDec==false && state==false){
        hasDec=true;
        inputArray2.push('.');
        document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2).join(''));     
      }
    }
//Function clearscreen
function clearScreen(){
    document.getElementById('showbox').innerHTML="0"; 
    inputArray=[];
    inputArray2=[];
    state=true;
    hasDec=false; 
}
//Function equal
function equal(){
 
    let total;
    let inherit;
    if(inputArray.length>0 && inputArray2.length>0){  
      total=eval(((inputArray.concat(inputArray2))).join(''));   /*Operation*/
      document.getElementById('showbox').innerHTML=total;
      inherit=total.toString();
      inputArray=(inherit.split(''));
      inputArray2=[];
      state=true;
      hasDec=false; 
    }
}
//Delete date
function deleteDate(){
    if(state==false){
     inputArray2.pop();
     document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2)).join(''); 
     if(inputArray2.length==0){
     state=true;
     }   
    }
    else{
    inputArray.pop();
    document.getElementById('showbox').innerHTML=(inputArray.concat(inputArray2)).join('');  
    if(inputArray.length==0){
        document.getElementById('showbox').innerHTML="0"; 
        } 
}
}


