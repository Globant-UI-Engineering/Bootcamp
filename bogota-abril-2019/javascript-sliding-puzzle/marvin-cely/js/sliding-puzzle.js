let startButton = document.querySelector("hr+button");

startButton.addEventListener('click', (event) => {
    event.target.innerHTML = "Restart";
    //TODO: Hacer swap con el elemento vacío
    // tableShuffle();
    //TODO: Empezar contador de movimientos y tiempo del juego
});

// let tableShuffle = () => {
//     // Random between 10 to 13
//     let randomLoop = Math.floor((Math.random() * 4) + 10);
//     for (let i = 0; i < randomLoop; i++) {
//         // Random between 0 to 3
//         let randomPieceOrigin = [Math.floor((Math.random() * 4)), Math.floor((Math.random() * 4))];
//         let randomPieceTarget = [Math.floor((Math.random() * 4)), Math.floor((Math.random() * 4))];
//         if (areDiferent(randomPieceOrigin, randomPieceTarget)) {
//             swapPiece(randomPieceOrigin, randomPieceTarget);
//         }
//     }
// };

// let areDiferent = (coordinateOrigon, coordinateTarget) =>
//     coordinateOrigon.toString() !== coordinateTarget.toString();

// let swapPiece = (originPlace, targetPlace) => {
//     // TODO: Incluir si el elemento es vacío
//     let piece = document.querySelector("table").rows[originPlace[0]].cells[originPlace[1]];
//     let target = document.querySelector("table").rows[targetPlace[0]].cells[targetPlace[1]];
//     piece.appendChild(target.removeChild(target.children[0]));
//     target.appendChild(piece.removeChild(piece.children[0]));
// }

// TODO: Agregar observador de que ganó: revisa que el orden de la tabla es la indicada

let buttonGroup = document.querySelectorAll("button");
Array.from(buttonGroup).forEach(button => {
    button.addEventListener('click', (event) => {
        let row = event.target.parentNode.parentNode.parentNode.rowIndex;
        let col = event.target.parentNode.parentNode.cellIndex;
        let freePlace = getVoidNeighbor(row, col);
        if (freePlace.length !== 0)
            movePiece([row, col], freePlace);
    });
});

let getVoidNeighbor = (row, col) => {
    let [neighborTop, neighborBotton, neighborLeft, neighborRight] = getNeighborhood(row, col);
    if (neighborTop === 0)
        return [row, col - 1];
    else if (neighborBotton === 0)
        return [row, col + 1];
    else if (neighborLeft === 0)
        return [row - 1, col];
    else if (neighborRight === 0)
        return [row + 1, col];
    else
        return [];
};

let getNeighborhood = (row, col) => {
    let [neighborTop, neighborBotton, neighborLeft, neighborRight] = [-1, -1, -1, -1];
    if (col - 1 >= 0)
        neighborTop = document.querySelector("table").rows[row].cells[col - 1].children.length;
    if (col + 1 < 4)
        neighborBotton = document.querySelector("table").rows[row].cells[col + 1].children.length;
    if (row - 1 >= 0)
        neighborLeft = document.querySelector("table").rows[row - 1].cells[col].children.length;
    if (row + 1 < 4)
        neighborRight = document.querySelector("table").rows[row + 1].cells[col].children.length;
    return [neighborTop, neighborBotton, neighborLeft, neighborRight];
};

let movePiece = (originPlace, targetPlace) => {
    let piece = document.querySelector("table").rows[originPlace[0]].cells[originPlace[1]];
    let target = document.querySelector("table").rows[targetPlace[0]].cells[targetPlace[1]];
    target.appendChild(piece.removeChild(piece.children[0]));
    piece.setAttribute("aria-label", "Espacio vacío");
    target.removeAttribute("aria-label");
}