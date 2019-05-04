const BOARD = document.querySelector('#board');
let TILES = [...document.querySelectorAll('#board div')];

const EMPTY_TILE = document.querySelector('#empty-tile');

function refreshListeners(oldAdjacent, newAdjacent) {
  oldAdjacent.forEach(tile => tile.removeEventListener('click', onClick));
  newAdjacent.forEach(tile => tile.addEventListener('click', onClick));
}

refreshListeners([], [...document.querySelectorAll('#board div.adjacent')]);

function swap(tile) {
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
}

function onClick(e) {
  const tileNum = e.target.innerHTML;
  console.log(tileNum);
  const oldAdjacent = [...document.querySelectorAll('#board div.adjacent')];

  swap(e.target);
  // TODO: calculate new adjacent.

  const newAdjacent = [...document.querySelectorAll('#board div.adjacent')];
  EMPTY_TILE.refreshListeners(oldAdjacent, newAdjacent);
}
