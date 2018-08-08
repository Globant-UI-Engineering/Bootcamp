
let board = [[],[],[],[]];
let cells = document.getElementsByTagName("div");
let emptyCell;

const start = () => {
  setBoard();
}

const restart = () => {
  window.location.reload();
}


const setBoard = () => {
  let numbers = [];
  for(let i=0; i < 16; i++){
    numbers[i] = cells[i].innerText;
  }

  numbers = scramble(numbers);

  for(var j=0; j<16; j++){
    document.getElementById(j+1).innerText = numbers[j];
    if(numbers[j] === ""){
       emptyCell = j+1;
    }
    document.getElementById(j+1).addEventListener("click", function(){
      swapCells(j+1);
    });
  }
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


const swapCells = (idCell) => {
   let cell = document.getElementById(idCell);
   let empty = document.getElementById(emptyCell);
  if(idCell-1 == emptyCell || idCell+1 == emptyCell || idCell+4 == emptyCell || idCell-4 == emptyCell){
    empty.innerText = cell.innerText;
    cell.innerText = "";
    emptyCell = idCell;
  }
}

