var display = document.getElementById("result"); 

function getInput(data){
  display.innerHTML += data;
}

function displayResult(){
  display.innerHTML = eval(display.innerHTML);
}

function Clear(){
  display.innerHTML = " ";
}
