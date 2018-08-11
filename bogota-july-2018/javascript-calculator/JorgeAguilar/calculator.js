var screen = document.getElementById("display");

var isResult = false;

function selectNumber( num ){
    isResult ? restart() : "";
    screen.innerHTML += num;
    isResult = false;
}

function selectOperation ( operation ){
    if (operation === '='){
       screen.innerHTML = eval(screen.innerText);
       isResult = true;
    }
    else{
        if(!Number.isNaN(parseInt(screen.innerText.slice(-1)))){
           isResult = false;
            screen.innerHTML += operation;
        }
        
    }
}

function deleteLast(){
    screen.innerHTML = screen.innerText.slice(0,-1);
}

function restart(){
    screen.innerHTML = "";
}