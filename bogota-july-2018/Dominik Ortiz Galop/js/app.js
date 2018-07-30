const model = {
  sliding: []
};

const controller = {
  
  createNewMatrix(row, column) {
    let counter = 0;
    const matrix = new Array(row);
    for (let i = 0, x = matrix.length; i < x; i += 1) {
      matrix[i] = new Array(column);
      for (let j = 0, z = matrix[i].length; j < z; j += 1) {
        counter += 1;
        counter === row * column
        ? (matrix[i][j] = 0)
        : (matrix[i][j] = counter);
      }
    }
    return matrix;
  },
  
  zeroLocation() {
    const zeroLocation = {
      x: 0,
      y: 0
    };
    const matrix = controller.getMatrix();
    for (let i = 0, x = matrix.length; i < x; i += 1) {
      for (let j = 0, y = matrix[i].length; j < y; j += 1) {
        if (matrix[i][j] === 0) {
          zeroLocation.y = j;
          zeroLocation.x = i;
        }
      }
    }
    model.sliding[0].zeroLocation = zeroLocation;
  },
  
  createNewGame(row, column) {
    class Matrix {
      constructor(row, column) {
        this.moves = 0;
        this.matrix = controller.createNewMatrix(row, column);
        this.zeroLocation = 0;
      }
    }
    return new Matrix(row, column);
  },
  
  changePosition(clickedElement) {
    const zeroPosition = model.sliding[0].zeroLocation;
    const elemt = model.sliding[0].matrix[clickedElement.x][clickedElement.y];
    if (clickedElement.x === zeroPosition.x) {
      if (
        clickedElement.y - 1 === zeroPosition.y ||
        clickedElement.y + 1 === zeroPosition.y
      ) {
        model.sliding[0].matrix[clickedElement.x][clickedElement.y] = 0;
        model.sliding[0].matrix[zeroPosition.x][zeroPosition.y] = elemt;
        model.sliding[0].zeroLocation.x = clickedElement.x;
        model.sliding[0].zeroLocation.y = clickedElement.y;
        controller.addMoves();
      }
    } else if (clickedElement.y === zeroPosition.y) {
      if (
        clickedElement.x - 1 === zeroPosition.x ||
        clickedElement.x + 1 === zeroPosition.x
      ) {
        model.sliding[0].matrix[clickedElement.x][clickedElement.y] = 0;
        model.sliding[0].matrix[zeroPosition.x][zeroPosition.y] = elemt;
        model.sliding[0].zeroLocation.x = clickedElement.x;
        model.sliding[0].zeroLocation.y = clickedElement.y;
        controller.addMoves();
      }
    }
  },
  
  shuffleMatrix() {
    const matrix = controller.getMatrix();
    for (let i = matrix.length - 1; i > 0; i -= 1) {
      for (let j = matrix[i].length - 1; i > 0; i -= 1) {
        const m = Math.floor(Math.random() * (i + 1));
        const n = Math.floor(Math.random() * (i + 1));
        const temp = matrix[i][j];
        matrix[i][j] = matrix[m][n];
        matrix[m][n] = temp;
      }
    }
    this.resetScore();
    return matrix;
  },
  
  changeMatrix(row, column) {
    const newMatrix = controller.createNewGame(row, column);
    model.sliding[0].matrix = newMatrix.matrix;
    return newMatrix.matrix;
  },
  
  addGame(game) {
    model.sliding.push(game);
  },
  
  addMoves() {
    model.sliding[0].moves += 1;
  },
  
  resetScore() {
    model.sliding[0].moves = 0;
  },
  
  getMatrix() {
    return model.sliding[0].matrix;
  },
  
  getMoves() {
    return model.sliding[0].moves;
  }
};

const view = {
  init() {
    this.container = document.getElementById("container");
    this.options = document.getElementById("options");
    this.score = document.getElementById("score");
    this.renderMatrix = this.newGame();
    this.size;
    this.renderButtons(this.renderMatrix);
    this.renderScore();
    this.container.addEventListener("click", e => this.currentItem(e));
    this.options.addEventListener("click", e => this.chooseOption(e));
  },
  
  newGame(row = 5, column = 5) {
    const game = controller.createNewGame(row, column);
    controller.addGame(game);
    const newMatrix = controller.shuffleMatrix();
    return newMatrix;
  },
  
  currentItem(e) {
    const position = {
      x: parseInt(e.target.dataset.x, 10),
      y: parseInt(e.target.dataset.y, 10)
    };
    controller.zeroLocation();
    controller.changePosition(position);
    this.renderScore();
    let currentMatrix = controller.getMatrix()
    this.renderButtons(currentMatrix);
  },
  
  gameFinish(initialGame, currentGame){
    console.log(initialGame);
    console.log(currentGame);
  },
  
  chooseOption(e) {
    this.size = this.container.className.slice(-5);
    switch (e.target.id) {
      case "shuffle":
        const shuffledMatrix = controller.shuffleMatrix()
        this.renderButtons(shuffledMatrix);
        this.renderScore();
        break;
      case "matrix-select":
        this.container.classList.add(`size${e.target.value}`);
        this.changeMatrix(e.target.value, this.size);
        break;
      default:
        break;
    }
  },
  
  changeMatrix(e, size ) {
    const matrixSize = parseInt(e, 10);
    this.container.classList.replace(size, `size${e}`);
    this.renderMatrix = controller.changeMatrix(matrixSize, matrixSize);
    controller.resetScore();
    this.renderScore();
    this.renderButtons(this.renderMatrix);
  },

  renderButtons(matrix) {
    this.button = "";
    for (let i = 0, x = matrix.length; i < x; i += 1) {
      for (let j = 0, z = matrix[j].length; j < z; j += 1) {
        if (matrix[i][j]) {
          this.button += `<button class="btn" data-x="${i}" data-y="${j}">${
            matrix[i][j]
          }</button>`;
        } else
        this.button += `
        <button class="btn zero" data-x="${i}" data-y="${j}">${
          matrix[i][j]
        }</button>
        `;
      }
    }
    this.container.innerHTML = this.button;
  },
  
  renderScore() {
    this.score.textContent = `Moves: ${controller.getMoves()}`;
  }
};

view.init();
