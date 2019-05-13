var gameBoxes = document.querySelectorAll('div');
for (let i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].addEventListener("click", clickedBox);
}
function buttonNameToggle() {
    let button = document.getElementById("gameButton");
    if (button.innerHTML === "Start") {
        button.innerHTML = "Reset";
        relocateBoxes();
    } else if (button.innerHTML === "Reset") {
        button.innerHTML = "Start";
        location.reload();
    }
}

function relocateBoxes() {
    let randomNumbers = []
    let divChildElements = [];
    while (randomNumbers.length < 16) {
        let r = Math.floor(Math.random() * 16);
        if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    let randomStrings = randomNumbers.map((num) => { return num.toString(); })
    let findingZeroIndex = randomStrings.indexOf("0");
    let zeroString = randomStrings.splice(findingZeroIndex, 1);
    randomNumbers.push(zeroString);
    for (let i = 1; i <= 16; i++) {

        let elementsToPush = document.querySelector(`.container div:nth-child(${i})`);
        divChildElements.push(elementsToPush);
    }
    for (let i = 0; i < randomStrings.length; i++) {
        divChildElements[i].innerHTML = randomStrings[i];
    }
}

function clickedBox(e) {
    let clickedIndex = Array.from(e.target.parentNode.children).indexOf(e.target)
    let siblingAfter = clickedIndex + 2;
    let siblingBefore = clickedIndex;
    let siblingAbove = clickedIndex - 3;
    let siblingBelow = clickedIndex + 5;
    let nextIndex = siblingAfter.toString();
    let previousIndex = siblingBefore.toString();
    let abovIndex = siblingAbove.toString();
    let belIndex = siblingBelow.toString();
    if (clickedIndex == 15) {
        lastIndexElement();
    } else if (clickedIndex > 11 && clickedIndex < 15) {
        rangeIndexElementsBottom();
    } else if (clickedIndex == 0) {
        firstIndex();
    } else if (clickedIndex > 3 && clickedIndex < 12) {
        remainingIndexElem();
    } else if (clickedIndex > 0 && clickedIndex < 4) {
        rangeIndexElementsTop();
    }

    function remainingIndexElem() {
        let up = document.querySelector(`.container div:nth-child(${abovIndex})`);
        let down = document.querySelector(`.container div:nth-child(${belIndex})`);
        let next = document.querySelector(`.container div:nth-child(${nextIndex})`);
        let previous = document.querySelector(`.container div:nth-child(${previousIndex})`);
        if (down.innerHTML == 0) {
            swapElements(down, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (up.innerHTML == 0) {
            swapElements(up, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (previous.innerHTML == 0) {
            swapElements(previous, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (next.innerHTML == 0) {
            swapElements(next, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        }

    }

    function firstIndex() {
        let down = document.querySelector(`.container div:nth-child(${belIndex})`);
        let next = document.querySelector(`.container div:nth-child(${nextIndex})`);
        if (down.innerHTML == 0) {
            swapElements(down, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (next.innerHTML == 0) {
            swapElements(next, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        }
    }

    function rangeIndexElementsBottom() {
        let up = document.querySelector(`.container div:nth-child(${abovIndex})`);
        let next = document.querySelector(`.container div:nth-child(${nextIndex})`);
        let previous = document.querySelector(`.container div:nth-child(${previousIndex})`);
        if (up.innerHTML == 0) {
            swapElements(up, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            };
        } else if (next.innerHTML == 0) {
            swapElements(next, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (previous.innerHTML == 0) {
            swapElements(previous, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        }
    }

    function rangeIndexElementsTop() {
        let down = document.querySelector(`.container div:nth-child(${belIndex})`);
        let next = document.querySelector(`.container div:nth-child(${nextIndex})`);
        let previous = document.querySelector(`.container div:nth-child(${previousIndex})`);
        if (down.innerHTML == 0) {
            swapElements(down, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (next.innerHTML == 0) {
            swapElements(next, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (previous.innerHTML == 0) {
            swapElements(previous, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        }
    }

    function lastIndexElement() {
        let up = document.querySelector(`.container div:nth-child(${abovIndex})`);
        let previous = document.querySelector(`.container div:nth-child(${previousIndex})`);
        if (up.innerHTML == 0) {
            swapElements(up, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        } else if (previous.innerHTML == 0) {
            swapElements(previous, e.target);
            function swapElements(obj1, obj2) {
                let temp = document.createElement("div");
                obj1.parentNode.insertBefore(temp, obj1);
                obj2.parentNode.insertBefore(obj1, obj2);
                temp.parentNode.insertBefore(obj2, temp);
                temp.parentNode.removeChild(temp);
            }
        }

    }
}