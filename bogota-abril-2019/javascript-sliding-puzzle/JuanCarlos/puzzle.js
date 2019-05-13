var indexVoidPiece = 8
var puzzlePieces = []
var gridAreaNames = "uno dos tre cua cin sei sie och nue".split(" ")
var puzzleDiv = document.getElementById('puzzle')

document.querySelectorAll('.item').forEach( item => puzzlePieces.push(item) )

puzzleDiv.focus()
puzzleDiv.addEventListener('keydown', function (event) {
    let indexPieceToMove = null;
    let pieceToMove = null;
    let voidPiece = null;
    
    voidPiece = puzzlePieces[indexVoidPiece]

    switch (event.key) {
        case 'ArrowDown':
            indexPieceToMove = indexVoidPiece - 3
            if (indexPieceToMove < 0)
                return;
            break;
        case 'ArrowUp':
            indexPieceToMove = indexVoidPiece + 3
            if (indexPieceToMove > 8)
                return;
            break;
        case 'ArrowRight':
            indexPieceToMove = indexVoidPiece - 1
            if (indexPieceToMove % 3 === 2 || indexPieceToMove < 0)
                return;
            break;
        case 'ArrowLeft':
            indexPieceToMove = indexVoidPiece + 1
            if (indexPieceToMove % 3 === 0 || indexPieceToMove < 0)
                return;
            break;
        default:
            return;
    }

    // Swap elemets in the Array
    pieceToMove = puzzlePieces[indexPieceToMove]
    puzzlePieces[indexPieceToMove] = puzzlePieces[indexVoidPiece]
    puzzlePieces[indexVoidPiece] = pieceToMove
    
    // Swap grid areas
    pieceToMove.style.gridArea = gridAreaNames[indexVoidPiece]
    voidPiece.style.gridArea = gridAreaNames[indexPieceToMove]

    // New void element
    indexVoidPiece = indexPieceToMove

})