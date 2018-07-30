window.onload = function(){
    let pieces = [["1","2","3","4"],["5","","7","8"],["9","10","11","12"],["13","14","15","6"]];
    let boxes = Array.from(document.getElementsByTagName('div')).slice(2);
    let idBox;
    const fillBoxes = () =>{
        pieces.forEach(function(row,irow){
            row.forEach(function(item,i){
                boxes[irow*4+i].innerText=item;
                boxes[irow*4+i].id=irow+","+i;
                boxes[irow*4+i].setAttribute('aria-label','cell '+(item==""?'empty':item));
            });
        });
    }
    boxes.forEach((box)=>{ 
            box.addEventListener('click',()=>{

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
    const swap = (idBox, idEmptyBox)=>{
        let idBoxRow = idBox.slice(0,1);
        let idBoxColumn = idBox.slice(2);
        let idEmptyBoxRow = idEmptyBox.slice(0,1);
        let idEmptyBoxColumn = idEmptyBox.slice(2);
        let idBoxValue = pieces[idBoxRow][idBoxColumn];        
        pieces[idEmptyBoxRow][idEmptyBoxColumn]= idBoxValue;
        pieces[idBoxRow][idBoxColumn]= "";
        fillBoxes();
    }
    const findZero = (id) =>{
        let row=id.slice(0,1);
        let column =id.slice(2);
        let findedZero=false;
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