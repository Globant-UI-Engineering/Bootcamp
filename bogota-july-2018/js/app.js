/* ======= Model ======= */

let model = {
    number1:0,
    number2:0
}

/* ======= Controller ======= */

let controller =  {

    init(){
        view.init();
    },

    setNumber(modelNumber, value){
        model[modelNumber] = value ; 
    },

    getModel(){
        return model;
    },

    reset(){
        model = {
            number1:0,
            number2:0
        }
    },

    getNumber(number){
       return model[number];
    },

    sum(numb1, numb2){
        return numb1 + numb2;
    },

    rest(numb1, numb2){
        return numb1 - numb2;
    },

    multiplication(numb1, numb2){
        return numb1 * numb2;
    },

    division(numb1, numb2){
        return parseFloat(numb1 / numb2);
    },

    percentage(numb1, numb2){
        return Math.floor((numb2 /numb1) * 100);
    },

    changeSymbol(modelNumber,value){
        model[modelNumber] = value;
    }
}

/* ======= View ======= */

let view = {
    init(){
        this.container = document.getElementById("container");
        this.display = document.getElementById("display");
        this.result = document.getElementById("result");
        this.changeValue = document.getElementById("changeValue");
        this.clear = document.getElementById("clear");
        this.renderValue();
    },
    currentOperation(numb1, numb2, typeOfOperation){
        switch(typeOfOperation){
            case '+':
                return controller.sum(numb1,numb2);
            case '-':
                return controller.rest(numb1,numb2);
            case '/':
                return controller.division(numb1,numb2);   
            case 'x':
                return controller.multiplication(numb1,numb2);
            case '%':
                return controller.percentage(numb1,numb2);
        }
    },
    renderValue(){
        let state = true;
        let symbol = true;
        let typeOfOperation;
        this.display.textContent = controller.getNumber('number1');
        let newNumber = '';
        this.container.addEventListener('click',(e) =>{
            switch(e.target.textContent){
                case '+':
                case '-':
                case 'x':
                case '/':
                case '%':
                    state = !state;
                    typeOfOperation = e.target.textContent;
                    newNumber ="";
                    break;
                case '=':
                    this.display.textContent = this.currentOperation(controller.getNumber('number1'),controller.getNumber('number2'),typeOfOperation)
                    controller.setNumber('number1',parseInt(this.display.textContent));
                    state = !state;
                    break;
                case 'AC':
                    controller.reset();
                    this.display.textContent = '0';
                    break;
                case '+/-':
                    symbol = !symbol;
                    symbol ? controller.changeSymbol('number1', Math.abs(parseInt(this.display.textContent))):controller.changeSymbol('number1', -Math.abs(parseInt(this.display.textContent)));
                    this.display.textContent = controller.getNumber('number1');
                    break;
                break;
                default:
                    newNumber += (e.target.textContent);
                    state ? controller.setNumber('number1',parseInt(newNumber)):controller.setNumber('number2', parseInt(newNumber));
                    this.display.textContent = newNumber;
                    break;
            }
            console.log(controller.getNumber());
            console.log(controller.getModel());
        })

    }
}

controller.init();

