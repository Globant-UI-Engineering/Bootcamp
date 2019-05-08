const RANDOMIZATION_MOVES = 100;
const BOARD = document.querySelector("#board");
const EMPTY_TILE = document.querySelector("#empty-tile");

let TILES = [...document.querySelectorAll("#board div")];
const VICTORY_TILES = [...TILES];

let adjacentTiles = ["up", "down", "left", "right"]
  .map(key => ({
    key,
    element: document.querySelector(`#board div.adjacent.${key}`),
  }))
  .filter(tile => tile.element);

addListeners();
const RANDOMIZE_BUTTON = document.querySelector("#randomize-button");

RANDOMIZE_BUTTON.addEventListener("click", async e => {
  RANDOMIZE_BUTTON.disabled = true;
  await randomizeBoard(RANDOMIZATION_MOVES);
  RANDOMIZE_BUTTON.disabled = false;
});

function addListeners() {
  adjacentTiles.forEach(tile =>
    tile.element.addEventListener("click", onClickTile),
  );
  document.addEventListener("keydown", onKeyDown);
}

function removeListeners() {
  adjacentTiles.forEach(tile =>
    tile.element.removeEventListener("click", onClickTile),
  );
}

function onKeyDown(e) {
  const key = e.key.slice(5).toLowerCase();

  const tile = adjacentTiles.find(tile => tile.key === key);
  if (tile) {
    tile.element.click();
  }
}

async function onClickTile(e) {
  await makeMove(e.target);
  if (didWin()) {
    alert("YOU WIN!");
  }
}

function didWin() {
  for (let i = 0; i < VICTORY_TILES.length; ++i) {
    if (TILES[i] !== VICTORY_TILES[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Randomize the board by a given number of moves from the initial sorted state.
 * @param {number} moves
 */
async function randomizeBoard(moves) {
  let lastTile;
  for (let i = 0; i < moves; ++i) {
    let tile = adjacentTiles[Math.floor(Math.random() * adjacentTiles.length)];
    if (tile === lastTile) {
      tile = adjacentTiles[Math.floor(Math.random() * adjacentTiles.length)];
    }
    await makeMove(tile.element);
    lastTile = tile;
  }
}

async function makeMove(tile) {
  removeListeners();
  adjacentTiles.forEach(tile =>
    tile.element.classList.remove("down", "up", "left", "right", "adjacent"),
  );

  adjacentTiles = calculateNewAdjacent(await swap(tile));
  addListeners();
}

/**
 * Swaps a tile to the empty space and returns the new index of the empty tile.
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

  const placeholderEmpty = document.createElement("div");
  const placeholderTile = document.createElement("div");
  BOARD.replaceChild(placeholderEmpty, EMPTY_TILE);
  BOARD.replaceChild(placeholderTile, tile);
  BOARD.replaceChild(tile, placeholderEmpty);
  BOARD.replaceChild(EMPTY_TILE, placeholderTile);

  return tileInd;
}

function calculateNewAdjacent(emptyTileInd) {
  const upInd = emptyTileInd + 4;
  const upTile = TILES[upInd];

  const downInd = emptyTileInd - 4;
  const downTile = TILES[downInd];

  const leftInd = emptyTileInd + 1;
  const leftTile =
    leftInd < Math.floor(emptyTileInd / 4 + 1) * 4 ? TILES[leftInd] : undefined;

  const rightInd = emptyTileInd - 1;
  const rightTile =
    rightInd >= Math.floor(emptyTileInd / 4) * 4 ? TILES[rightInd] : undefined;

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

  return [
    { key: "up", element: upTile },
    { key: "down", element: downTile },
    { key: "left", element: leftTile },
    { key: "right", element: rightTile },
  ].filter(tile => tile.element);
}

function translateTowards(element, dstElement) {
  const x = dstElement.offsetLeft - element.offsetLeft;
  const y = dstElement.offsetTop - element.offsetTop;
  return new Promise(resolve => {
    const onAnimationComplete = e => {
      element.removeEventListener("transitionend", onAnimationComplete);
      resolve();
    };
    element.addEventListener("transitionend", onAnimationComplete, false);

    element.style.transform = `translate(${x}px, ${y}px)`;
  });
}
