window.onload = function(){
    var pieces = [["1","2","3","4"],["5","","7","8"],["9","10","11","12"],["13","14","15","6"]];
    var boxes = Array.from(document.getElementsByTagName('div')).slice(2);
    function fillBoxes(){
        pieces.forEach(function(row,irow){
            row.forEach(function(item,i){
                console.log(irow,i,irow*4+i,item);
                boxes[irow*4+i].innerText=item;
                boxes[irow*4+i].id=irow+","+i;
            });
        });
    }
    boxes.forEach(function(box){
        box.addEventListener('click',function(){
            console.log(findZero(box.id));
        })
    });
    function findZero(id){
        var row=id.slice(0,1);
        var column =id.slice(2);
        var findedZero=false;
        if(pieces[row].indexOf("")>-1){
            console.log("in this row exist zero",Math.abs(column-pieces[row].indexOf("")));
            findedZero = Math.abs(column-pieces[row].indexOf(""))==1;
        }
        pieces.forEach(function(piecesRow,index){
            if(!piecesRow[column]){
                console.log("in this column exist zero",Math.abs(row-index));
                findedZero = Math.abs(row-index)==1;
            }
        });
//        console.log(row , column, pieces[row][column]);
        return findedZero;
    }
    fillBoxes();
}