function writeValue(value){
	var board=document.getElementById('board');
	if(board.innerText=="Infinity"||board.innerText=="Syntax Error"||board.innerText=="0"){
		board.innerText=(value);
	}
	else{
		board.innerText=(board.innerText.concat(value));
	}
}

function erase(){
	var board=document.getElementById('board');
	if(board.innerText=="Infinity"||board.innerText=="Syntax Error"){
		board.innerText=(0);
	}
	else if(board.innerText.length==1){
		board.innerText=(0);
	}
	else{
		board.innerText=(board.innerText.slice(0, -1));
	}
}

function result(){
	var board=document.getElementById('board');
	try {
		evaluate(board);
		var result= eval(board.innerText);
		if(result==undefined){
			board.innerText=(0);
		}
		else{
			var history=document.getElementById('history');
			var element=document.createElement("p");
			var elementText=document.createTextNode(board.innerText.concat(" = ").concat(result));
			element.appendChild(elementText);
			history.appendChild(element);
			board.innerText=(result);
		}
	}
	catch(error) {
    board.innerText=("Syntax Error");
	}
}

function evaluate(board){
 var exp = new RegExp('([0-9]|/+|-|//|/*|/.)+');
 var result= exp.test(board.innerText);
 if(!result){
	 board.innerText="Syntax Error";
 }
}
