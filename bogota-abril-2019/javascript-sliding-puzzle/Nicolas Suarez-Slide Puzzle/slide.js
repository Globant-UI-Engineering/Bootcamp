
var size = 16;
var puzzleNumbers = [];
var correctAnswer = [];

for(var i=0; i<size; i++){
    puzzleNumbers[i] = i+1; 
    correctAnswer[i] = i+1; 
}
initializeButtons(puzzleNumbers);


function randomize(){
    puzzleNumbers.sort(()=>Math.random()-0.5);    
    fillButtons(puzzleNumbers);
    document.getElementById("win").style.display="none";    
}

function initializeButtons(array){
    for(var i=0; i<size;i++){ 
        var aux = i+1;       
        if(array[i]!=size){
        var aux = i+1;       
            document.getElementById("button"+aux).innerHTML=array[i];        
            if(aux=="2"||aux=="4"||aux=="5"||aux=="7"||aux=="10"||aux=="12"||aux=="13"||aux=="15"){
                document.getElementById("button"+aux).style.backgroundColor="red";
                document.getElementById("button"+aux).style.color="white";
            }else{
                document.getElementById("button"+aux).style.backgroundColor="white";
                document.getElementById("button"+aux).style.color="black";
            }
        }else{
            document.getElementById("button"+aux).style.backgroundColor="gray";
        }
    }
}

function fillButtons(array){       
    for(var i=0; i<size;i++){
        var aux = i+1;
        if(array[i]!=size){
            document.getElementById("button"+aux).innerHTML=array[i];        
            if(array[i]=="2"||array[i]=="4"||array[i]=="5"||array[i]=="7"||
            array[i]=="10"||array[i]=="12"||array[i]=="13"||array[i]=="15"){
                document.getElementById("button"+aux).style.backgroundColor="red";
                document.getElementById("button"+aux).style.color="white";
            }else{
                document.getElementById("button"+aux).style.backgroundColor="white";
                document.getElementById("button"+aux).style.color="black";
            }
        }else{
            document.getElementById("button"+aux).innerHTML=""; 
            document.getElementById("button"+aux).style.backgroundColor="gray";
        }
    }
}


function move(number){    
    document.getElementById("win").style.display="none";
    let index = puzzleNumbers.indexOf(16);        
    if(number+1==index){
        swap(index,number);
    }
    if(number-1==index){
        swap(index,number);
    }
    if(number-4==index){
        swap(index,number);
    }
    if(number+4==index){
        swap(index,number);
    }            
    fillButtons(puzzleNumbers);
    verify();
}

function swap(index,number){
    let aux = puzzleNumbers[index];
    puzzleNumbers[index]=puzzleNumbers[number];
    puzzleNumbers[number]=aux;
}

function verify(){
    if(correctAnswer.toString()== puzzleNumbers.toString()){
        document.getElementById("win").style.display="flex";
    }
}