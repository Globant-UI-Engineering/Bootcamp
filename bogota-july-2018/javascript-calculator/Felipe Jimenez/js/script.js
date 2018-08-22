function result(){
	var board=document.getElementById('board');
	try {
		var first=document.getElementById('numberLeft').value;
		var second=document.getElementById('numberRight').value;
		var operator=document.getElementById('operator').value;
		var result= eval(first.concat(operator).concat(second));
		board.innerText=(result);
	}
	catch(error) {
    board.innerText=("Syntax Error");
	}
}
