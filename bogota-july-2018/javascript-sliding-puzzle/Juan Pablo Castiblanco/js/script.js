let tiles = [];
let moves = {
  0: ["1","3"],
  1: ["0","2","4"],
  2: ["1","5"],
  3: ["0","4","6"],
  4: ["1","3","5","7"],
  5: ["2","4","8"],
  6: ["3","7"],
  7: ["4","6","8"],
  8: ["5","7"]
};

let indexEmptySlot;

window.onload = function(){
  createTiles();
}

function createTiles(){
  const posibleNumbers = shuffle(["","1","2","3","4","5","6","7","8"]);
  for(let i = 0; i < 9; i++){

    //Create a button for each <li>
    const tile = document.createElement("button");
    const tile_txt = document.createTextNode(posibleNumbers[i]);
		tile.appendChild(tile_txt);

    if(posibleNumbers[i] === ""){
      applyEmptySlotStyle(tile);
      indexEmptySlot = i;
    }

    tile.onclick = function(event){ slide(event.target) };

    let slot = document.getElementById('slot'+i);
    slot.appendChild(tile);

    tiles.push(tile);
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function applyEmptySlotStyle(tile){
  tile.style.background = "gainsboro";
}

function applyNumberSlotStyle(tile){
  tile.style.background = "white";
}

function slide(tile){
  const posibleMoves = moves[""+indexEmptySlot];
  const tilePosition = tile.parentElement.getAttribute('id').substring(4);
  if(posibleMoves.includes(tilePosition)){
    const emptySlot = tiles[indexEmptySlot];
    emptySlot.innerText = tile.innerText;
    tile.innerText = "";
    applyEmptySlotStyle(tile);
    applyNumberSlotStyle(emptySlot);
    indexEmptySlot = tilePosition;

    if(itsOver()){
      alert('You win! You can restart the game by clicking the "Restart" button');
    }
  }
}

function itsOver(){
  for(let i = 0; i < 8; i++){
    const tilePosition = tiles[i].parentElement.getAttribute('id').substring(4);
    if(Number(tilePosition)+1 != tiles[i].innerText){
      return false;
    }
  }
  return true;
}

function restart(){
  window.location.reload(false);
}
