window.onload= function(){
	moves=0;
	globalMovements = getMovements();
	globalPieces = createPieces();
	fillBoard();
}

var globalPieces;
var globalMovements;
var moves;

function getMovements(){
	var movements = new Map();
	movements.set('0', [1,4]);
	movements.set('1', [0,2,5]);
	movements.set('2', [1,3,6]);
	movements.set('3', [2,7]);
	movements.set('4', [0,5,8]);
	movements.set('5', [1,4,6,9]);
	movements.set('6', [2,5,7,10]);
	movements.set('7', [3,6,11]);
	movements.set('8', [4,9,12]);
	movements.set('9', [5,8,10,13]);
	movements.set('10', [6,9,11,14]);
	movements.set('11', [7,10,15]);
	movements.set('12', [8,13]);
	movements.set('13', [9,12,14]);
	movements.set('14', [10,13,15]);
	movements.set('15', [11,14]);
	return movements;
}

function createPieces(){
	var numbers=shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
	var pieces = [0];
	var piece;
	var pieceText;
 	for(var i=0; i<15; i++){
		piece=document.createElement("button");
		pieceText=document.createTextNode(numbers[i]);
		piece.appendChild(pieceText);
		piece.addEventListener('click', function(event){move(event.target);});
		pieces.push(piece);
 	}
	return pieces;
}

function fillBoard(){
	var field;
	for(var i=1; i<16; i++){
		field=document.getElementById('field-' + (i));
		field.appendChild(globalPieces[i]);
 	}
}

function isFinished(){
	if (globalPieces[0]!=0){
		return false;
	}
	for(var i=1; i<16; i++){
		if(globalPieces[i].innerText!=globalPieces[i].parentElement.getAttribute('id').substring(6)){
			return false;
		}
	}
	return true;
}

function move(piece){
	var stateText = document.getElementById('state-text');
	var stateMovesText = document.getElementById('state-moves-text');
	var movesCounter = document.getElementById('moves-counter');
	var selectedField = piece.parentElement;
	var selectedFieldIndex = selectedField.getAttribute('id').substring(6);
	var emptyFieldIndex = globalPieces.indexOf(0);
	var emptyField = document.getElementById('field-' + (emptyFieldIndex));
	var emptyFieldMovements = globalMovements.get(emptyFieldIndex.toString());

	if(emptyFieldMovements.includes(parseInt(selectedFieldIndex))){
		moves++;
		movesCounter.innerText=("Moves: "+moves);
		globalPieces[selectedFieldIndex]=0;
		globalPieces[emptyFieldIndex]=piece;
		emptyField.appendChild(piece);
		if(isFinished()){
			stateMovesText.innerText=("In "+moves+" moves");
			stateText.innerText=("Finished");
			stateText.className=("success-text");
			globalMovements.set('0', []);
		}
	}
}

function shuffle(array) {
  var index = array.length;
	var temporary;
	var random;
  while (index != 0) {
    random = Math.floor(Math.random() * index);
    index = index-1;
    temporary = array[index];
    array[index] = array[random];
    array[random] = temporary;
  }
  return array;
}
