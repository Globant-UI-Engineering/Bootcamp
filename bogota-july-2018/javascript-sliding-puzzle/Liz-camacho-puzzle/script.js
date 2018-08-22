let myBoxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '-'];
myBoxes = myBoxes.sort(function() { return 0.8 - Math.random(); });
const FINALARRAY = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '-'];

function buildlHtml() {
    document.getElementById('container').innerHTML = '';
    //console.log('Cajas orden inicial', myBoxes);
    myBoxes.forEach(element => {
        let div = document.createElement('div');
        let text = document.createTextNode(element);
        div.appendChild(text);
        div.className = 'numbers';
        document.getElementById('container').appendChild(div);
        if (element == '-') {
            div.className = "space numbers";
        }
    });
    moveCards();
}

function swapArrayElements(myArray, pos1, pos2) {
    myArray.splice(pos2, 1, myArray.splice(pos1, 1, myArray[pos2])[0]);
    return myArray;
}

function moveCards() {
    const squares = document.querySelectorAll('#container .numbers');
    let hyphen = myBoxes.indexOf('-');
    let movementArray = [hyphen - 1, hyphen + 1, hyphen + 4, hyphen - 4]; // Allowed movements
    //console.log(movementArray);
    //console.log(hyphen, ' Posicion-guion');
    movementArray.forEach(function(mov, index) {
        if ((hyphen + 1) % 4 == 0) {
            if (mov % 4 == 0) {
                aux = movementArray.indexOf(mov);
                movementArray.splice(index, aux);
            }
        }
        if ((hyphen) % 4 == 0) {
            if ((mov + 1) % 4 == 0) {
                aux = movementArray.indexOf(mov);
                movementArray.splice(index, aux + 1);
            }
        }
    });

    let partstoMove = myBoxes.filter(function(square, index) { // Elementos finales a agregar click
        return movementArray.includes(index);
    });

    //console.log('Posiciones movibles', partstoMove);

    partstoMove.map(function(part) {
        let indexofSquares = myBoxes.indexOf(part);

        squares[indexofSquares].addEventListener('click', function(event) {
            let index = myBoxes.indexOf(part);
            myBoxex = swapArrayElements(myBoxes, index, hyphen);

            buildlHtml();
        });
    });

    (myBoxes.toString() == FINALARRAY.toString()) ? alert('You won!'): '';
}

function solved() {
    myBoxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '-', '15'];
    buildlHtml();
}

buildlHtml();