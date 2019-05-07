
let piecesEndConfiguration = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
let piecesSelectors = ['.number1','.number2','.number3','.number4','.number5',
'.number6','.number7','.number8','.number9','.number10','.number11','.number12',
'.number13','.number14','.number15','.emptySpace'];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

function shufflePiecesOrder(){
    shuffleArray(piecesEndConfiguration);
    for (let i=0; i<piecesSelectors.length; i++){
    let selector = piecesSelectors[i];
    let order = piecesEndConfiguration[i];
    document.querySelector(selector).style.order = order;
    }
}
shufflePiecesOrder();

const shuffle = document.querySelector("#shuffle");

shuffle.addEventListener('click', event =>{
    if(!event.target.matches("button")){
    return;
    } else{
    shufflePiecesOrder();
    }
})

const emptySpace = document.querySelector('.emptySpace');

function movePieceToEmptySpace(piece){
    let temp = emptySpace.style.order;
    emptySpace.style.order = piece.style.order;
    piece.style.order = temp;
}

function youWin(){

    let currentPiecesOrder = piecesSelectors.map(selector => 
        document.querySelector(selector).style.order)

    let endConfiguration = 0;  
    for (let i=0; i<currentPiecesOrder.length; i++){
        if (parseInt(currentPiecesOrder[i]) != 1+i){
            endConfiguration = 1;
        } 
    }
    if (endConfiguration === 0){
        const h2 = document.createElement("h2");
        h2.innerText = "you win!";
        document.querySelector(".headings").appendChild(h2);
    } 
}

const puzzleBoard = document.querySelector(".puzzleBoard");

const borderLeftPositionsInBoard = ["1","5","9","13"]; 
const borderRightPositionsInBoard = ["4","8","12","16"]; 
const centerPositionsInBoard= ["2","3","6","7","10","11","14","15"];


puzzleBoard.addEventListener('click', event =>{
    
    if(!event.target.matches("button")){
        return;
    }
    if(event.target.matches("button")){

        if( borderLeftPositionsInBoard.includes(emptySpace.style.order) && 
            (Number(emptySpace.style.order) +1 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) +4 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) -4 === Number(event.target.style.order))
        ){
            movePieceToEmptySpace(event.target);
            youWin();
            return;
        }
        else if (borderRightPositionsInBoard.includes(emptySpace.style.order) && 
            (Number(emptySpace.style.order) -1 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) +4 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) -4 === Number(event.target.style.order))
            
        ){
            movePieceToEmptySpace(event.target);
            youWin();
            return;
        }
        else if (centerPositionsInBoard.includes(emptySpace.style.order) && 
            (Number(emptySpace.style.order) +1 === Number(event.target.style.order)  ||    
            Number(emptySpace.style.order) -1 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) +4 === Number(event.target.style.order)  ||
            Number(emptySpace.style.order) -4 === Number(event.target.style.order))       
        
        ){
            movePieceToEmptySpace(event.target);
            youWin();
            return;
        }
    }
    
})


