const BOARD = document.querySelector("#board");
let TILES = [...document.querySelectorAll("#board div")];

const EMPTY_TILE = document.querySelector("#empty-tile");

function addListeners(...elements) {
  elements.forEach(el => el.addEventListener("click", onClick));
}
function removeListeners(...elements) {
  elements.forEach(el => el.removeEventListener("click", onClick));
}

addListeners(...document.querySelectorAll("#board div.adjacent"));

/**
 * Swaps a tile to the empty space and returns an array with the new adjacent tiles.
 * @param {HTMLElement} tile
 * @returns {HTMLElement[]}
 */
async function swap(tile) {
  await translateTowards(tile, EMPTY_TILE);
  tile.style.transform = null;
  const tileInd = TILES.indexOf(tile);
  const emptyTileInd = TILES.indexOf(EMPTY_TILE);
  if (tileInd < emptyTileInd) {
    TILES = [
      ...TILES.slice(0, tileInd),
      EMPTY_TILE,
      ...TILES.slice(tileInd + 1, emptyTileInd),
      tile,
      ...TILES.slice(emptyTileInd + 1, TILES.length),
    ];
  } else {
    TILES = [
      ...TILES.slice(0, emptyTileInd),
      tile,
      ...TILES.slice(emptyTileInd + 1, tileInd),
      EMPTY_TILE,
      ...TILES.slice(tileInd + 1, TILES.length),
    ];
  }
  console.log("TILES:", TILES);
  const placeholderEmpty = document.createElement("div");
  const placeholderTile = document.createElement("div");
  BOARD.replaceChild(placeholderEmpty, EMPTY_TILE);
  BOARD.replaceChild(placeholderTile, tile);
  BOARD.replaceChild(tile, placeholderEmpty);
  BOARD.replaceChild(EMPTY_TILE, placeholderTile);

  return calculateNewAdjacent(tileInd);
}

function calculateNewAdjacent(emptyTileInd) {
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
    upTile.classList.add("adjacent");
    upTile.classList.add("up");
  }
  if (downTile) {
    downTile.classList.add("adjacent");
    downTile.classList.add("down");
  }
  if (leftTile) {
    leftTile.classList.add("adjacent");
    leftTile.classList.add("left");
  }
  if (rightTile) {
    rightTile.classList.add("adjacent");
    rightTile.classList.add("right");
  }

  return [upTile, downTile, leftTile, rightTile].filter(tile => !!tile);
}

async function onClick(e) {
  const oldAdjacent = [...document.querySelectorAll("#board div.adjacent")];
  removeListeners(...oldAdjacent);
  oldAdjacent.forEach(tile =>
    tile.classList.remove("down", "up", "left", "right", "adjacent"),
  );

  const newAdjacent = await swap(e.target);
  addListeners(...newAdjacent);
}

function translateTowards(element, dstElement) {
  const x = dstElement.offsetLeft - element.offsetLeft;
  const y = dstElement.offsetTop - element.offsetTop;
  return new Promise(resolve => {
    element.addEventListener(
      "transitionend",
      e => {
        elem.removeEventListener("transitionend", onAnimationComplete);
        resolve(e);
      },
      false,
    );

    element.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// TODO: Desordenar.
// TODO: Detectar cuando gana.
