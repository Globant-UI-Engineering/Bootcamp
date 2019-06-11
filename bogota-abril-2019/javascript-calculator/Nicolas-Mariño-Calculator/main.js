
// Class of the calculator

class Calculator {
    constructor(firstResultTextElement, lastResultTextElement) {
        this.firstResultTextElement = firstResultTextElement
        this.lastResultTextElement = lastResultTextElement
        this.clear()
    }

    clear() {
        this.firstResult = ''
        this.lastResult = ''
        this.operation = undefined
    }
    
    delete() {
        this.firstResult = this.firstResult.toString().slice(0,-1)
    }

    displayNumber(number) {
        if (number === '.' && this.firstResult.includes('.')) return
        this.firstResult = this.firstResult.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.firstResult === "") return
        if (this.lastResult !== ""){
            this.operate()
        }
        this.operation = operation
        this.lastResult = this.firstResult
        this.firstResult = ""
    }
    
    operate() {
        let operationCalc 
        const last = parseFloat(this.lastResult)
        const first = parseFloat(this.firstResult)
        if (isNaN(last) || isNaN(first)) return
        switch (this.operation) {
            case '+':
                operationCalc = last + first
                break 
            case '-':
                operationCalc = last - first
                break 
            case '÷':
                operationCalc = last / first
                break
            case '*':
                operationCalc = last * first
                break
            case 'mod':
                operationCalc = last % first
                break
            case 'bn':
                operationCalc = last ** first
                break    
            default:
            return            
                
        }
        this.firstResult = operationCalc
        this.operation = undefined
        this.lastResult = ""
    }

    updateDisplay() {
        this.firstResultTextElement.innerText = this.firstResult
        if (this.operation != null) {
            
            this.lastResultTextElement.innerText = this.lastResult

        }
           }
}


//Input operations and varialbes


const numButtons = document.querySelectorAll('[number]')
const opButtons = document.querySelectorAll('[operation]')
const equalsButton = document.querySelector('[equals]')
const deleteButton = document.querySelector('[delete]')
const AllClearButton = document.querySelector('[all-clear]')
const firstResultTextElement = document.querySelector('[first-result]')
const lastResultTextElement = document.querySelector('[last-result]')

const calculator = new Calculator(firstResultTextElement,lastResultTextElement)



//Interactions with the DOM


numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.displayNumber(button.innerText)
        calculator.updateDisplay()
    })

})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

})
equalsButton.addEventListener('click', button => {
    calculator.operate() 
    calculator.updateDisplay() 
})
AllClearButton.addEventListener('click', button => {
    calculator.clear() 
    calculator.updateDisplay() 
})
deleteButton.addEventListener('click', button => {
    calculator.delete() 
    calculator.updateDisplay() 
})
/*numButtons.forEach(button => {
    button.addEventListener('keydown', () => {
        Calculator.displayNumber(button.innerText)
        Calculator.updateDisplay
    })

})
window.addEventListener('keydown', function(e) {

    // Here we selected "keyCode" because keyDown has a parameter called keyCode that says the number that identify each keyboard button
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //stop the funciton from running all together
 
    key.classList.add('playing');
});*/