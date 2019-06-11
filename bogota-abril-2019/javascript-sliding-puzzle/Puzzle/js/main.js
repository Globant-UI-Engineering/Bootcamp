var cellList = new Map;
var cellList = {
        1: {
            cellNumber: 1, 
            position: 1,
            top: 0,
            left: 0
        },
        2: {
            cellNumber: 2, 
            position: 2,
            top: 0,
            left: 140
        },
        3: {
            cellNumber: 3, 
            position: 3,
            top: 0,
            left: 140*2
        },
        4: {
            cellNumber: 4, 
            position: 4,
            top: 140,
            left: 0
        },
        5: {
            cellNumber: 5, 
            position: 5,
            top: 140,
            left: 140
        },
        6: {
            cellNumber: 6, 
            position: 6,
            top: 140,
            left: 140*2
        },
        7: {
            cellNumber: 7, 
            position: 7,
            top: 140*2,
            left: 0
        },
        8: {
            cellNumber: 8, 
            position: 8,
            top: 140*2,
            left: 140
        },
        0: {//Empty cell
            position: 9,
            top: 140*2,
            left: 140*2
        }
    }
var steps = 0;
    function possibleMovements(position){
        if(position == 1) return [2,4];
        if(position == 2) return [1,3,5];
        if(position == 3) return [6,2];
        if(position == 4) return [1,7,5];
        if(position == 5) return [2,4,6,8];
        if(position == 6) return [3,5,9];
        if(position == 7) return [4,8];
        if(position == 8) return [5,7,9];
        if(position == 9) return [8,6];
    }

    function cellClicked(cellId){
        var cell = document.getElementById(cellId);
        var cellEmpty = document.getElementById("empty");
        if(!isMovable(cellList[cell.value], cellList["0"]) || cell.value == ""){
            return;
        }else{
            moveCell(cell, cellEmpty);
        }
        console.log("is solved?");
        steps++;
        document.getElementById("steps").innerHTML = steps;
        isSolved();
    }
    
    function isMovable(cell, targetCell){
        var targetCells = possibleMovements(targetCell.position);
        if (targetCells.includes(cell.position)) {
            return true;

        }else{

            return false;
        }
    }

    function moveCell(cell, targetCell){
        var targetCellTop = cellList[targetCell.value].top;
        var targetCellLeft = cellList[targetCell.value].left;
        var targetCellPosition = cellList[targetCell.value].position;

        var cellTop = cellList[cell.value].top;
        var cellLeft = cellList[cell.value].left;
        var cellPosition = cellList[cell.value].position;

        cellList[targetCell.value].top = cellTop;
        cellList[targetCell.value].left = cellLeft;
        cellList[targetCell.value].position = cellPosition;

        cell.style.left = targetCellLeft + "px";
        cell.style.top = targetCellTop + "px";
        targetCell.style.left = cellLeft + "px";
        targetCell.style.top = cellTop + "px";

        cellList[cell.value].top = targetCellTop;
        cellList[cell.value].left = targetCellLeft;
        cellList[cell.value].position = targetCellPosition;
    }

    isSolved = () => {
        var countWell = 0;
        for (var key in cellList) {
            var cell = cellList[key];
            if(cell.position == cell.cellNumber) countWell++
        }
        if(countWell==8){
            console.log("ganaste")   
            document.getElementById("win_result").innerHTML = "You WON!!";
        }else{
            console.log("sigue intentando")   
        }
    }
    
    shuffle = () =>{
        document.getElementById("steps").innerHTML = 0;
        var cellsUsed = [];
        for (let i = 1; i < 9; i++) {
            var cell = document.getElementById("cell"+i);
            var randomNumer = 0;
            randomNumer = Math.floor(Math.random() * (+9 - +1) + +1);
            var movable = isMovable(cellList[cell.value], cellList[randomNumer]);
            console.log(movable);
            while(cellsUsed.includes(randomNumer) && !movable){
                randomNumer = Math.floor(Math.random() * (+9 - +1) + +1);
                movable = isMovable(cellList[cell.value], cellList[randomNumer]);
            }
            var targetCell = document.getElementById("cell"+randomNumer);
            cellsUsed.push(randomNumer);
            moveCell(cell,targetCell);
        }
    }


