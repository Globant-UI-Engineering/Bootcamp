let entry = "";
let Ans = 0; // Answer Value
let isAnswered = false;

let buttonGroup = document.querySelectorAll("button");
let entryScreen = document.querySelector("p:first-of-type");
let AnsScreen = document.querySelector("p:last-of-type");
let clearButton = document.querySelector('[aria-label="Limpiar todo"]');

Number.prototype.operate = function(entry) {
    try {
        entry = entry.replace(/[×]/g, "*");
        entry = entry.replace(/[÷]/g, "/");
        if (entry.match(/(\/\*|\/\/)/g)) throw new Error();
        return (entry.length > 0) ? eval(entry) : this.valueOf();
    } catch (error) {
        return 'Error Sintáctico';
    }
}

let screenChange = () => {
    entryScreen.innerHTML = entry;
    AnsScreen.innerHTML = Ans;
    if (entry.length > 0) {
        clearButton.innerHTML = "CE";
        clearButton.setAttribute("aria-label", "Limpiar entrada");
    } else {
        clearButton.innerHTML = "AC";
        clearButton.setAttribute("aria-label", "Limpiar todo");
    }
}

let disablebuttonGroup = (isDisable) => {
    if (isDisable) {
        entry = "";
        clearButton.innerHTML = "AC";
        clearButton.setAttribute("aria-label", "Limpiar todo");
        buttonGroup.forEach(button => {
            if (button.innerHTML !== "AC") {
                button.setAttribute("disabled", true);
            }
        });
    } else {
        buttonGroup.forEach(button => {
            if (button.innerHTML !== "AC") {
                button.removeAttribute("disabled");
            }
        });
    }
}

let screenToAdd = () => !isAnswered && entry.length > 0;

screenChange();

Array.from(buttonGroup).forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonTxt = event.target.textContent;
        switch (buttonTxt) {
            case '🡐':
                if (entry.length > 0)
                    entry = entry.slice(0, entry.length - 1);
                isAnswered = false;
                break;
            case '+/-':
                Ans = -(Ans);
                break;
            case 'AC':
                entry = "";
                Ans = 0;
                disablebuttonGroup(false);
                break;
            case 'CE':
                entry = "";
                break;
            case 'Ans':
                entry = screenToAdd() ? entry + "Ans" : "Ans";
                isAnswered = false;
                break;
            case '+':
                entry = screenToAdd() ? entry + buttonTxt : "Ans" + buttonTxt;
                isAnswered = false;
                break;
            case '-':
                entry = screenToAdd() ? entry + buttonTxt : "Ans" + buttonTxt;
                isAnswered = false;
                break;
            case '×':
                entry = screenToAdd() ? entry + buttonTxt : "Ans" + buttonTxt;
                isAnswered = false;
                break;
            case '÷':
                entry = screenToAdd() ? entry + buttonTxt : "Ans" + buttonTxt;
                isAnswered = false;
                break;
            case '=':
                Ans = Ans.operate(entry);
                isAnswered = true;
                if (Ans === 'Error Sintáctico')
                    disablebuttonGroup(true);
                else
                    Ans = +Ans.toFixed(12);
                break;
            default:
                entry = screenToAdd() ? entry + buttonTxt : buttonTxt;
                isAnswered = false;
                break;
        }
        screenChange();
    })
});