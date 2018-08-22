(function(){
  //Have all the kinds of game (2x2, 3x3, 4x4, 5x5)
  var kindsOfGames ={
    "2x2": {
      intSize: 3,
      rows: 2,
      columns: 2,
      square: 46.5,
      listItems: []
    },
    "3x3": {
      intSize: 8,
      rows: 3,
      columns: 3,
      square: 31,
      listItems: []
    },
    "4x4": {
      intSize: 15,
      rows: 4,
      columns: 4,
      square: 23.25,
      listItems: []
    },
    "5x5": {
      intSize: 24,
      rows: 5,
      columns: 5,
      square: 18.6,
      listItems: []
    }
  }

  //Create every item for each kind
  function insertItemsToKind(){
    var items = [];
    var item = {};
    var movXY = 0.0;
    var numberPos = 1;

    for (kind in kindsOfGames){
      movXY = kindsOfGames[kind].square;
      movXY = (100 - movXY) / (kindsOfGames[kind].rows - 1);

      for (var i = 1; i <= kindsOfGames[kind].rows; i++){

        for (var j = 1; j <= kindsOfGames[kind].columns; j++) {
          item = {
            number: numberPos,
            position: numberPos,
            top: (movXY * i) - movXY,
            left: (movXY * j) - movXY
          }
          items.push(item);
          numberPos++;
        }
      }

      items[items.length - 1].number = 'empty';
      kindsOfGames[kind].listItems = items;
      numberPos = 1;
      items = [];
    }
  }

  //Insert items in html like div Node
  function insertItemsToHTML(kind){

    var kind = kindsOfGames[kind];
    var parentBoard = document.querySelector(".puzzle");

    for (var i = 0; i < kind.listItems.length - 1; i++){
      //htmlString = "<div class='item' style='width: " + kind.square + "%; height: " + kind.square + "%; left: " + kind.listItems[i].left + "%; top: " + kind.listItems[i].top + "%'>" + kind.listItems[i].number + "</div>";
      var divNode = document.createElement("div");

      divNode.classList.add("item");
      divNode.style.width = kind.square + "%";
      divNode.style.height = kind.square + "%";
      divNode.style.left = kind.listItems[i].left + "%";
      divNode.style.top = kind.listItems[i].top + "%";
      divNode.innerHTML = kind.listItems[i].number;

      divNode.addEventListener('click', itemClick, true);


      parentBoard.appendChild(divNode);
    }
  }

  //Function to move item around the board when is clicked
  function itemClick(event){
    var item = event.target;
    var numberItem = item.innerHTML;
    var activeKind = kindsOfGames[document.querySelector(".kind-of-game").value];
    var emptyItem = activeKind.listItems[activeKind.listItems.length - 1];

    if (!isItemMovable(numberItem, activeKind)) {
      console.log(numberItem + " cannot be move");
      return;
    }

    var emptyTop = emptyItem.top;
    var emptyLeft = emptyItem.left;
    var emptyPosition = emptyItem.position;

    activeKind.listItems[activeKind.listItems.length - 1].top = activeKind.listItems[numberItem - 1].top;
    activeKind.listItems[activeKind.listItems.length - 1].left = activeKind.listItems[numberItem - 1].left;
    activeKind.listItems[activeKind.listItems.length - 1].position = activeKind.listItems[numberItem - 1].position;

    item.style.left = emptyLeft + "%";
    item.style.top = emptyTop + "%";

    activeKind.listItems[numberItem - 1].top = emptyTop;
    activeKind.listItems[numberItem - 1].left = emptyLeft;
    activeKind.listItems[numberItem - 1].position = emptyPosition;

  }

  //Function to verify is item can move
  function isItemMovable (numberItem, activeKind){

    var allPosiblesMovesInBoard = extractPosibleMovesInBoard(activeKind);
    var actualPositionOfItem = activeKind.listItems[numberItem - 1].position;
    var emptyItem = activeKind.listItems[activeKind.listItems.length - 1];
    var posibleMovesOfItemInBoard = allPosiblesMovesInBoard[actualPositionOfItem - 1];

    if (posibleMovesOfItemInBoard.includes(emptyItem.position)) {
      //console.log(true);
      return true;
    }else {
      //console.log(false);
      return false;
    }

  }

  //Function to extract the moves around the board in sequence to item
  function extractPosibleMovesInBoard(activeKind){

    var posibleMovesInBoard = [];
    var tuple = [];
    var position = 1;

    for (var i = 1; i <= activeKind.rows; i++){
      for (var j = 1; j <= activeKind.columns; j++){
        if ((position - activeKind.rows) > 0) {
            //console.log("1. Position: " + position + " Moves: " + (position - activeKind.rows));
            tuple.push((position - activeKind.rows));
        }

        if ((position + activeKind.rows) <= (activeKind.intSize + 1)) {
          //console.log("2. Position: " + position + " Moves: " + (position + activeKind.rows));
          tuple.push((position + activeKind.rows));
        }

        if ((position - 1) > 0 && (position - 1) > (activeKind.rows * (i - 1))) {
          //console.log("3. Position: " + position + " Moves: " + (position - 1));
          tuple.push((position - 1));
        }

        if ((position + 1) <= (activeKind.intSize + 1) && (position + 1) < ((activeKind.rows * i) + 1)) {
          //console.log("4. Position: " + position + " Moves: " + (position + 1));
          tuple.push((position + 1));
        }
        position++;
        posibleMovesInBoard.push(tuple);
        tuple = [];
      }
    }

    return posibleMovesInBoard;

  }

  //Delete all the childs nodes in board
  function deleteItemsToHTML(){
    var parentBoard = document.querySelector(".puzzle");

    while (parentBoard.firstChild) {
      parentBoard.removeChild(parentBoard.firstChild);
    }
  }


  //Function when kind changes
  function changeKind(){
    var kind = document.querySelector(".kind-of-game").value;
    deleteItemsToHTML();
    randomPositionItems(kind);
    insertItemsToHTML(kind);
  }

  //function to Restart game
  function restartGame(){
    console.log("Hola");
    var activeKind = document.querySelector(".kind-of-game").value;
    insertItemsToKind();
    deleteItemsToHTML();
    randomPositionItems(activeKind);
    insertItemsToHTML(activeKind);
  }

  //Function to solve game
  function solveGame(){
    var activeKind = document.querySelector(".kind-of-game").value;
    insertItemsToKind();
    deleteItemsToHTML();
    insertItemsToHTML(activeKind);
  }

  //Items in random positions
  function randomPositionItems(kind){

    var activeKind = kindsOfGames[kind];
    var i = 0;
    var emptyItem = {};
    var itemToMove = {};
    var randomNumber= 0;
    var maxValue = 0;
    var minValue = 1;

    maxValue = activeKind.intSize;

    while (i < (5 * activeKind.intSize)){
      randomNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);

      itemToMove = activeKind.listItems[randomNumber - 1];
      emptyItem = activeKind.listItems[activeKind.listItems.length - 1];

      var emptyTop = emptyItem.top;
      var emptyLeft = emptyItem.left;
      var emptyPosition = emptyItem.position;

      activeKind.listItems[activeKind.listItems.length - 1].top = itemToMove.top;
      activeKind.listItems[activeKind.listItems.length - 1].left = itemToMove.left;
      activeKind.listItems[activeKind.listItems.length - 1].position = itemToMove.position;

      activeKind.listItems[randomNumber - 1].top = emptyTop;
      activeKind.listItems[randomNumber - 1].left = emptyLeft;
      activeKind.listItems[randomNumber - 1].position = emptyPosition;

      i++;
    }

  }

  //Load the game
  insertItemsToKind();
  randomPositionItems("2x2");
  insertItemsToHTML("2x2");


  document.querySelector(".kind-of-game").addEventListener('change', changeKind, true);
  document.querySelector("#restart").addEventListener('click', restartGame, true);
  document.querySelector("#solve").addEventListener('click', solveGame, true);

}())
