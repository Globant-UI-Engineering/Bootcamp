var tiles;
var table;
let blankPosition;

function createGame(){
    table=document.getElementById('puzzle');
    var htmltable="";
    var row=4,column=4;
    var count=0;
    for (let i = 0; i < row   ; i++) {
        htmltable+="<tr>";
        for (let j = 0; j <column; j++) {
            htmltable+="<td onclick='movePieces("+(count++)+")'>"
        }
        htmltable+="</tr>";
    }
    table.innerHTML=htmltable;
}

function startGame(){
    createGame();
    let sizePuzzle=16;
    let numbers=createRandomArray(sizePuzzle);
    tiles=document.getElementsByTagName('td');
    for (let i = 0; i <16; i++) {
        tiles[i].innerHTML=numbers[i];
        if(numbers[i]==0){
           tiles[i].innerHTML=" ";
           blankPosition=i;
        }
    }
}

function movePieces(t){
    var move=blankPosition-t;
       if (move<0) {
        move=-(move);
        }
        if (move==1 || move==4){
        tiles[blankPosition].innerHTML=tiles[t].innerHTML;
        tiles[t].innerHTML=" ";
        blankPosition=t;
        }
}

function createRandomArray(sizePuzzle){
    let randomArray=[];
    for (let i = 0; i <sizePuzzle; i++) {
        let randomNumber=Math.floor(Math.random()*sizePuzzle);
        randomArray[i]=randomNumber;
        for (let j = 0; j <i; j++) {
         if(randomArray[i]==randomArray[j]){
          i--;
         }
        }
    }
    return randomArray;
}