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

    percentage(numb1, per){
        return parseFloat((numb1 /100) * per);
    },
    
    changeSymbol(modelNumber, symbol){
        let change = symbol ? Math.abs(model[modelNumber]): -Math.abs(model[modelNumber]);
        model[modelNumber] = change;
        return change;     
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

    currentOperation(numb1, numb2, typeOfOperation = 0 ){
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
            case 0:
                return 0;
        }
    },
    
    renderValue(){
        let state = true;
        let typeOfOperation;
        let changeSymbol = true;
        this.display.textContent = controller.getNumber('number1');
        let newNumber = '';
        this.container.addEventListener('click',(e) =>{
            changeSymbol = !changeSymbol;
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
                    break;
                case 'AC':
                    controller.reset();
                    state = true;
                    this.display.textContent = '0';
                    newNumber = ''
                    break;
                case '+/-':
                    state ? controller.changeSymbol('number1',changeSymbol): controller.changeSymbol('number2',changeSymbol);
                    state ? this.display.textContent = controller.getNumber('number1'): this.display.textContent = controller.getNumber('number2');
                    break;
                default:
                    newNumber += (e.target.textContent);
                    state ? controller.setNumber('number1',parseInt(newNumber)):controller.setNumber('number2', parseInt(newNumber));
                    this.display.textContent = newNumber;
                    break;
            }
        })
    }
}

controller.init();

