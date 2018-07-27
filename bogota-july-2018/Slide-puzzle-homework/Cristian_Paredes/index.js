let emptySlotIndex = {
    column: '3',
    row: '3'
}

let gameLocked = {
    locked: true
}

let totalMovements = 0;

function getPosition(element) {
    let column = element.parentNode.className.split("-")[1];
    let row = element.parentNode.parentNode.className.split("-")[1];
    if (this.isMovable(row, column) && !gameLocked['locked']) {
        moveElement(row, column);
        totalMovements++;
        document.getElementById("total-movements").innerText = totalMovements;
    }
}

function moveElement(row, column) {
    const element = document.getElementsByClassName("row-" + row)[0]
        .getElementsByClassName("column-" + column)[0];
    document.getElementsByClassName("row-" + emptySlotIndex['row'])[0]
        .getElementsByClassName("column-" + emptySlotIndex['column'])[0].innerHTML = element.innerHTML;
    element.innerHTML = "";
    emptySlotIndex['row'] = row;
    emptySlotIndex['column'] = column;
    if(this.isAWin){
        alert("You won!");
        document.getElementById('wrapper').getElementsByTagName("button")[0].style.visibility="visible";
        document.getElementById('wrapper').getElementsByTagName("button")[0].innerText="Restart!";
        gameLocked['locked'] = true;
    }
}

function isMovable(row, column) {
    if ((row == emptySlotIndex['row'] && Number(column) + 1 == emptySlotIndex['column']) ||
        (row == emptySlotIndex['row'] && Number(column) - 1 == emptySlotIndex['column']) ||
        (column == emptySlotIndex['column'] && Number(row) + 1 == emptySlotIndex['row']) ||
        (column == emptySlotIndex['column'] && Number(row) - 1 == emptySlotIndex['row'])) {
        return true;
    }
    else {
        return false;
    }
}

function isAWin() {
    let validate = true;
    for (let i = 1; i <= 15; i++) {
        if (this.totalMovements !== 0) {
            var slotKey = document.getElementById("element-" + i).parentNode.getAttribute('id').split("-")[1];
            if (slotKey != i) {
                validate = false;
                break;
            }
        }
    }
    return validate;
}

function scramble(){
    document.getElementById('wrapper').getElementsByTagName("button")[0].style.visibility="hidden";
    const limit = Math.floor((Math.random() * 100) + 1);
    for(let i = 0; i < limit; i++){
        const targetRow = Math.floor((Math.random() * 3));
        const targetColumn = Math.floor((Math.random() * 3));
        (function(){
            setTimeout(function() {
                if (targetRow != emptySlotIndex['row'] || targetColumn != emptySlotIndex['column']){
                    moveElement(targetRow, targetColumn);
                }
            }, 100*i);   
        })();
    }
    gameLocked['locked'] = false;    
}