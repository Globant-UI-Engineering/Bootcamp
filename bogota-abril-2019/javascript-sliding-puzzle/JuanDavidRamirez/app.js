window.onload = function(){
    init();
}

/**
 * This is the matrix that represents the game board.
 */
var model = [];

/**
 * This function initializes all the data of the game.
 */
var init = function(){
    initModel();
    initResetButton();
    initPuzzleButtons();
}

/**
 * This method creates the initial state of the model.
 */
var initModel = function(){
    model = [[5,2,8],[4,1,7],[0,3,6]];
    render();
}


/**
 * This method adds the click listener to the reset button.
 */
var initResetButton = function(){
    var resetButton = document.querySelector("header + button");
    resetButton.onclick = function(event){
        initModel();
    }
}

/**
 * This method adds all of the sliding items click listeners.
 */
var initPuzzleButtons = function(){
    var puzzleButtons = document.querySelectorAll(".container *");
    for(let i = 0; i < puzzleButtons.length; i++){
        puzzleButtons[i].onclick = function(event){
            if(puzzleButtons[i].innerText != ""){
                var zeroElementIndex = model.multiIndexOf(0);
                var puzzleButtonIndex = model.multiIndexOf(parseInt(puzzleButtons[i].innerText));
                if((zeroElementIndex[0] == puzzleButtonIndex[0] 
                    && Math.abs(zeroElementIndex[1] - puzzleButtonIndex[1]) == 1)
                    || (zeroElementIndex[1] == puzzleButtonIndex[1] 
                    && Math.abs(zeroElementIndex[0] - puzzleButtonIndex[0]) == 1)){

                        model[zeroElementIndex[0]][zeroElementIndex[1]] = parseInt(puzzleButtons[i].innerText);
                        model[puzzleButtonIndex[0]][puzzleButtonIndex[1]] = 0;

                        gameFinished();
                    }
                render();

            }
            
        }
        
    }
}


/**
 * Checks if the player has won already, if it has it launches a message in the screen and resets the game state
 */
var gameFinished = function(){
    var finalStateModel = model.flat();
    var zeroIndex = finalStateModel.indexOf(0);
    finalStateModel.splice(zeroIndex, 1);
    if(JSON.stringify([...finalStateModel].sort()) === JSON.stringify(finalStateModel)){
        alert("You Have won");
        initModel();
    }
} 

/**
 * This method draws the board numbers according to the plays made.
 */
var render = function(){
    var puzzleButtons = document.querySelectorAll(".container *");
    var elementsModel = model.flat();
    for(let i = 0; i < puzzleButtons.length; i++){
        if(elementsModel[i] == 0){
            puzzleButtons[i].innerText = "";
            puzzleButtons[i].style.backgroundColor = "white";
        } else{
            puzzleButtons[i].innerText = elementsModel[i];
            puzzleButtons[i].style.backgroundColor = "rgba(160, 159, 159, 0.959)";
        }
        
        
    }
}


/**
 * @returns The index of an element into a nested array.
 */
Array.prototype.multiIndexOf = function (value) {
    var result;
    this.some(function iter(path) {
        return function (element, index) {
            if (element === value) {
                result = path.concat(index);                        
                return true;
            };
            return Array.isArray(element) && element.some(iter(path.concat(index)));
        }
    }([]));
    return result;
}