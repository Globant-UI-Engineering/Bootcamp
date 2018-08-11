let cols=4;
let reset =()=> {
    let puzzlepieces = [];
    let finalValue = 15;

    for (let i = 1; i <= finalValue; ++i) {
        puzzlepieces.push(i);
    }

    puzzlepieces.push('black_box')
    createSlidingpuzzle(puzzlepieces);
}

let shuffle=array=> {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let createSlidingpuzzle=puzzlepieces=> {

    var puzzle = '<div class="container">';    
    var puzzlepieces = shuffle(puzzlepieces);
    for (var puzzleNr = 0; puzzleNr < puzzlepieces.length; ++puzzleNr) {
        puzzle += `<div class="puzzlepiece" id="position${puzzlepieces[puzzleNr]}" alt="${puzzlepieces[puzzleNr]}" onclick="shiftPuzzlepieces(this);" >${puzzlepieces[puzzleNr]}</div>`
    }
    puzzle += '</div>';    
    showSlidingpuzzle(puzzle);
}

let showSlidingpuzzle=puzzle=> {
    document.getElementById('slidingpuzzleContainer').innerHTML = puzzle;
}

let shiftPuzzlepieces=elemt=> {    
    var elemtIndex = 0;
    var child = elemt;
   
    while ((child = child.previousSibling) != null) {elemtIndex++;}

    var blackIndex = 0;
    var black = document.getElementById("positionblack_box");
    child = black;
   
    while ((child = child.previousSibling) != null) blackIndex++;

    if ((((elemtIndex == blackIndex - 1) || (elemtIndex == blackIndex + 1))
        && ((Math.floor(elemtIndex / cols)) == (Math.floor(blackIndex / cols)))
    ) || (elemtIndex == blackIndex + cols) || (elemtIndex == blackIndex - cols)) {
        var temp = elemt.parentNode.insertBefore(document.createElement('a'), elemt);
        
        elemt.parentNode.insertBefore(elemt, black);       
        elemt.parentNode.insertBefore(black, temp);
        elemt.parentNode.removeChild(temp);
    }  
    if (isFinished()) {
      won()
    }
}

let isFinished=()=> {
    var puzzleEl = document.getElementById('slidingpuzzleContainer').children[0];
    var pieces = [].slice.call(puzzleEl.children);  
    return pieces
        .map( (piece)=> {
            return piece.id.substr(8); 
        })
        .every( (id, index, arr)=> {
            if (arr.length == index + 1) {               
                return id == "black_box";
            }            
            return index + 1 == parseInt(id);
        });
}

let won=()=> {
    var content = document.getElementById("slidingpuzzleContainer");
    var textTitle = document.createTextNode("!Has Ganado!");
    
    var textAdvice = document.createTextNode("Pulsa F5 para jugar de nuevo o presione el boton reset!!");    
    content.removeChild(document.getElementsByClassName("container")[0]);
    var title = document.createElement("h1");
    title.style.color = "red";
    title.appendChild(textTitle);   

    var advice = document.createElement("h3");
    advice.appendChild(textAdvice);

    content.appendChild(title); 
    content.appendChild(advice);
}
