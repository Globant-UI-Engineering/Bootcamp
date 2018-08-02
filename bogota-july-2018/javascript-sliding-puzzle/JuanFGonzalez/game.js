
let board = [[],[],[],[]];
let cells = document.getElementsByTagName("div");

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
    document.getElementById(j+1).addEventListener("click", swapCells);
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


const swapCells = () => {
  /*get the id of the cell clicked and find
    the id of the empty cell to validate the move */
}

