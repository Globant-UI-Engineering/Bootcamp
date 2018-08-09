window.onload = function(){
    let puzzleMatrix = [["1","2","3","4"],["5","","7","8"],["9","10","11","12"],["13","14","15","6"]];
    let puzzleCells = Array.from(document.getElementsByTagName('div')).slice(2);
    let idFilledCell;
    const fillCells = () =>{
        puzzleMatrix.forEach(function(row,indexRow){
            row.forEach(function(item,indexColumn){
                puzzleCells[indexRow*4+indexColumn].innerText=item;
                puzzleCells[indexRow*4+indexColumn].id=indexRow+","+indexColumn;
                puzzleCells[indexRow*4+indexColumn].setAttribute('aria-label','cell '+(item==""?'empty':item));
            });
        });
    }
    puzzleCells.forEach((cell)=>{ 
            cell.addEventListener('click',()=>{

            if(findEmptyCell(cell.id)){
                idFilledCell=cell.id;
            }else if(idFilledCell && !cell.innerText){
                let emptyCellId = cell.id
                swap (idFilledCell,emptyCellId);
                idFilledCell=undefined;
            }else{
                idFilledCell=undefined;
            }
        })
    });
    const swap = (idFilledCell, idEmptyCell)=>{
        let idFilledCellRow = idFilledCell.slice(0,1);
        let idFilledCellColumn = idFilledCell.slice(2);
        let idEmptyCellRow = idEmptyCell.slice(0,1);
        let idEmptyCellColumn = idEmptyCell.slice(2);
        let idFilledCellValue = puzzleMatrix[idFilledCellRow][idFilledCellColumn];        
        puzzleMatrix[idEmptyCellRow][idEmptyCellColumn]= idFilledCellValue;
        puzzleMatrix[idFilledCellRow][idFilledCellColumn]= "";
        fillCells();
    }
    const findEmptyCell = (cellId) =>{
        let puzzleRowIndex=cellId.slice(0,1);
        let puzzleColumnIndex =cellId.slice(2);
        let isEmptyCell=false;
        if(puzzleMatrix[puzzleRowIndex].indexOf("")>-1){
            isEmptyCell = Math.abs(puzzleColumnIndex-puzzleMatrix[puzzleRowIndex].indexOf(""))==1;
        }
        puzzleMatrix.forEach(function(iterativePuzzleRow,index){
            if(!iterativePuzzleRow[puzzleColumnIndex]){
                isEmptyCell = Math.abs(puzzleRowIndex-index)==1;
            }
        });
        return isEmptyCell;
    }
    fillCells();
}