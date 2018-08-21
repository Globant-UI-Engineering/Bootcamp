  const slabElements = document.getElementsByClassName('slab');
  const slabPlacementOrder = {'1': null,'2': null,'3': null,'4': null,'5': null,'6': null,'7': null,'8': null,'9': null};
  let movableSlabPosition;
 
  createNewGame = () => {        
    let  slabPlacementOrderArray = [7,2,8,5,1,9,4,3,6]; 
     slabPlacementOrderArray.forEach((val, i) => {
       slabPlacementOrder[i + 1] = val;
      let numberElementPosition = i > 7 ? `${ slabPlacementOrder[9]} slab-blank` :  slabPlacementOrder[i + 1];
      slabElements[i].className = `slab slab-order-${numberElementPosition}`;
    });
    movableSlabPosition = getAvailablePositions( slabPlacementOrder[9]);  
  }

  clickedSlab = (e) => {
    let slabValue = e.target.getAttribute('data-slab');
    if (movableSlabPosition[slabValue]) {
      newSlabPosition(slabValue);
    }
  };
  
  newSlabPosition = (slabValue) => {
    [slabPlacementOrder[9], slabPlacementOrder[slabValue]] = [slabPlacementOrder[slabValue], slabPlacementOrder[9]]
    slabElements[8].className = `slab slab-order-${slabPlacementOrder[9]} slab-blank`; 
    slabElements[slabValue - 1].className = `slab slab-order-${slabPlacementOrder[slabValue]}`;
    
    (itsOver()) ? alert('You won the game') : movableSlabPosition = getAvailablePositions(slabPlacementOrder[9]);
    
  };
  
  getAvailablePositions = (emptySlab) => {
    let positionsAvailable = {};
    if (emptySlab % 3 !== 1) {  // Check if Empty slab can be moved to the Left
      positionsAvailable[valuesAvailable(emptySlab - 1)] = 1 ; 
    }
    if (emptySlab % 3 !== 0) {  // Check if Empty slab can be moved to the Right
      positionsAvailable[valuesAvailable(emptySlab + 1)] = 1; 
    }
    if (emptySlab + 3 < 10) {  // Check if Empty slab can be moved to the Bottom
      positionsAvailable[valuesAvailable(emptySlab + 3)] = 1; 
    }
    if (emptySlab - 3 > 0) {  // // Check if Empty slab can be moved to the Top
      positionsAvailable[valuesAvailable(emptySlab - 3)] = 1; 
    }
    return positionsAvailable;
  };
  
  valuesAvailable= (position) => {
    for (let valueSlabAvailable in  slabPlacementOrder) {
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
