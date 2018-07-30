
var tiles = [];
var cells = Array.from(document.getElementsByTagName("div"));
var tileId;

const start = () => {
  createBoard();
}

const restart = () => {
  window.location.reload(false);
}

const createBoard = () => {
  let boardRow = [];
  const options = [" ","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
 /* for (const row of options) {
    
  }*/
  scramble(options);
  fillCells();
}

const scramble = (numbersArray) => {
  let total = numbersArray.length;
  let temporal;
  let index;

  while(total > 0){
    index = Math.floor(Math.random() * total);
    total--;
    temporal = numbersArray[total];
    numbersArray[total] = numbersArray[index];
    numbersArray[index] = temporal;
  }
  return numbersArray;
}

const fillCells = () => {
  tiles.forEach( (rows, cols) => {
      rows.forEach( (item, index) => {
          cells[cols * 4 + index].innerText = item;
          cells[cols * 4 + index].id = row + "," + index;
      });
  });
}

cells.forEach( (tile) => {
  tile.addEventListener("click", () => {
      /*find the empty tile and when found 
      change it for the adjacent tile being clicked */
  });
});

const changeTile = () => {

}

const findEmptyTile = () => {

}