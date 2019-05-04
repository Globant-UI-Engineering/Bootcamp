class cellClass {
    constructor(row, column, value) {
        this.row = row;
        this.column = column;
        this.value = value;
        let id = 'cell' + row + column;
        this.elementHtml = document.getElementById(id);
        this.setValue(value);
        if (value != " ")
            this.addStyleElementHtml('cell' + value);
    }

    setValue(value) {
        this.value = value;
    }

    addStyleElementHtml(style) {
        this.elementHtml.classList.add(style);
    }

    removeStyleElementHtml(style) {
        this.elementHtml.classList.remove(style);
    }
}

var puzzleMap = new Array();

function onLoad() {
    let numbers = this.getRandomArray();
    createPuzzle(numbers);
}

function getRandomArray() {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var arrayAux = [];

    for (let numberElements in array) {
        let index = Math.floor(Math.random() * numberElements);
        arrayAux = array[numberElements];
        array[numberElements] = array[index];
        array[index] = arrayAux;
    }
    return array;
}

function createPuzzle(numbers) {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            let number = numbers.length > 0 ? numbers.shift() : ' ';
            let cell = new cellClass(i, j, number);

            if (number == ' ') {
                cell.addStyleElementHtml('emptyElement');
            }

            this.puzzleMap.push(cell);
        }
    }
    this.puzzleMap;
}

function getCellByRowColumn(row, column) {
    let index = this.puzzleMap.findIndex(cell => cell.row == row && cell.column == column);
    return this.puzzleMap[index];
}

function getCellWithEmptyValue() {
    let index = this.puzzleMap.findIndex(cell => cell.value == " ");
    return this.puzzleMap[index];
}

function getDistanceCell(cell1, cell2) {
    return { rowDistance: Math.abs(cell1.row - cell2.row), columnDistance: Math.abs(cell1.column - cell2.column) };
}

function moveElement(row, column) {

    selectedCell = this.getCellByRowColumn(row, column);
    emptyCell = this.getCellWithEmptyValue();
    var { rowDistance, columnDistance } = this.getDistanceCell(selectedCell, emptyCell);

    if ((rowDistance == 1 && columnDistance == 0) || (rowDistance == 0 && columnDistance == 1)) {
        debugger
        let value = selectedCell.value;
        let imageStyle = 'cell' + value;
        selectedCell.setValue(' ');
        selectedCell.removeStyleElementHtml(imageStyle);
        selectedCell.addStyleElementHtml('emptyElement');

        emptyCell.setValue(value);
        emptyCell.addStyleElementHtml(imageStyle);
        emptyCell.removeStyleElementHtml('emptyElement');
    }

    this.puzzleMap.findIndex(cell => cell.row == row && cell.column == column);
}

