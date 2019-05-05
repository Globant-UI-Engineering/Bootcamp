var temp="";
var number="";
var operator;
document.getElementById('theDiv').onclick = function(event) {
  let target = event.target;

  if (!isNaN(Number(target.innerHTML))|| target.innerHTML ==="."){//Si es un numero
    temp += target.innerHTML;
    let t = document.getElementsByTagName('input');
    t[0].value=temp;
  }else{
    let select = target.innerHTML;
    if(select === "="){
      let t = document.getElementsByTagName('input');
      t[0].value = operate(Number(number),Number(temp),operator);
      temp="";
    }else if(select==="C"){
      clear();
    }else if(select==="+/-"){
      negar();
    }else{
      operator = target.innerHTML;
      number = temp;
      console.log(number);
      temp="";
    }
  }

};
function negar(){
  let t = document.getElementsByTagName('input');
  t[0].value = Number(t[0].value)*-1;
  temp = t[0].value;
}
function operate(x,y,o){
  if(o === "+"){
    return x+y;
  }else if(o ==="-"){
    return x-y;
  }else if(o ==="x"){
    return x * y;
  }else if(o ==="÷"){
    return x/y;
  }else if(o ==="%"){
    return x *(y/100);
  }
}
function clear(){
  document.getElementsByTagName('input')[0].value ="";
  temp="";
  number="";
}
