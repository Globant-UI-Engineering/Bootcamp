const tam = 4;

window.onload = function() {
    const slidingPuzzle = document.getElementById("sliding-puzzle");
    const maxNum = Math.pow(tam, 2);
    let numbers = getNumbers(maxNum);

    for (let i = 0; i < maxNum; i++) {
        if (numbers[i] == maxNum)
            slidingPuzzle.appendChild(createButton(numbers[i], "blank"));
        else
            slidingPuzzle.appendChild(createButton(numbers[i]));

        if ((i + 1) % tam == 0 && (i + 1) < maxNum) slidingPuzzle.appendChild(document.createElement("br"));
    }

    document.getElementById("shuffle-button").addEventListener("click", function() {
        let interval = setInterval(shuffle, 70);
        setTimeout(function(){clearInterval(interval)}, 10000);
    });
}

function getNumbers(maxNum) {
    let dummyArray = [];
    for (let i = 1; i <= maxNum; i++)
        dummyArray.push(i);
    return dummyArray;
}

function createButton(value, className = "") {
    let dummyButton = document.createElement("button");
    dummyButton.type = "button";
    dummyButton.classList.add("sliding-button");
    if (className != "") dummyButton.classList.add("blank");
    dummyButton.innerHTML = value;
    dummyButton.addEventListener("click", function() {move(this);});
    dummyButton.style.width = 500 / tam  + "px";
    dummyButton.style.height = dummyButton.style.width;
    return dummyButton;
}

function move(element) {
    let buttons = document.getElementsByClassName("sliding-button");
    let {blankButton, neighbors} = getNeighbors(buttons);

    neighbors.forEach((neighbor) => {
        if (element.innerHTML == neighbor) {
            element.className = "sliding-button blank";
            blankButton.innerHTML = element.innerHTML;
            blankButton.classList.remove("blank");
        }
    });
}

function getNeighbors(buttons) {
    let index;
    let dummyNeighbors = [];

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("blank")) index = i;
    }

    if (index % tam != 0)
        dummyNeighbors.push(buttons[index - 1].innerHTML);

    if (index >= tam)
        dummyNeighbors.push(buttons[index - tam].innerHTML);

    if ((index + 1) % tam != 0)
        dummyNeighbors.push(buttons[index + 1].innerHTML);

    if (index + tam <= Math.pow(tam, 2) - 1)
        dummyNeighbors.push(buttons[index + tam].innerHTML);

    return {
        blankButton: buttons[index],
        neighbors: dummyNeighbors
    };
}

function shuffle() {
    let buttons = document.getElementsByClassName("sliding-button");
    let {blankButton, neighbors} = getNeighbors(buttons);
    let index = Math.round(Math.random() * (neighbors.length - 1));

    buttons = Array.from(buttons);
    buttons.forEach((button) => {
        if (button.innerHTML == neighbors[index]) {
            button.className = "sliding-button blank";
            blankButton.innerHTML = button.innerHTML;
            blankButton.classList.remove("blank");
        }
    });
}
