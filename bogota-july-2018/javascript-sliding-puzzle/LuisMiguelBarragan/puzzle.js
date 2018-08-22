

const puzzle = (function(){
    const container = document.querySelector('.puzzle-container');
    const blank = `<div class="square blank">`;
    let initPuzzle = [[],[],[]];
    let puzzle = [[],[],[]];

    let posx = 2;
    let posy = 2;

    function createPuzzle() {
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                let value = y * 3 + x + 1;
                if(value < 9){
                    let square = `<div class="square"> ${value} </div>`;
                    container.innerHTML += square;
                    puzzle[y][x] = square;
                } else {
                    container.innerHTML += blank;
                    puzzle[y][x] = blank;        
                }
            }
        }
        initPuzzle = JSON.parse(JSON.stringify(puzzle));
    };

    function shufflePuzzle() {
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                let col = Math.floor(Math.random() * 3);
                let row = Math.floor(Math.random() * 3);
                [puzzle[y][x], puzzle[col][row]] = [puzzle[col][row], puzzle[y][x]];
            }
        }
        const pos = findPointer();
        posx = pos.x;
        posy = pos.y;
        
        movePices();
        setPosition();
    };

    function resetPuzzle() {
        shufflePuzzle()
        const winBanner = document.querySelector('.win');
        winBanner.parentNode.removeChild(winBanner);
    }

    function setPosition() {
        const square = document.querySelectorAll('.square');
        var index = 0;
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                if(x == posx && y == posy) {         
                    square[index].style.top = `calc(${y} * 150px)`;
                    square[index].style.left = `calc(${x} * 150px)`;
                }else{
                    square[index].style.top = `calc(${y} * 150px)`;
                    square[index].style.left = `calc(${x} * 150px)`;
                }
                index++;
            }
        }
    };

    function movePices() {
        const squares = document.querySelectorAll('.square');
        for(let square of squares) {
            square.parentNode.removeChild(square)
        }
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                container.innerHTML += puzzle[y][x];
            }
        }
    };

    function findPointer() {
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                if(puzzle[y][x] === blank){      
                    return {y, x}
                }   
            }
        }
    }

    function hasWon() {
        for(let y = 0; y < 3; y++){
            for(let x = 0; x < 3; x++){
                if(puzzle[y][x] != initPuzzle[y][x]){      
                    return false
                }   
            }
        }
        return true;
    };

    function moveUp() {
        if(posy < 2) {
            let square = puzzle[posy+1][posx];
            puzzle[posy][posx] = square;
            posy += 1;
            puzzle[posy][posx] = blank;
            movePices();
            setPosition();
        } 
    };

    function moveDown() {
        if(posy > 0) {
            let square = puzzle[posy-1][posx];
            puzzle[posy][posx] = square;
            posy -= 1;
            puzzle[posy][posx] = blank;
            movePices();
            setPosition();
        } 
    }

    function moveLeft() {
        if(posx > 0) {
            let square = puzzle[posy][posx-1];
            puzzle[posy][posx] = square;
            posx-= 1;
            puzzle[posy][posx] = blank;
            movePices();
            setPosition();
        }
    };

    function moveRight() {
        if(posx < 2) {
            let square = puzzle[posy][posx+1];
            puzzle[posy][posx] = square;
            posx+= 1;
            puzzle[posy][posx] = blank;
            movePices()
            setPosition()
        }
    };

    const moves = ({
        ArrowUp: () => { moveUp() },
        ArrowDown: () => { moveDown() },
        ArrowLeft: () => { moveRight() },
        ArrowRight: () => { moveLeft() },
    });

    document.onkeydown = function(e) {
        let key = e.key;
        if (key == 'ArrowUp' || key == 'ArrowDown' || key == 'ArrowLeft' || key == 'ArrowRight' ) {
            moves[key]();
        } 
        if(hasWon()) {
            container.innerHTML += '<span class="win">Win</span>';
        }
    };
 
    document.getElementById('btn').addEventListener('click', e => {
        resetPuzzle()
    })

    createPuzzle();
    setPosition();
})()