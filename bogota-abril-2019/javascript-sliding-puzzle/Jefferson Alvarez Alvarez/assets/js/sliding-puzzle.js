function Puzzle(dimension) {
    this.dimension = dimension;
    this.board = [];

    var numbers = [];
    for(var i = 0; i < dimension*dimension; i++) {
        numbers.push(i);
    }
    numbers = this.shuffleBoard(numbers);
    for(var i = 0; i < dimension; i++) {
        this.board.push([]);
        for(var j = 0; j < dimension; j++) {
            this.board[i].push(numbers[dimension*i+j]);
        }
    }
};

var shuffleBoard = function(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var renderDOM = function() {
    var ul = document.getElementById("sliding-puzzle");
    ul.innerHTML = "";
    for(var i = 0; i < this.board.length; i++) {
        for(var j = 0; j < this.board[i].length; j++) {
            var li = document.createElement("li");
            var width = 100/this.dimension;
            li.setAttribute("style", "width: "+width+"%;");
            if(this.board[i][j] === 0) {
                li.setAttribute("class", "tile empty-tile");
            } else {
                li.setAttribute("class", "tile");
                li.setAttribute("onclick", "puzzle.moveTile("+i+","+j+")");
                li.appendChild(document.createTextNode(this.board[i][j]));
            }
            ul.appendChild(li);
        }
    }
};

var moveTile = function(i, j) {
    if(this.board[i][j+1] != null && this.board[i][j+1] === 0) {
        this.board[i][j+1] = this.board[i][j];
        this.board[i][j] = 0;
    } else if(this.board[i][j-1] != null && this.board[i][j-1] === 0) {
        this.board[i][j-1] = this.board[i][j];
        this.board[i][j] = 0;
    } else if(this.board[i-1] != null && this.board[i-1][j] === 0) {
        this.board[i-1][j] = this.board[i][j];
        this.board[i][j] = 0;
    } else if(this.board[i+1] != null && this.board[i+1][j] === 0) {
        this.board[i+1][j] = this.board[i][j];
        this.board[i][j] = 0;
    }
    this.renderDOM();
    if(this.isDone()) {
        var result = document.getElementById("result");
        result.innerHTML = "Lo lograste, eres el rey de los juegos";
    }
};

var isDone = function() {
    var isDone = true;
    for(var i = 0; i < this.board.length; i++) {
        for(var j = 0; j < this.board[i].length; j++) {
            if(i === this.board.length-1 && j === this.board[i].length-1) {
                if(this.board[i][j] !== 0) {
                    return false;
                }
            } else {
                if(this.board[i][j] !== this.dimension*i+j+1) {
                    return false;
                }
            }
        }
    }
    return isDone;
};

Puzzle.prototype.renderDOM = renderDOM;
Puzzle.prototype.shuffleBoard = shuffleBoard;
Puzzle.prototype.moveTile = moveTile;
Puzzle.prototype.isDone = isDone;

var createPuzzle = function() {
    var dimension = document.getElementById("dimensionSelect");
    puzzle = new Puzzle(1*dimension.value);
    puzzle.renderDOM();
};

var puzzle = new Puzzle(3);
puzzle.renderDOM();
