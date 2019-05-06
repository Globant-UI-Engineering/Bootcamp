// ------------------ GUI elements declaration  ------------------
const board = document.querySelector('.board');
const boardSizeSelect = document.querySelector('#boardSize');
const moveCountSpan = document.querySelector('#moveCount');

// Variables
let pieces = [];
let movable;
let boardSize = 2;
let prevPiece = null;
let moveCount = 0;

initBoard();

// ------------------ Event assignation ------------------
boardSizeSelect.addEventListener('change', () => {
    boardSize = Number(boardSizeSelect.value);
    createPieces(boardSize);
});

// ------------------ Board initialization functions ------------------

/**
 * Initializes the board with the default board size value.
 *
 */
function initBoard() {
    boardSizeSelect.value = boardSize;
    createPieces(boardSize);
}

/**
 * Creates the pieces of the board with a given board size.
 *
 * @param {Number} boardSize the board size (NxN).
 */
function createPieces(boardSize) {
    moveCount = 0;
    updateMoveCount();
    pieces = [];
    board.innerHTML = '';
    board.style.setProperty('grid-template-columns', 'repeat(' + boardSize + ', 1fr)');
    let pieceNumbers = shuffleBoard(boardSize);

    for(let index = 0; index < boardSize * boardSize; index++) {
        let piece = createPiece();
        addPieceValue(piece, index, pieceNumbers);
        addPieceNumAttr(piece, index);   
        addPieceListeners(piece);
        board.append(piece);
        pieces.push(piece);
    }
}

/**
 * Creates a piece div and appends it to the board container.
 *
 * @returns {Object} HTML DOM element representing the piece div.
 */
function createPiece() {
    let pieceDiv = document.createElement('div');
    let className = document.createAttribute("class");
    className.value = "piece";
    pieceDiv.setAttributeNode(className);
    return pieceDiv;
}

/**
 * Assigns to each piece its corresponding value.
 *
 * @param {Object} piece DOM element representing a piece container.
 * @param {Number} index Piece index number.
 * @param {Int32Array} pieceNumbers Array that contains puzzle pieces number representation.
 */
function addPieceValue(piece, index, pieceNumbers) {
    let pieceContent;
    if(pieceNumbers[index] !== -1) {
        pieceContent = createPieceNumberDiv(pieceNumbers[index]);        
    } else {
        pieceContent = createMovableDiv();
        initMovablePiece(pieceContent);
    }
    piece.append(pieceContent);
}

/**
 * Creates a DIV element that represents a given piece number.
 *
 * @param {Number} pieceNumber Represents a puzzle piece number.
 * @returns {Object} The DIV that represents the piece number.
 */
function createPieceNumberDiv(pieceNumber) {
    let divNode = document.createElement("div");
    divNode.textContent = pieceNumber;
    let pieceNumClass = document.createAttribute("class");
    pieceNumClass.value = 'pieceNum';
    divNode.setAttributeNode(pieceNumClass);
    return divNode;
}

/**
 * Creates a movable DIV (to be contained into a piece element).
 *
 * @returns {Object} the DIV that represents the movable piece element.
 */
function createMovableDiv() {
    let movableDiv = document.createElement("div");
    movableDiv.className = "movable";
    makeMovablePieceDraggable(movableDiv);
    return movableDiv;
}

/**
 * Initialize the movable piece variable and adds its event listener handlers.
 *
 * @param {Object} pieceContent Represents the movable DIV element.
 */
function initMovablePiece(pieceContent) {
    movable = pieceContent;
    movable.addEventListener('dragstart', dragStart);
    movable.addEventListener('dragend', dragEnd);
}

/**
 * Adds to each pice a 'piecenum' attribute that represents its board index (natural order).
 *
 * @param {Object} piece Represents a DIV piece container.
 * @param {Number} index Piece index into the board.
 */
function addPieceNumAttr(piece, index) {
    let pieceNumAttr = document.createAttribute("piecenum");
    pieceNumAttr.value = (index+1);
    piece.setAttributeNode(pieceNumAttr);
}

/**
 * Adds the drag and drop listeners to a given piece DIV container.
 *
 * @param {Object} piece DIV element that represents a piece container.
 */
function addPieceListeners(piece) {
    piece.addEventListener('dragover', dragOver);
    piece.addEventListener('dragenter', dragEnter);
    piece.addEventListener('dragleave', dragLeave);
    piece.addEventListener('drop', dragDrop);
}

/**
 * Makes the movable piece draggable by adding the draggable attribute and setting 
 * its value to true.
 *
 * @param {Object} movablePiece DIV element representing the movable piece.
 */
function makeMovablePieceDraggable(movablePiece) {
    let draggable = document.createAttribute("draggable");
    draggable.value = "true";
    movablePiece.setAttributeNode(draggable);
}

// ------------------ Drag events ------------------
function dragStart(event) {
    event.dataTransfer.setData('Text', this.id); // For firefox drag n drop compatibility
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
        incrementMoveCount();
        const pieceNumDiv = this.querySelector(".pieceNum");
        this.removeChild(pieceNumDiv);
        prevPiece.append(pieceNumDiv);
        this.append(movable); 
        if(validateWin()) {
            alert(`You win! Total moves: ${moveCount}`);
            moveCount = 0;
            updateMoveCount();
        }        
    }
}

/**
 * Increments the move count in 1.
 *
 */
function incrementMoveCount() { 
    moveCount += 1;
    updateMoveCount();
}

/**
 * Updates the move count SPAN element.
 *
 */
function updateMoveCount() {
    moveCountSpan.textContent = moveCount;
}

// ------------------ Validation functions  ------------------

/**
 * Validates if the movable DIV is draggable into the target destination piece according
 * to the game's rules.
 *
 * @param {Object} piece Destination piece container.
 * @param {Object} prevPiece The piece where the movable DIV was previously contained.
 * @returns {Boolean} True if the movable DIV is draggable into the destination piece.
 */
function validateIfDraggable(piece, prevPiece) {
    let pieceNum = getPieceBoardIndex(piece);
    let prevPieceNum = getPieceBoardIndex(prevPiece);

    let comparison = Math.abs(pieceNum - prevPieceNum);

    return (comparison === 1 || (comparison/boardSize) === 1);
}

/**
 * Validates if the game has been won.
 *
 * @returns {Boolean} True if the player has won the game.
 */
function validateWin() {
    let prev = 0;
    for(let piece of pieces) {
        let childType = piece.children[0].className === 'pieceNum';
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

// ------------------ Utilities functions  ------------------

/**
 * Creates a number list representing each piece in the board which
 * will be suffled.
 *
 * @param {Number} boardSize the board size (NxN).
 * @returns {Int32Array} An array that represents the board pieces values.
 */
function shuffleBoard(boardSize) {
    let pieceNumbers = [];

    for(let i=1; i<boardSize*boardSize; i++) {
        pieceNumbers.push(i);
    }

    pieceNumbers.push(-1);

    for(let i=0; i<pieceNumbers.length; i++) {
        const j =  Math.floor(Math.random() * pieceNumbers.length);
        [pieceNumbers[i], pieceNumbers[j]] = [pieceNumbers[j], pieceNumbers[i]];
    }

    return pieceNumbers;
}

/**
 * Gets the piece index into the board (natural order).
 *
 * @param {Object} piece Piece DIV container.
 * @returns {Number} Piece index into the board.
 */
function getPieceBoardIndex(piece) {
    return Number(piece.getAttribute("piecenum"))
}