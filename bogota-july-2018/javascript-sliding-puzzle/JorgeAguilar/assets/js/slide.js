const puzzleContainer = document.getElementById("puzzle");
const gridSizeSelect = document.getElementById("gridSize");
const scoreSpan = document.getElementById("score");
var numberMatrix = [];
var randomNumberList = [];
var score = 0;

function changeGridSize(){
    randomNumberList = shuffleNumberList();
    fillMatrix();
    paintMatrix();
}

function shuffleNumberList(){
    let randomList = [];
    for(var k = 0; k < Math.pow(gridSizeSelect.value,2); k++)
        randomList.push(k);
    var j, x, i;
    for (i = randomList.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = randomList[i - 1];
        randomList[i - 1] = randomList[j];
        randomList[j] = x;
    }
    return randomList;
}

function fillMatrix(){
    numberMatrix = [];
    let counter = 0;
    for(var i = 0; i < gridSizeSelect.value; i++){
        numberMatrix.push([]);
        for( var j = 0; j < gridSizeSelect.value; j++){
            numberMatrix[i].push(randomNumberList[counter]);
            counter++;
        }   
    }
}


function paintMatrix(){
    puzzleContainer.innerHTML = "";
    for(var i = 0; i < numberMatrix.length; i++){
        for( var j = 0; j < numberMatrix.length; j++)
            puzzleContainer.innerHTML += '<div onclick="getMove('+i+','+j+')" class="box">'+(numberMatrix[i][j] == 0 ? "" : numberMatrix[i][j]) +'</div>';
        puzzleContainer.innerHTML += "<br><br>";
    }
}

function isValidSlide(row, column){
    let isValid = false;
    if(row > 0)
        if(numberMatrix[row-1][column] == 0)
            isValid = true;
    if(column > 0)
        if(numberMatrix[row][column-1] == 0)
            isValid = true;
    if(row < gridSizeSelect.value-1)
        if(numberMatrix[row+1][column] == 0)
            isValid = true;
    if(column < gridSizeSelect.value-1)
        if(numberMatrix[row][column+1] == 0)
            isValid = true;
    return isValid;
    
}

function getMove(row, column){
    if(numberMatrix[row][column] != 0 ){
        if(isValidSlide(row,column)){
            randomNumberList = randomNumberList.map(number => number == numberMatrix[row][column] || number == 0 ? (number == 0 ? number = numberMatrix[row][column] : number = 0) : number = number);
            fillMatrix();
            paintMatrix();
            scoreSpan.innerHTML = ++score;
        }
        if(isFinished())
            finish();
    }
}

function isFinished(){
    let isFinish = true;
    let counter = 1;
    let mirrorArray = [];
    for(var i = 0; i < gridSizeSelect.value; i++){
        for( var j = 0; j < gridSizeSelect.value; j++){
            mirrorArray.push(numberMatrix[i][j]);
        }   
    }
    mirrorArray.pop();
    
    for(let number of mirrorArray){
        if( number != counter){
           isFinish = false;
            break;
        }
        counter++;
    }
    return isFinish;
}

function finish(){
    alert("CONGRATULATIONS! YOU WIN... YOURS MOVES: "+score);
    puzzleContainer.innerHTML = "";
    score = 0;
}
 