
//Variables
var calc = document.getElementById('cldora');
var res = document.getElementById('res');
var opA = " ";
var opB = " ";
var op,flag = true;

//eventos
function init() {
  calc.addEventListener('click',saveNumber);
}

function saveNumber(e){
    var tgt = e.target;
    var dataset = tgt.dataset;
    var value = dataset.value;
    var type = dataset.type;

    if(type == "number"){

     if(flag){
       res.innerText = (res.innerText.concat(value));
       opA = res.innerText;
    }else{
      res.innerText = (res.innerText.concat(value));
      opB = res.innerText;
    }
  }else{
      solve(type,value);
  }
}


//funciones
function solve(type,value) {
   if(type =="operator"){
     op = value;
     console.log(op);
     res.innerText = "";
     flag = false;

   }

   if(type == "action" && value =="="){
       answ();
   }

   if(type == "action" && value =="c"){
       reset();
        res.innerText = "";
   }
   if(type == "action" && value =="del"){

        var position =  res.innerText.length;
        var subs =  res.innerText.substring(0,position-1);
        console.log(subs);
        res.innerText = subs;

        if(flag)
        opA =subs;
        else{
         opB = subs;
        }
   }
 }

function reset(){
 opA="";
 opB="";
 op = "";
 flag = true;
}
function answ() {
 var aux=0;

 if(op == "+"){
   aux = parseFloat(opA) + parseFloat(opB);
 }
 if(op == "-"){
   aux = parseFloat(opA) - parseFloat(opB);
 }
 if(op == "*"){
   aux = parseFloat(opA) * parseFloat(opB);
 }
 if(op == "/"){
   aux = parseFloat(opA) / parseFloat(opB);
 }
    res.innerText = aux;
    opA = aux;
}
