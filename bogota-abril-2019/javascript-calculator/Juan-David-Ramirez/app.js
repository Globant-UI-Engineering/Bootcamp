window.onload = function(){
    init();
    
};

var operation = ["0"];

var init = function(){
    render();
    initNumbers();
    initOperators();
};

var initNumbers = function(){
    for(let i = 0; i<10; i++){
        var button = document.getElementById("number" + i);
        console.log(operation);
        button.onclick = function(event){
            var lastElement = parseInt(operation[operation.length-1]);
            console.log(operation);
            if(isNaN(lastElement) ){
                operation.push(i.toString());
            } else if(!isNaN(lastElement)){
                operation[operation.length-1] =  parseInt(operation[operation.length-1] + i).toString();
                
            }
            render();
            
        };
    }
};



var initOperators = function(){
    var plusButton = document.getElementById("plus");
    plusButton.onclick = function(event){
        if(!isNaN(parseInt(operation[operation.length-1]))){
            console.log(parseInt(operation[operation.length-1]));
            operation.push("+");
        }
    }
};

var render = function(){
    console.log(operation);
    document.getElementById("screen-text").innerText = operation[0];
}

