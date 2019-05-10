let movements = 0;
let score = 30000;

let movementsText = document.querySelector("section p:first-of-type");
let scoreText = document.querySelector("section p:last-of-type");
let startButton = document.querySelector("hr+button");
let buttonGroup = document.querySelectorAll("button");
let tableGame = document.querySelector('table');
let targetGame = document.querySelector('figure');

let showHideTablegame = (gameDisplay, targetDisplay) => {
    // hide table
    tableGame.style.display = gameDisplay;
    // show image
    targetGame.style.display = targetDisplay;
}

let updateScreen = () => {
    movementsText.innerHTML = movements;
    scoreText.innerHTML = score;
}

startButton.addEventListener('click', (event) => {
    showHideTablegame("block", "none");
    event.target.innerHTML = "Restart";
    movements = 0;
    score = 30000;
    tableShuffle();
    updateScreen();
});

startButton.addEventListener('mouseover', (event) => {
    if (event.target.innerHTML === "Restart")
        showHideTablegame("none", "block");
});

startButton.addEventListener('mouseout', (event) => {
    if (event.target.innerHTML === "Restart")
        showHideTablegame("block", "none");
});

let tableShuffle = () => {
    // Random between 10 to 13
    let randomLoop = Math.floor((Math.random() * 4) + 10);
    for (let i = 0; i < randomLoop; i++) {
        // Random between 0 to 3
        let randomPieceOrigin = [Math.floor((Math.random() * 4)), Math.floor((Math.random() * 4))];
        let randomPieceTarget = [Math.floor((Math.random() * 4)), Math.floor((Math.random() * 4))];
        if (areDiferent(randomPieceOrigin, randomPieceTarget)) {
            movePiece(randomPieceOrigin, randomPieceTarget);
        }
    }
};

let areDiferent = (coordinateOrigon, coordinateTarget) =>
    coordinateOrigon.toString() !== coordinateTarget.toString();

let getVoidNeighbor = (row, col) => {
    let [neighborTop, neighborBotton, neighborLeft, neighborRight] = getNeighborhood(row, col);
    if (neighborTop === "Sin ficha")
        return [row, col - 1];
    else if (neighborBotton === "Sin ficha")
        return [row, col + 1];
    else if (neighborLeft === "Sin ficha")
        return [row - 1, col];
    else if (neighborRight === "Sin ficha")
        return [row + 1, col];
    else
        return [];
};

let getNeighborhood = (row, col) => {
    let [neighborTop, neighborBotton, neighborLeft, neighborRight] = ["", "", "", ""];
    if (col - 1 >= 0)
        neighborTop = document.querySelector("table").rows[row].cells[col - 1].children[0].getAttribute("aria-label");
    if (col + 1 < 4)
        neighborBotton = document.querySelector("table").rows[row].cells[col + 1].children[0].getAttribute("aria-label");
    if (row - 1 >= 0)
        neighborLeft = document.querySelector("table").rows[row - 1].cells[col].children[0].getAttribute("aria-label");
    if (row + 1 < 4)
        neighborRight = document.querySelector("table").rows[row + 1].cells[col].children[0].getAttribute("aria-label");
    return [neighborTop, neighborBotton, neighborLeft, neighborRight];
};

let movePiece = (originPlace, targetPlace) => {
    let piece = document.querySelector("table").rows[originPlace[0]].cells[originPlace[1]];
    let target = document.querySelector("table").rows[targetPlace[0]].cells[targetPlace[1]];
    piece.appendChild(target.removeChild(target.children[0]));
    target.appendChild(piece.removeChild(piece.children[0]));
}

let doIWin = () => {
    let pieceGroup = tableGame.children[0].children;
    let pieceList = [];
    for (const pieceRow of pieceGroup) {
        let pieceCell = pieceRow.children;
        for (const piece of pieceCell) {
            let pieceName = piece.children[0].getAttribute("aria-label");
            pieceList.push(pieceName.split(" ").slice(-1)[0]);
        }
    }
    return pieceList.toString() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,ficha";
};

updateScreen();
showHideTablegame("none", "block");
Array.from(buttonGroup).forEach(button => {
    button.addEventListener('mousedown', (event) => {
        let row = event.target.parentNode.parentNode.parentNode.rowIndex;
        let col = event.target.parentNode.parentNode.cellIndex;
        let freePlace = getVoidNeighbor(row, col);
        if (freePlace.length !== 0) {
            movePiece([row, col], freePlace);
            movements++;
            score = score - movements;
            updateScreen();
            if (doIWin()) {
                showHideTablegame("none", "block");
                startButton.innerHTML = "Start";
            }
        }
    });
});