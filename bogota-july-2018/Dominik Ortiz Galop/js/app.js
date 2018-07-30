  const model = {
    sliding: []
  };
  
  const controller = {
    addMatrix(matrix) {
      model.sliding.push(matrix);
    },

    createNewMatrix(row, column){
      let counter = 0;
      let matrix = new Array(row);
      for (let i = 0, x = matrix.length; i < x; i++) {
        matrix[i] = new Array(column);
        for (let j = 0, z = matrix[i].length; j < z; j++) {
          counter ++;
          counter === row * column
            ? matrix[i][j] = 0
            : matrix[i][j] = counter;
        }
      }
      return matrix;
    },

    zeroLocation(){
      let zeroLocation = {
        x:0,
        y:0
      };
      let matrix = controller.getMatrix();
      for (let i = 0, x = matrix.length; i < x; i++){
        for (let j = 0, y = matrix[i].length; j < y; j++){
          if(matrix[i][j] === 0){
            zeroLocation.y = j;
            zeroLocation.x = i;
          }
        }
      }
      model.sliding[0].zeroLocation = zeroLocation;
      return model.sliding[0].zeroLocation;
    },

    createNewGame(row, column) {
      class Matrix {
        constructor(row, column) {
          this.moves = 0,
          this.matrix = controller.createNewMatrix(row, column),
          this.zeroLocation = 0
        }
      }
      return new Matrix(row,column);
    },

    getMatrix(){
      return model.sliding[0].matrix;
    },

    getMoves(){
      return model.sliding[0].moves;
    },

    changePosition(clickedElement){
      let zeroPosition = controller.zeroLocation();
      let elemt = model.sliding[0].matrix[clickedElement.x][clickedElement.y];
      if( clickedElement.x  === zeroPosition.x){
        if(clickedElement.y -1 === zeroPosition.y || clickedElement.y + 1 === zeroPosition.y){
          model.sliding[0].matrix[clickedElement.x][clickedElement.y] = 0;
          model.sliding[0].matrix[zeroPosition.x][zeroPosition.y] = elemt;
          controller.addMoves();
        }
      }else if(clickedElement.y  === zeroPosition.y){
        if(clickedElement.x -1 === zeroPosition.x || clickedElement.x + 1 === zeroPosition.x){
          model.sliding[0].matrix[clickedElement.x][clickedElement.y] = 0;
          model.sliding[0].matrix[zeroPosition.x][zeroPosition.y] = elemt;
          controller.addMoves();
        }
      }
    },

    shuffleMatrix(){
      let originalMatrix = controller.getMatrix()
      for (let i = originalMatrix.length - 1; i > 0; i--){
        for(let j = originalMatrix[i].length - 1; i > 0; i--){
          const m = Math.floor(Math.random() * ( i + 1 ))
          const n = Math.floor(Math.random() * ( i + 1 ))
          let temp = originalMatrix[i][j];
          originalMatrix[i][j] = originalMatrix[m][n];
          originalMatrix[m][n] = temp;
        }
      }
      this.resetScore();
      model.sliding[0].matrix = originalMatrix;
    },

    changeMatrix(row,column){
      let newMatrix = controller.createNewGame(row,column)
      return model.sliding[0].matrix = newMatrix.matrix; 
    },

    addMoves(){
      model.sliding[0].moves ++;
    },

    resetScore(){
      model.sliding[0].moves = 0;
    }
  };
  
  const view = {
    init() {
      this.container = document.getElementById('container');
      this.options = document.getElementById('options');
      this.score = document.getElementById('score');
      this.RenderMatrix = this.newMatrix();
      this.renderButtons();
      this.renderScore();
      this.container.addEventListener('click', e => this.currentItem(e));
      this.options.addEventListener('click', e => this.chooseOption(e));
    },

    newMatrix(row = 5,column =5 ){
      let newMatrix;
      controller.addMatrix(controller.createNewGame(row, column));
      controller.shuffleMatrix();
      return newMatrix = controller.getMatrix();
    },

    currentItem(e){
      let position = {
        x: parseInt(e.target.dataset.x),
        y: parseInt(e.target.dataset.y)
      }
      controller.changePosition(position)
      this.renderScore();
      this.renderButtons();
    },

    chooseOption(e){
      switch(e.target.id){
        case 'shuffle':
          this.shuffleMatrix();
          this.renderScore();
          break;
        case 'matrix-select':
          this.changeMatrix(e.target.value);
          break;
      }
    },

    changeMatrix(e){
      let matrixSize = parseInt(e);
      switch(e){
        case'3':
          this.RenderMatrix = controller.changeMatrix(matrixSize,matrixSize);
          controller.shuffleMatrix();
          this.renderButtons();
          break;
        case'4':
          this.RenderMatrix = controller.changeMatrix(matrixSize,matrixSize);
          controller.shuffleMatrix();
          this.renderButtons();
          break;
        case'5':
          this.RenderMatrix = controller.changeMatrix(matrixSize,matrixSize);
          controller.shuffleMatrix();
          this.renderButtons();
          break;
        case'6':
          this.RenderMatrix = controller.changeMatrix(matrixSize,matrixSize);
          controller.shuffleMatrix();
          this.renderButtons();
          break;
        case'7':
          this.RenderMatrix = controller.changeMatrix(matrixSize,matrixSize);
          controller.shuffleMatrix();
          this.renderButtons();
          break;
      }
    },

    shuffleMatrix(){
      controller.shuffleMatrix();
      this.renderButtons();
    },

    renderButtons(){
      this.button = '';
      for(let i = 0, x = this.RenderMatrix.length; i < x; i++){
        for (let j = 0, z = this.RenderMatrix[j].length; j < z; j++){
          if(this.RenderMatrix[i][j]){
            this.button +=
            `<button class="btn" data-x="${i}" data-y="${j}">${this.RenderMatrix[i][j]}</button>`
          }else
          this.button += `
          <button class="btn zero" data-x="${i}" data-y="${j}">${this.RenderMatrix[i][j]}</button>
          `
        }
      }
      this.container.innerHTML = this.button;
    },

    renderScore(){
      this.score.textContent = `Moves: ${controller.getMoves()}`;
    }

  };
  
  view.init();
  