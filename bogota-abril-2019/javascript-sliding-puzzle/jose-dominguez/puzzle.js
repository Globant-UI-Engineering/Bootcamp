const NUM_SQUARES = 15;

class Puzzle {
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    constructor() {
        this.map = [];
        for (let i = 0; i < NUM_SQUARES; i++) {
            this.map.push(i);
        }
        this.shuffle(this.map);

        this.map.push(NUM_SQUARES);

        this.draw();
    }

    draw() {
        const puzzleContainer = document.querySelector('.puzzle');
        puzzleContainer.innerHTML = "";

        for (let id of this.map) {
            const element = document.createElement('button');

            if (id == NUM_SQUARES) {
                element.className = "empty";
            } else {
                element.innerText = id;
            }
            element.addEventListener("click", () => {
                this.handleClick(id);
            });
            puzzleContainer.appendChild(element);
        }
    }

    one2Two(i) {
        return { x: Math.floor(i / 4), y: i % 4 };
    }

    getMapPosition(id) {
        return this.map.indexOf(id);
    }

    getCoordsById(id) {
        return this.one2Two(this.getMapPosition(id));
    }

    getFreeSpaceCoords() {
        return this.getCoordsById(NUM_SQUARES);
    }

    canSwap(id) {
        const firstCoords = this.getCoordsById(id);
        const secondCoords = this.getFreeSpaceCoords();
        return (
            Math.abs(firstCoords.x - secondCoords.x) == 1 && Math.abs(firstCoords.y - secondCoords.y) == 0
            ||
            Math.abs(firstCoords.x - secondCoords.x) == 0 && Math.abs(firstCoords.y - secondCoords.y) == 1
        );
    }

    swap(id) {
        const first = this.getMapPosition(id);
        const second = this.getMapPosition(NUM_SQUARES);
        const temp = this.map[first];
        this.map[first] = this.map[second];
        this.map[second] = temp;

        this.draw();
    }

    handleClick(id) {
        if (this.canSwap(id)) {
            this.swap(id);
        }
    }
}

var game = new Puzzle();

const restartButton = document.querySelector('#restart');
restartButton.addEventListener("click", evt => { game = new Puzzle(); });
