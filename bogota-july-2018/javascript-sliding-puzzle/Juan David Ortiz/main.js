window.onload = function(){
    var pieces = [["1","2","3","4"],["5","","7","8"],["9","10","11","12"],["13","14","15","6"]];
    var boxes = Array.from(document.getElementsByTagName('div')).slice(2);
    var idBox;
    function fillBoxes(){
        pieces.forEach(function(row,irow){
            row.forEach(function(item,i){
                boxes[irow*4+i].innerText=item;
                boxes[irow*4+i].id=irow+","+i;
            });
        });
    }
    boxes.forEach(function(box){
        box.addEventListener('click',function(){
            if(findZero(box.id)){
                idBox=box.id;
            }else if(idBox && !box.innerText){
                swap (idBox,box.id);
                idBox=undefined;
            }else{
                idBox=undefined;
            }
        })
    });
    function swap (idBox, idEmptyBox){
        let idBoxRow = idBox.slice(0,1);
        let idBoxColumn = idBox.slice(2);
        let idEmptyBoxRow = idEmptyBox.slice(0,1);
        let idEmptyBoxColumn = idEmptyBox.slice(2);
        let idBoxValue = pieces[idBoxRow][idBoxColumn];        
        pieces[idEmptyBoxRow][idEmptyBoxColumn]= idBoxValue;
        pieces[idBoxRow][idBoxColumn]= "";
        fillBoxes();
    }
    function findZero(id){
        var row=id.slice(0,1);
        var column =id.slice(2);
        var findedZero=false;
        if(pieces[row].indexOf("")>-1){
            findedZero = Math.abs(column-pieces[row].indexOf(""))==1;
        }
        pieces.forEach(function(piecesRow,index){
            if(!piecesRow[column]){
                findedZero = Math.abs(row-index)==1;
            }
        });
        return findedZero;
    }
    fillBoxes();
}