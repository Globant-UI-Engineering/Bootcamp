  const model = {
    sliding: []
  };
  
  const controller = {
    addMatrix(matrix) {
      model.sliding.push(matrix);
    },
  
    createNewMatrix(row, column) {
      
      class Matrix {
        constructor(row, column) {
          this.counter = 0;
          (this.matrix = new Array(row)), (this.moves = 0), (this.score = 0);
          for (let i = 0, x = this.matrix.length; i < x; i++) {
            this.matrix[i] = new Array(row);
            for (let j = 0, z = this.matrix[i].length; j < z; j++) {
              this.counter ++;
              this.counter === row * column
                ? (this.matrix[i][j] = "")
                : (this.matrix[i][j] = this.counter);
            }
          }
        }
      }
      return new Matrix(row,column);
    },

    getMatrix(){
      return model.sliding;
    }

  };
  
  const view = {
    init() {
      this.container = document.getElementById("container");
      this.row = 5;
      this.column = 5
      this.matrix = controller.addMatrix(controller.createNewMatrix(this.row, this.column));
      this.RenderMatrix = controller.getMatrix();
      this.renderMatrix(this.RenderMatrix);
      console.log(this.RenderMatrix[0].matrix);
    },

    renderMatrix(RenderMatrix){
      this.button = "";
      for(let i = 0, x = this.RenderMatrix[0].matrix.length; i < x; i++){
        for (let j = 0, z = this.RenderMatrix[0].matrix[j].length; j < z; j++){
          this.button += `
          <button class="btn">${this.RenderMatrix[0].matrix[i][j]}</button>
          `
        }
      }
      this.container.innerHTML = this.button;
      console.log(this.button);
    }

  };
  
  view.init();
  