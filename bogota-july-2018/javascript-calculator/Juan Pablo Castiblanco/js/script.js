
function updateScreen(value){
  var screen = document.getElementById('preview');
  screen.style.color = "black";

  if(screen.innerText == '0' || screen.innerText == 'Infinity' || screen.innerText == 'Syntax error'){
    screen.innerText = value;
  }else{
    screen.innerText = screen.innerText.concat(value);
  }
}

function calculate() {
  const screen = document.getElementById('preview');
  const operation = screen.innerText;
  const regExpression = /[0-9]+(\+|-|\/|\*)[0-9]+/;
  if (operation.match(regExpression)) {
    screen.style.color = "green";
    screen.innerText = eval(operation);
  }else{
    screen.style.color = "red";
    screen.innerText = "Syntax error";
  }
}

function allCancel(){
  const screen = document.getElementById('preview');
  screen.style.color = "black";
  screen.innerText = "0";
}

function cancelEntry(){
  const screen = document.getElementById('preview');
  screen.style.color = "black";
  screen.innerText = screen.innerText.slice(0,-1);
}
