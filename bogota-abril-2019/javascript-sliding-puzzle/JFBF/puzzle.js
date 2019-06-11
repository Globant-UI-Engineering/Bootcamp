const places = Array.from(document.querySelectorAll('.puzzle input'));
var currentEmptyId = "16";
const EMPTY_CLASS = "empty";


function moveRequest(id){
  let canMove = false;
  if(id != currentEmptyId){
    let index = {
      numIndex : places.findIndex(x => x.id == id),
      emptyIndex : places.findIndex(x => x.id == currentEmptyId)
    }
    var canMoveRow = ({numIndex,emptyIndex},num = Math.abs(numIndex-emptyIndex)) => num == 1?true:false;
    canMove = canMoveRow(index);
    canMove = !canMove ? canMoveColumn(index):canMove;
    move(canMove,index,id);
  }

}

function canMoveColumn({numIndex,emptyIndex}){
  if(numIndex < emptyIndex){
    return numIndex+4 == emptyIndex ?true : false;
  }else{
    return emptyIndex+4 == numIndex ?true : false;
  }
}

function move(canMove,{numIndex,emptyIndex},id){
  if(canMove){
    [places[numIndex].value, places[emptyIndex].value] = [places[emptyIndex].value ,places[numIndex].value];
    [places[emptyIndex].classList,places[numIndex].classList] = [places[numIndex].classList, EMPTY_CLASS]
    currentEmptyId = id;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  numberGenerator([]);

}, false);

function numberGenerator (arr,pos = 0) {
  if (arr.length >= 15) return;
  let newNumber = Math.floor(Math.random() * 15 + 1);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
    places[pos].value = newNumber;
    places[pos].classList.remove(...places[pos].classList);
    places[pos].classList.add("img"+newNumber)
    pos ++;
  }
  numberGenerator(arr,pos);
};