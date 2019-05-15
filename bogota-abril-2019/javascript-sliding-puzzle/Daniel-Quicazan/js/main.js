/*let puzzlePositions = [0, 1, 2, 3, 4, 5, 6, 7, undefined];
puzzlePositions = [0, 1, 2, 3, 4, 5, 6, 7, undefined];
puzzlePositions = [0, 1, 2, 3, 4, 5, 6, 7, undefined];*/
puzzlePositions = [0, 1, 2, 3, undefined, 4, 5, 6, 7];
puzzleImages = {
  0: "img/image_part_0.png",
  1: "img/image_part_1.png",
  2: "img/image_part_2.png",
  3: "img/image_part_3.png",
  4: "img/image_part_4.png",
  5: "img/image_part_5.png",
  6: "img/image_part_6.png",
  7: "img/image_part_7.png",
  8: "img/image_part_8.png"
};

document.body.addEventListener('keydown', keyPressHappened);

setImages();

function setImages() {
  for (let i = 0; i < 9; i++){
    document.getElementById("puzzle-piece-image-" + i).src = puzzleImages[puzzlePositions[i]]
  }
}

function isUpAllowed(position) {
  return position > 2 && puzzlePositions[position - 3] === undefined;
}

function isDownAllowed(position) {
  return position < 6 && puzzlePositions[position + 3] === undefined;
}

function isLeftAllowed(position) {
  return position % 3 !== 0 && puzzlePositions[position - 1] === undefined
}

function isRightAllowed(position) {
  return position % 3 !== 2 && puzzlePositions[position + 1] === undefined
}

function getEmptyPosition() {
  return puzzlePositions.indexOf(undefined)
}

function moveUp(position) {
  if (isUpAllowed(position)){
    puzzlePositions[position - 3] = puzzlePositions[position];
    puzzlePositions[position] = undefined;
  }
}

function moveDown(position) {
  if (isDownAllowed(position)){
    puzzlePositions[position + 3] = puzzlePositions[position];
    puzzlePositions[position] = undefined;
  }
}

function moveLeft(position) {
  if (isLeftAllowed(position)){
    puzzlePositions[position - 1] = puzzlePositions[position];
    puzzlePositions[position] = undefined;
  }
}

function moveRight(position) {
  if (isRightAllowed(position)){
    puzzlePositions[position + 1] = puzzlePositions[position];
    puzzlePositions[position] = undefined;
  }
}

function printState() {
  let state = "";
  for (let i = 0; i < 3; i++) {
    state += puzzlePositions.slice(3 * i, 3 * i + 3).reduce((a, b) => a + "\t" + b) + "\n"
  }
  console.log(state);
}

function keyPressHappened($event) {
  let position = getEmptyPosition();
  printState();
  switch ($event.code) {
    case "ArrowUp":
      moveUp(position + 3);
      printState();
      break;
    case "ArrowDown":
      moveDown(position - 3);
      printState();
      break;
    case "ArrowLeft":
      moveLeft(position + 1);
      printState();
      break;
    case "ArrowRight":
      moveRight(position - 1);
      printState();
      break;
  }
  console.log($event.code);
  setImages();
}

console.log(getEmptyPosition());

/*
for (let position = 0; position < 9; position++){
  console.log(position);
  console.log("up: " + isUpAllowed(position));
  console.log("down: " + isDownAllowed(position));
  console.log("left: " + isLeftAllowed(position));
  console.log("right: " + isRightAllowed(position));
}
*/
