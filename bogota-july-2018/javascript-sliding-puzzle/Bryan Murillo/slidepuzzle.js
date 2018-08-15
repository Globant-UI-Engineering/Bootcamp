document.addEventListener('keydown', (event) => {
  let gameBoard = document.querySelector(".board");
  let keyName = event.key;
  let indexBlank = getIndexBlank();
  gameBoard = moveTile[keyName](indexBlank,gameBoard);
  if (isWon(gameBoard)) {
    alert("You've won the game!");
  }
});

var moveTile = {
  "ArrowDown": (index, board) => {
    if (index > 2) {
      let tiles = board.children;
      board.insertBefore(tiles[index-3], tiles[index].nextSibling);
      board.insertBefore(tiles[index-1], tiles[index-3]);
    }
    return board;
  },
  "ArrowUp":  (index, board) => {
    if (index < 6) {
      let tiles = board.children;
      board.insertBefore(tiles[index], tiles[index+3].nextSibling);
      board.insertBefore(tiles[index+2], tiles[index]);
    }
    return board;
  },
  "ArrowLeft": (index, board) => {
    if ((index + 1) % 3 != 0) {
      let tiles = board.children;
      board.insertBefore(tiles[index].nextSibling, tiles[index]);
    }
    return board;
  },
  "ArrowRight": (index, board) => {
    if ((index + 1) % 3 != 1) {
      let tiles = board.children;
      board.insertBefore(tiles[index], tiles[index-1]);
    }
    return board;
  }
}

function getIndexBlank () {
    let gameBoard = document.querySelector(".board");
    let gameTiles = gameBoard.children;
    let indexBlank = 0;
    let i = 0;
    Array.from(gameTiles).forEach(
      (tile) => {
        let nameClass = tile.getAttribute("class");
        if (nameClass != "tile tile-blank") {
          i += 1;
        } else {
          indexBlank = i;
        }
      }
    );
    return indexBlank;
}

function shuffleBoard () {
    let gameBoard = document.querySelector(".board");
    let gameTiles = gameBoard.children;
    Array.from(gameTiles).forEach(
        (tile) => {
            let random = Math.floor((Math.random() * 8));
            gameBoard.insertBefore(tile, gameTiles[random]);
        }
    );
}

function isWon(board){
  let result = false;
  let tiles = board.children;
  if (tiles[tiles.length - 1].innerHTML == "b") {
    let iTile = 1;
    Array.from(tiles).forEach(
      (tile) => {
        if (tile.innerHTML != "b") {
          if (iTile == tile.innerHTML) {
            iTile++;
          }
        } else {
          if (iTile == 9) {
            result = true;
          }
        }
      }
    );
  }
  return result;
}
