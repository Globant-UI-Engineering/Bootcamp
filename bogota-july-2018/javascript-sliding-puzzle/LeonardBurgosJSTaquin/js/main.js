
var ul;
var matrix = new Array(3);

for(var i = 0; i < 3; i++){
    matrix[i] = new Array(3);
}

initMatrix();
createNewGame();

function initMatrix(){
    var aux = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matrix[i][j] = aux;
            aux++;
        }
    }
}

function randomizeMatrix(){
    var changes = 1;
    while(changes > 0){
        var coordinates = findIdentifier(9);
        for (var i = 1; i < 8; i++){
            var coordinates2 = findIdentifier(i);
            if((Math.abs(coordinates2.x - coordinates.x) + Math.abs(coordinates2.y - coordinates.x)) <= 1){
                matrix[coordinates.x][coordinates.y] = i;
                matrix[coordinates2.x][coordinates2.y] = 9;
                coordinates = findIdentifier(9);
            }
        }

        changes --;
    }
}

function clearList(){
    ul = document.querySelector(".Taquin_container");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

function paintTaquin(){
    clearList();
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var li = document.createElement("li");
            matrix[i][j] === 9 ? li.setAttribute("class", "Taquin_element blank") : li.setAttribute("class", "Taquin_element");
            li.setAttribute("id", matrix[i][j]);
            li.innerText = matrix[i][j];
            ul.appendChild(li);
        }
    }
}

function createNewGame(){
    var new_game_button = document.querySelector(".btn.new-game");
    new_game_button.addEventListener("click", function(){
        new_game_button.innerText = "Want to try another one? Press here!!";
        randomizeMatrix();
        paintTaquin();
        moveTaquin();
    });
}

function moveTaquin(){
    var li = document.querySelectorAll(".Taquin_element");
    li.forEach(function (item){
        item.addEventListener("click", function(){
            var identifier = item.id;
            var positions = findIdentifier(identifier);
            var blank_position = findIdentifier(9);
            if ((Math.abs(positions.x - blank_position.x) + Math.abs(positions.y - blank_position.y)) <= 1){
                matrix[positions.x][positions.y] = 9;
                matrix[blank_position.x][blank_position.y] = parseInt(item.id);
                paintTaquin();
                moveTaquin();
            }
            var taquin_distance = calculateDistance();
            console.log(taquin_distance);
            if(taquin_distance === 0){
                var button = document.querySelector(".new-game");
                button.innerText = "Congratulations!!, you solved it!. Try another one";
            }
        });
    });
}

function calculateDistance(){
    var dist = 0;
    var identifier = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var coordinates = findIdentifier(identifier);
            dist += Math.sqrt(Math.pow(coordinates.x - i,2) + Math.pow(coordinates.y - j,2));
            identifier ++;  
        }
    }
    return dist;
}

function findIdentifier(identifier){
    var coordinates = new Object();
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(matrix[i][j] == identifier){
                coordinates.x = i;
                coordinates.y = j;
                return coordinates;
            }
        }
    }
    return coordinates;
}
