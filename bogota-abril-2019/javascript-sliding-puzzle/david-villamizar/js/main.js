const BOARD = document.querySelector('#board');
let TILES = [...document.querySelectorAll('#board div')];

const EMPTY_TILE = document.querySelector('#empty-tile');

function refreshListeners(oldAdjacent, newAdjacent) {
  oldAdjacent.forEach(tile => tile.removeEventListener('click', onClick));
  newAdjacent.forEach(tile => tile.addEventListener('click', onClick));
}

refreshListeners([], [...document.querySelectorAll('#board div.adjacent')]);

function swap(tile, oldAdjacent) {
  const tileInd = TILES.indexOf(tile);
  const emptyTileInd = TILES.indexOf(EMPTY_TILE);
  if (tileInd < emptyTileInd) {
    TILES = [
      ...TILES.slice(0, tileInd),
      EMPTY_TILE,
      ...TILES.slice(tileInd + 1, emptyTileInd),
      tile,
      ...TILES.slice(emptyTileInd + 1, TILES.length)
    ];
  } else {
    TILES = [
      ...TILES.slice(0, emptyTileInd),
      tile,
      ...TILES.slice(emptyTileInd + 1, tileInd),
      EMPTY_TILE,
      ...TILES.slice(tileInd + 1, TILES.length)
    ];
  }
  console.log('TILES:', TILES);
  const placeholderEmpty = document.createElement('div');
  const placeholderTile = document.createElement('div');
  BOARD.replaceChild(placeholderEmpty, EMPTY_TILE);
  BOARD.replaceChild(placeholderTile, tile);
  BOARD.replaceChild(tile, placeholderEmpty);
  BOARD.replaceChild(EMPTY_TILE, placeholderTile);

  return calculateNewAdjacent(tileInd, oldAdjacent);
}

function calculateNewAdjacent(emptyTileInd, oldAdjacent) {
  oldAdjacent.forEach(tile =>
    tile.classList.remove('down', 'up', 'left', 'right', 'adjacent')
  );
  const upInd = emptyTileInd - 4;
  const upTile = TILES[upInd];

  const downInd = emptyTileInd + 4;
  const downTile = TILES[downInd];

  const leftInd = emptyTileInd - 1;
  const leftTile =
    leftInd >= Math.floor(emptyTileInd / 4) * 4 ? TILES[leftInd] : undefined;

  const rightInd = emptyTileInd + 1;
  const rightTile =
    rightInd < Math.floor(emptyTileInd / 4 + 1) * 4
      ? TILES[rightInd]
      : undefined;

  if (upTile) {
    upTile.classList.add('adjacent');
    upTile.classList.add('up');
  }
  if (downTile) {
    downTile.classList.add('adjacent');
    downTile.classList.add('down');
  }
  if (leftTile) {
    leftTile.classList.add('adjacent');
    leftTile.classList.add('left');
  }
  if (rightTile) {
    rightTile.classList.add('adjacent');
    rightTile.classList.add('right');
  }

  return [upTile, downTile, leftTile, rightTile].filter(tile => !!tile);
}

function onClick(e) {
  const oldAdjacent = [...document.querySelectorAll('#board div.adjacent')];
  const newAdjacent = swap(e.target, oldAdjacent);
  refreshListeners(oldAdjacent, newAdjacent);
}

// TODO: Desordenar.
// TODO: Detectar cuando gana.
