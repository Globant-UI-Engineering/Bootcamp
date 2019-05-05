let entry = "";
let Ans = 0;
let isAnswered = false;

let buttons = document.querySelectorAll("button");
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

let disableButtons = (isDisable) => {
    if (isDisable) {
        entry = "";
        clearButton.innerHTML = "AC";
        clearButton.setAttribute("aria-label", "Limpiar todo");
        buttons.forEach(btn => {
            if (btn.innerHTML !== "AC") {
                btn.setAttribute("disabled", true);
            }
        });
    } else {
        buttons.forEach(btn => {
            if (btn.innerHTML !== "AC") {
                btn.removeAttribute("disabled");
            }
        });
    }
}

let screenToAdd = () => !isAnswered && entry.length > 0;

screenChange();

Array.from(buttons).forEach(btn => {
    btn.addEventListener("click", (event) => {
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
                disableButtons(false);
                break;
            case 'CE':
                entry = "";
                break;
            case 'Ans':
                entry = screenToAdd() ? entry + "Ans" : "Ans";
                isAnswered = false;
                break;
            case '=':
                Ans = Ans.operate(entry);
                isAnswered = true;
                if (Ans === 'Error Sintáctico')
                    disableButtons(true);
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