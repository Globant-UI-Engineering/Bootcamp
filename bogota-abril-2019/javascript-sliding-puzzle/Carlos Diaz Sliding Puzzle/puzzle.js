(function assignIds(){
    var cols_rows=4;
    var counter=1;
    for(var i=1;i<=cols_rows;i++){
        for(var j=1;j<=cols_rows;j++){
          document.getElementsByClassName('tile'+(counter))[0].id = "cell"+i+j; 
          counter++;
        }
    }
    console.log('Executed Inmediately');
})();

function startNewGame() {
    var cols_rows=4;
    for (var i=1;i<=cols_rows;i++) { 
        for (var j=1;j<=cols_rows;j++) {
            var row=Math.floor(Math.random()*4 + 1);
            var column=Math.floor(Math.random()*4 + 1);
            changeTiles("cell"+i+j,"cell"+row+column);
        } 
    } 
  }

function changeTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }


  
function checkTile(cell){
    var row = Number(cell.substr(4,1));
    var column = Number(cell.substr(5,1));
    var left_cell=`cell${row}${(column==1? 1:column-1)}`;
    var right_cell=`cell${row}${(column==4? 4:column+1)}`;
    var top_cell=`cell${(row==4? 4:row+1)}${column}`;
    var bottom_cell=`cell${(row==1? 1:row-1)}${column}`;
    
    if(document.getElementById(top_cell).className=="tile16"){
        changeTiles(cell,top_cell);
    }
    else if(document.getElementById(bottom_cell).className=="tile16"){
        changeTiles(cell,bottom_cell);
    }
    else if(document.getElementById(right_cell).className=="tile16"){
        changeTiles(cell,right_cell);
    }
    else if(document.getElementById(left_cell).className=="tile16"){
        changeTiles(cell,left_cell);
    }
}

