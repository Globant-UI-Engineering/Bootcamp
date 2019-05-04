// ------------------ GUI elements declaration  ------------------
let movable;
const pieces = document.querySelectorAll('.piece');

// Variables
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1];
//shuffle(numbers);
let prevPiece = null;


pieces.forEach((piece, index) => {
    addPieceValue(piece, index);
    addPieceNumAttr(piece, index);   
    addPieceListeners(piece);
});


// ------------------ Adding events ------------------
movable.addEventListener('dragstart', dragStart);
movable.addEventListener('dragend', dragEnd);

function addPieceValue(piece, index) {
    let pieceContent;
    if(numbers[index] !== -1) {
        pieceContent = createNumberSpan(numbers[index]);        
    } else {
        pieceContent = createMovableDiv();
        movable = pieceContent;
    }
    piece.append(pieceContent);
}

function addPieceNumAttr(piece, index) {
    let pieceNumAttr = document.createAttribute("piecenum");
    pieceNumAttr.value = (index+1);
    piece.setAttributeNode(pieceNumAttr);
}


function createNumberSpan(spanValue) {
    let spanNode = document.createElement("span");
    spanNode.textContent = spanValue + "";
    return spanNode;
}

function createMovableDiv() {
    let movableDiv = document.createElement("div");
    movableDiv.className = "movable";
    makePieceDraggable(movableDiv);
    return movableDiv;
}

function shuffle(arr) {
    for(let i=0; i<arr.length; i++) {
        const j =  Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function validateIfDraggable(piece, prevPiece) {
    let pieceNum = getPieceNum(piece);
    let prevPieceNum = getPieceNum(prevPiece);

    let comparison = Math.abs(pieceNum - prevPieceNum);

    return (comparison === 1 || (comparison/4) === 1);
}

// ------------------ Drag events ------------------
function dragStart(event) {
    console.log("start");
    event.dataTransfer.setData('Text', this.id); // For firefox drag n drop compatibility
    this.classList.add('hold');
    setTimeout(() => (this.className = 'invisible'), 0); 
    prevPiece = this.parentNode;
}
 
function dragEnd() {
    this.className = 'movable';    
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.className = 'piece';
}

function dragDrop() {
    this.className = 'piece';    
    if(validateIfDraggable(this, prevPiece)) {
        const numSpan = this.querySelector("span");
        this.removeChild(numSpan);
        prevPiece.append(numSpan);
        this.append(movable); 
    }
}

function addPieceListeners(piece) {
    piece.addEventListener('dragover', dragOver);
    piece.addEventListener('dragenter', dragEnter);
    piece.addEventListener('dragleave', dragLeave);
    piece.addEventListener('drop', dragDrop);
}

function makePieceDraggable(piece) {
    let draggable = document.createAttribute("draggable");
    draggable.value = "true";
    piece.setAttributeNode(draggable);
}

function getPieceNum(piece) {
    return Number(piece.getAttribute("piecenum"))
}

function validateWin() {
    let prev = 0;
    for(let piece of pieces) {
        let childType = piece.children[0].tagName !== 'DIV';
        if(childType) {
            let num = Number(piece.textContent);
            if(num !== (prev+1)) {
                return false;
            } 
            prev = num;
        }
    }
    return true;
}