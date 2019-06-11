//Función que realiza una función aletoria de cambio para cada uno de los cuadros del juego
function randomFrames() {

    for (let row = 1; row <= 4; row++) {
        for (let column = 1; column <= 4; column++) {

            //Ejemplo utilizando Destructuring
            const [max, min] = [5, 1];

            //Ejemplo utilizando Closures
            function getRandomArbitrary() {
                return Math.floor(Math.random() * (max - min) + min);
            }

            //Ejemplo utilizando map
            let positions = [1, 2];
            let randomResults = positions.map(function() {
                return getRandomArbitrary();
            });

            //Ejemplo utilizando Template Literals
            swapFrames(`frame${row}${column}`, `frame${randomResults[0]}${randomResults[1]}`);
        }
    }
}

//Función que intercambia los cuadros
function swapFrames(frame1, frame2) {
    //Se declaran las variables que van a ser intercambiadas
    let box1 = document.getElementById(frame1);
    let box2 = document.getElementById(frame2);
    //Se declaran las variables que serán almacenadas temporalmente
    let tempClassName = box1.className;
    let tempTextContent = box1.textContent;
    let tempName = box1.name;

    //Se intercambian los valores entre la caja 2 y la 1
    box1.className = box2.className;
    box1.textContent = box2.textContent;
    box1.name = box2.name;

    //Se intercambian los valores entre la caja 2 y los temporales
    box2.className = tempClassName;
    box2.textContent = tempTextContent;
    box2.name = tempName;

}

function moveFrame(row, column) {
    let frame_position = `frame${row}${column}`;
    let frame = document.getElementById(frame_position).className;
    if (frame != "white_frame") {
        //Revisando si el cuadro blanco está arriba
        if (row > 1) {
            let frame2_position = `frame${row-1}${column}`;
            let frame2 = document.getElementById(frame2_position).className;
            if (frame2 == "white_frame") {
                swapFrames(frame_position, frame2_position);
                return;
            }
        }
        //Revisando si el cuadro blanco está abajo
        if (row < 4) {
            let frame2_position = `frame${row+1}${column}`;
            let frame2 = document.getElementById(frame2_position).className;
            if (frame2 == "white_frame") {
                swapFrames(frame_position, frame2_position);
                return;
            }
        }
        //Revisando si el cuadro blanco está a la derecha
        if (column < 4) {
            let frame2_position = `frame${row}${column+1}`;
            let frame2 = document.getElementById(frame2_position).className;
            if (frame2 == "white_frame") {
                swapFrames(frame_position, frame2_position);
                return;
            }
        }
        //Revisando si el cuadro blanco está a la izquierda
        if (column > 1) {
            let frame2_position = `frame${row}${column-1}`;
            let frame2 = document.getElementById(frame2_position).className;
            if (frame2 == "white_frame") {
                swapFrames(frame_position, frame2_position);
                return;
            }
        }
    }
}