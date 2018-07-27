let emptySlotIndex = {
    column: '3',
    row: '3'
}

let totalMovements = 0;

function getPosition(element) {
    let column = element.parentNode.className.split("-")[1];
    let row = element.parentNode.parentNode.className.split("-")[1];
    moveElement(row, column);
}

function moveElement(row, column) {
    if (isMovable(row, column)) {
        const element = document.getElementsByClassName("row-" + row)[0]
                                .getElementsByClassName("column-" + column)[0];
        document.getElementsByClassName("row-" + emptySlotIndex['row'])[0]
                .getElementsByClassName("column-" + emptySlotIndex['column'])[0].innerHTML = element.innerHTML;
        element.innerHTML = "";
        emptySlotIndex['row'] = row;
        emptySlotIndex['column'] = column;
        totalMovements++;
        document.getElementById("total-movements").innerText = totalMovements;
        this.didUserWon() ? alert("You won!") : null;
    }
}

function isMovable(row, column) {
    if ((row === emptySlotIndex['row'] && Number(column) + 1 == emptySlotIndex['column']) ||
        (row === emptySlotIndex['row'] && Number(column) - 1 == emptySlotIndex['column']) ||
        (column === emptySlotIndex['column'] && Number(row) + 1 == emptySlotIndex['row']) ||
        (column === emptySlotIndex['column'] && Number(row) - 1 == emptySlotIndex['row'])) {
        return true;
    }
    else {
        return false;
    }
}

function didUserWon() {
    let validate = true;
    for (let i = 1; i <= 15; i++) {
        if (this.totalMovements !== 0) {
            var slotKey = document.getElementById("element-"+i).parentNode.getAttribute('id').split("-")[1];
            if(slotKey != i){
                validate = false;
                break;
            }
        }
    }
    return validate;
}