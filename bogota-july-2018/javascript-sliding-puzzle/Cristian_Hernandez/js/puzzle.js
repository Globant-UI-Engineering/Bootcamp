  const slabElements = document.getElementsByClassName('slab'); // List of elements with class="slab"
  const slabPlacementOrder = {'1': null,'2': null,'3': null,'4': null,'5': null,'6': null,'7': null,'8': null,'9': null};
  let movableSlabPosition;
 
  createNewGame = () => {        //[1,2,3,4,5,6,7,9,8] [7,2,8,5,1,9,3,4,6]
    let  slabPlacementOrderArray = [7,2,8,5,1,9,4,3,6]; //Pos
    // Take the array we just created and set the position of each number (from 1 to 9) acording to the order the arrays says. 
     slabPlacementOrderArray.forEach((val, i) => {
    //Since arrays start in 0  we add 1 so our object  slabPlacementOrder place the correct position to each value
       slabPlacementOrder[i + 1] = val; // Val = Pos in Sliding board
    //Check if we are in the last iteration , if is true we add property slab-blank so we know is the empty slab, if is false we add the corresponding order
      let numberElementPosition = i > 7 ? `${ slabPlacementOrder[9]} slab-blank` :  slabPlacementOrder[i + 1];
      slabElements[i].className = `slab slab-order-${numberElementPosition}`;
    });
    //check if the empty slab can be move to right left bottom or below.The Return is saved as an object.
    movableSlabPosition = getAvailablePositions( slabPlacementOrder[9]);  
  }

  clickedSlab = (e) => {
    //Take the value of the slab we clicked.
    let slabValue = e.target.getAttribute('data-slab');
    //Check if the slab we clicked is inside our object 'movableSlabPosition'
    //which contains the positions where our empty object can move,
    if (movableSlabPosition[slabValue]) {
      //if is true, slabs switch places
      newSlabPosition(slabValue);
    }
  };
  
  newSlabPosition = (slabValue) => {
    //Swap values in  slabPlacementOrder object
    [slabPlacementOrder[9], slabPlacementOrder[slabValue]] = [slabPlacementOrder[slabValue], slabPlacementOrder[9]]
  
    //Swap tile className positions
    slabElements[8].className = `slab slab-order-${slabPlacementOrder[9]} slab-blank`; // empty Slab
    slabElements[slabValue - 1].className = `slab slab-order-${slabPlacementOrder[slabValue]}`; // Slab clicked
    
    (itsOver()) ? alert('You won the game') : movableSlabPosition = getAvailablePositions(slabPlacementOrder[9]);
    
  };
  
  getAvailablePositions = (emptySlab) => {
    let positionsAvailable = {};
    if (emptySlab % 3 !== 1) {  // Check if Empty slab can be moved to the Left
      positionsAvailable[valuesAvailable(emptySlab - 1)] = 1 ; // Save the Value of the Slab that can be swap
    }
    if (emptySlab % 3 !== 0) {  // Check if Empty slab can be moved to the Right
      positionsAvailable[valuesAvailable(emptySlab + 1)] = 1; // Save the Value of the Slab that can be swap
    }
    if (emptySlab + 3 < 10) {  // Check if Empty slab can be moved to the Bottom
      positionsAvailable[valuesAvailable(emptySlab + 3)] = 1; // Save the Value of the Slab that can be swap
    }
    if (emptySlab - 3 > 0) {  // // Check if Empty slab can be moved to the Top
      positionsAvailable[valuesAvailable(emptySlab - 3)] = 1; // Save the Value of the Slab that can be swap
    }
    return positionsAvailable;
  };
  
  valuesAvailable= (position) => {
    for (let valueSlabAvailable in  slabPlacementOrder) {
      // Value of Positions available to make a swap
      if ( slabPlacementOrder[valueSlabAvailable] == position) {
        return valueSlabAvailable;
      }
    }
  };

  itsOver = () =>{
    for(let positionSlab in slabPlacementOrder){
      if (slabPlacementOrder[positionSlab] != positionSlab) {
        return false; 
      }
    }
    return true;
  }

  createNewGame();
  document.getElementsByClassName('board')[0].addEventListener('click', clickedSlab);
  document.getElementsByClassName('btn-reset')[0].addEventListener('click', createNewGame);
  
