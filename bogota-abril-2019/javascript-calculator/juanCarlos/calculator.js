let currentNumber = 0;
let ansNumber = 0;
let currentOp = ""

numberButtons = document.getElementsByClassName('btn-number')

// Number buttons listener
for (let i = 0; i < numberButtons.length; i++) {
    const number = numberButtons[i]
    number.addEventListener('click', ({target}) => {
        currentNumber = currentNumber * 10 + parseFloat(target.value)
        display()
    })
}

// Operations listeners
function updateOp(newOp) {
    if (currentOp && ansNumber && currentNumber)
        execOp()
    else 
        ansNumber = currentNumber

    currentOp = newOp
    currentNumber = 0

    display()
}

function execOp() {
    switch(currentOp){
        case '+': ansNumber += currentNumber; break;
        case '-': ansNumber -= currentNumber; break;
        case '/': ansNumber /= currentNumber; break;
        case '*': ansNumber *= currentNumber; break;
    }
}

document.getElementById('btn-add').
    addEventListener('click', _ => updateOp('+'))

document.getElementById('btn-substract').
    addEventListener('click', _ => updateOp('-'))

document.getElementById('btn-multiply').
    addEventListener('click', _ => updateOp('*'))

document.getElementById('btn-divide').
    addEventListener('click', _ => updateOp('/'))


// Erase btn
document.getElementById('btn-erase').addEventListener('click', _ => {
    currentNumber = Math.floor(currentNumber/10)
    display()
})

// Refresh/Draw Display
function display() {
    let displayA = document.getElementById("display-a");
    let displayB = document.getElementById("display-b");

    displayA.innerHTML = `${ansNumber} ${currentOp}`;
    displayB.innerHTML = currentNumber;
}