window.onload = a => {
 uMoves =0;
 console.log("onload");
 initBoard();
}
let uMoves;
let indexEmptyBox;
let boxes = [];
let boardMoves = {
  0: ["1","4"],
  1: ["0","2","5"],
  2: ["1","3","6"],
  3: ["2","7"],
  4: ["0","5","8"],
  5: ["1","4","6","9"],
  6: ["2","5","7","10"],
  7: ["3","6","11"],
  8: ["4","9","12"],
  9: ["5","8","10","13"],
  10: ["6","9","11","14"],
  11: ["7","10","15"],
  12: ["8","13"],
  13: ["9","12","14"],
  14: ["10","13","15"],
  15: ["11","14"]
};

function initBoard(){
  let posibleValues = shuffle(["","1", "2", "3"," 4", "5"," 6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]);
  let box;
  let textBox;
  for(let i=0; i<16;i++){
     box = document.createElement("button");
     textBox = document.createTextNode(posibleValues[i]);
     box.appendChild(textBox);

     if(posibleValues[i] === ""){
       indexEmptyBox = i;
       box.setAttribute("class","pale");
    }

     box.addEventListener("click", a => {slide(a.target)});
     let gBox = document.getElementById("box-"+i);
     gBox.appendChild(box);
     boxes.push(box);
  }
}

function slide(box){
  let moves = boardMoves[""+indexEmptyBox];
  let boxSelected =  box.parentElement.getAttribute("id");
  let boxPosition = boxSelected.substring(4);
  let emptyBox = boxes[indexEmptyBox];
  let uMovesText = document.getElementById('uMoves');

  if(moves.includes(boxPosition)){

    emptyBox.innerText = box.innerText;
    box.innerText ="";
    box.setAttribute("class","pale");
    emptyBox.setAttribute("class","button");
    indexEmptyBox = boxPosition;
    uMoves++;
    uMovesText.innerText = uMoves;

    if(won()){
      alert("Juego terminado");
    }
  }
}

function won(){
  for(let i =0; i < 16;i++){
      let boxPos = Number(boxes[i].parentElement.getAttribute("id").substring(4));
       if(boxes[i] != boxPos){
         return false;
       }
    }
  return true;
}
function shuffle(array) {
 var index = array.length, random;
 while (0 !== index) {
   random = Math.floor(Math.random() * index);
   index -= 1;
   [array[index],array[random]] = [array[random],array[index]];
 }
  return array;
}
