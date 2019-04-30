window.onload = function() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++)
        buttons[i].setAttribute("onclick", "calculate(this)");
}

function calculate(element) {
    const fstNumber = Number(document.getElementById("firstNumber").value);
    const sndNumber = Number(document.getElementById("secondNumber").value);
    const result = document.getElementById("result");

    switch (element.value) {
        case "+": 
            result.innerHTML = fstNumber + sndNumber; 
            break;
        case "-": 
            result.innerHTML = fstNumber - sndNumber; 
            break;
        case "x": 
            result.innerHTML = fstNumber * sndNumber; 
            break;
        case "/": 
            result.innerHTML = fstNumber / sndNumber; 
            break;
    }
}