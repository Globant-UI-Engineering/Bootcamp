  const slabElements = document.getElementsByClassName('slab'); // List of elements with class="slab"
  const  slabPlacementOrder = {'Pos-1': null,'Pos-2': null,'Pos-3': null,'Pos-4': null,'Pos-5': null,'Pos-6': null,'Pos-7': null,'Pos-8': null,'Pos-9': null};
  let movableSlabPosition;
  slabPlacementOrder
  window.onload = function(){
    createNewGame();
    document.getElementsByClassName('board')[0].addEventListener('click', clickedSlab);
  }

  function createNewGame() {
    let  slabPlacementOrderArray = [7,2,8,5,1,9,3,4,6];
    // Take the array we just shuffled and set the position of each number (from 1 to 9) acording to the order the arrays says. 
     slabPlacementOrderArray.forEach((val, i) => {
    //Since arrays start in 0  we add 1 so our object  slabPlacementOrder place the correct position to each value
       slabPlacementOrder[i + 1] = val;
    //Check if we are in the last iteration , if is true we add property slab-blank so we know is the empty slab, if is false we add the corresponding order
      let numberElementPosition = i > 7 ? `${ slabPlacementOrder[9]} slab-blank` :  slabPlacementOrder[i + 1];
      slabElements[i].className = `slab slab-order-${numberElementPosition}`;
    });
    //check if the empty slab can be move to right left bottom or below.The Return is saved as an object.
    movableSlabPosition = getAvailablePositions( slabPlacementOrder[9]);  
  }

  function clickedSlab(e) {
    //Take the value of the slab we clicked.
    let slabValue = e.target.getAttribute('data-slab');
    //Check if the slab we clicked is inside our object 'movableSlabPosition'
    //which contains the positions where our empty object can move,
    if (movableSlabPosition[slabValue]) {
      //if is true, slabs switch places
      newSlabPosition(slabValue);
    }
  }
  
  function newSlabPosition(tileNum) {
    //Swap values in  slabPlacementOrder object
    [ slabPlacementOrder[9],  slabPlacementOrder[tileNum]] = [ slabPlacementOrder[tileNum],  slabPlacementOrder[9]]
  
    //Swap tile className positions
    slabElements[8].className = `slab slab-order-${ slabPlacementOrder[9]} slab-blank`; // empty Slab
    slabElements[tileNum - 1].className = `slab slab-order-${ slabPlacementOrder[tileNum]}`; // Slab clicked
  
    movableSlabPosition = getAvailablePositions(slabPlacementOrder[9]);
  }
  
  function getAvailablePositions(emptySlab) {
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
  }
  
  function valuesAvailable(position) {
    for (let valueSlabAvailable in  slabPlacementOrder) {
      // Value of Positions available to make a swap
      if ( slabPlacementOrder[valueSlabAvailable] == position) {
        return valueSlabAvailable;
      }
    }
  }
