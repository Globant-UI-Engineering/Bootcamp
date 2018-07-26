var html_object = document;

document.addEventListener("DOMContentLoaded", function(){

  var digits_button = document.querySelectorAll("#buttons>button");
  var operator_button = document.querySelectorAll("#operations>button");
  var p = document.querySelector("p");
  digits_button.forEach(function(elemento, idx){
    elemento.addEventListener("click", function(click_event){
      if (calc.ready === true){
        p.innerText = click_event.target.innerText;
      }else{
        p.innerText += click_event.target.innerText;
      }
      calc.ready = false;
    });
  });

  var calc = {
    result: 0,
    last_op: null,
    ready: true,
    validate : function(input){
      if(typeof(input) === "number"){
        return true;
      }else{
        console.error("el dato ingresado no es un número");
      }
    },
    plus : function(addend){
      if (this.validate(addend)){
        this.result = this.result + addend;
        console.log(this.result);
      }
    },
    minus : function(substract){
      if(this.validate(substract)){
        this.result = this.result - substract;
        console.log(this.result);
      }
    },
    times : function(multiplier){
      if(this.validate(multiplier)){
        this.result = this.result * multiplier;
        console.log(this.result);
      }
    },
    divide : function (dividing){
      if (this.validate(dividing)){
        this.result = this.result / dividing;
        console.log(this.result);
      }
    },
    pow : function(exp){
      if(this.validate(exp)){
        this.result = Math.pow(this.result, exp);
      }
    },
    clear : function(){
      this.result = 0;
    },
  };

  var c = {resultado:0};
  operator_button.forEach(function(operador, op_idx){
    operador.addEventListener("click", function(evento_click){
      if(calc.last_op === null){
        if (p.innertext === ""){
        calc.result = 0;
        }else{
        calc.result = Number.parseInt(p.innerText);
        }
        p.innerText = 0;
      }else {
        var input_number = Number.parseInt(p.innerText);
        console.log(c.resultado);
        if(op_idx === 0){
          calc.clear();
        }else if (operador.innerText === "+"){
          calc.plus(input_number);
        }else if (operador.innerText === "-"){
          calc.minus(input_number);
        }else if (operador.innerText === "*"){
          calc.times(input_number);
        }else if (operador.innerText === "/"){
          calc.divide(input_number);
        }else if (operador.innerText === "="){
          calc.result = calc.result + Number.parseInt(p.innerText);
          p.innerText = calc.result;
        }
      }
      calc.last_op = operador.innerText;
      p.innerText = calc.result;
      calc.ready = true;
    });
  });
});
