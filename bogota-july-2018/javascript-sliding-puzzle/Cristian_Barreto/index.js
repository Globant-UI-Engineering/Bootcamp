document.addEventListener("DOMContentLoaded", game);

function game() {

    const parentX = document.querySelector(".sliding-puzzle").clientHeight;
    const baseDistance = 34.5;
    const posibleMovements = {
        9: [6, 8],
        8: [5, 7, 9],
        7: [4, 8],
        6: [3, 5, 9],
        5: [2, 4, 6, 8],
        4: [1, 5, 7],
        3: [2, 6],
        2: [1, 3, 5],
        1: [2, 4],
    };

    let tileMap = {
        1: {
            tileNumber: 1,
            position: 1,
            top: 0,
            left: 0
        },
        2: {
            tileNumber: 2,
            position: 2,
            top: 0,
            left: baseDistance * 1
        },
        3: {
            tileNumber: 3,
            position: 3,
            top: 0,
            left: baseDistance * 2
        },
        4: {
            tileNumber: 4,
            position: 4,
            top: baseDistance,
            left: 0
        },
        5: {
            tileNumber: 5,
            position: 5,
            top: baseDistance,
            left: baseDistance
        },
        6: {
            tileNumber: 6,
            position: 6,
            top: baseDistance,
            left: baseDistance * 2
        },
        7: {
            tileNumber: 7,
            position: 7,
            top: baseDistance * 2,
            left: 0
        },
        8: {
            tileNumber: 8,
            position: 8,
            top: baseDistance * 2,
            left: baseDistance
        },
        empty: {
            position: 9,
            top: baseDistance * 2,
            left: baseDistance * 2
        }
    }
    let history = [];
    let delay = -50;

    const movementMap = (position) => posibleMovements[position];

    const boardTiles = document.querySelectorAll('.tile');
    boardTiles.forEach(tile => {
        tile.addEventListener('click', tileClicked, true);
        delay += 50;

        setTimeout(setup, delay, tile);

    });

    function recolorTile(tile) {
        const tileId = tile.innerHTML;

        if (tileId == tileMap[tileId].position) tile.classList.remove("error");
        else tile.classList.add("error");

    }

    function tileMovable(tileNumber) {
        const selectedTile = tileMap[tileNumber];
        const movableTiles = movementMap(tileMap.empty.position);

        return movableTiles.includes(selectedTile.position);
    }

    function setup(tile) {
        const tileId = tile.innerHTML;

        const xMovement = parentX * (tileMap[tileId].left / 100);
        const yMovement = parentX * (tileMap[tileId].top / 100);
        const translateString = `translateX( ${ xMovement }px) translateY( ${ yMovement }px)`;

        tile.style.webkitTransform = translateString;
        recolorTile(tile, tileId);
    }

    function checkSolution() {
        if (tileMap.empty.position !== 9) return false;

        for (let key in tileMap) {
            if ((key != 1) && (key != "empty")) {
                if (tileMap[key].position < tileMap[key - 1].position) return false;
            }
        }

        history = [];
        return true;
    }

    function tileClicked(event) {
        moveTile(event.target);

        if (checkSolution()) alert("You win!");
    }

    function moveTile(tile, shuffleMove = false) {

        const tileNumber = tile.innerHTML;

        if (!tileMovable(tileNumber) && !shuffleMove) {
            alert("This tile can't be moved");
            return;
        }

        const {
            top,
            left
        } = tileMap.empty;

        const xMovement = parentX * (left / 100);
        const yMovement = parentX * (top / 100);
        tile.style.webkitTransform = `translateX(${xMovement}px) translateY(${yMovement}px)`;

        [tileMap[tileNumber], tileMap.empty] = [tileMap.empty, tileMap[tileNumber]];

        recolorTile(tile);
    }

    let shuffleTimeouts = [];

    function shuffle() {
        var boardTiles = document.querySelectorAll('.tile');
        var shuffleDelay = 200;
        shuffleLoop();

        var shuffleCounter = 0;
        while (shuffleCounter < 20) {
            shuffleDelay += 200;
            shuffleTimeouts.push(setTimeout(shuffleLoop, shuffleDelay));
            shuffleCounter++;
        }
    }

    let lastShuffled;

    function shuffleLoop() {
        const emptyPosition = tileMap.empty.position;
        const shuffleTiles = movementMap(emptyPosition);
        const tilePosition = shuffleTiles[Math.floor(Math.floor(Math.random() * shuffleTiles.length))];

        let locatedTile;
        let locatedTileNumber;

        for (let i = 1; i <= 8; i++) {
            if (tileMap[i].position == tilePosition) {
                locatedTileNumber = tileMap[i].tileNumber;
                locatedTile = boardTiles[locatedTileNumber - 1];
            }
        }

        if (lastShuffled != locatedTileNumber && locatedTile) {
            moveTile(locatedTile, true);
            lastShuffled = locatedTileNumber;
        } else {
            shuffleLoop();
        }

    }

    setTimeout(shuffle, 1000);

}
