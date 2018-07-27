window.onload= function(){
	var pieces = createPieces();
	initiateBoard(pieces);
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

function initiateBoard(pieces){
	var field;
	for(var i=1; i<16; i++){
		field=document.getElementById('field-' + (i));
		field.appendChild(pieces[i]);
 	}
}

function isFinished(){

}

function move(piece){
	console.log("movement");
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
