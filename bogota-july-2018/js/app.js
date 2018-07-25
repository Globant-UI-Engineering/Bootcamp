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
        return Math.floor((numb1 /numb2) * 100);
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
        let state = false;
        let typeOfOperation;
        this.container.addEventListener('click',(e) =>{
            
            switch(e.target.textContent){
                case '+':
                case '-':
                case 'x':
                case '/':
                case '%':
                    typeOfOperation = e.target.textContent;
                    break;
                case '+/-':
                    break;
                case '=':
                    this.display.textContent = this.currentOperation(parseInt(controller.getNumber('number1')),parseInt(controller.getNumber('number1')),typeOfOperation);
                    console.log(this.currentOperation(parseInt(controller.getNumber('number1')),parseInt(controller.getNumber('number1')),typeOfOperation));
                    break;
                case 'AC':
                    this.display.textContent = ``;
                    break;
                default:
                    state = !state;
                    state ? controller.setNumber('number1', e.target.textContent):controller.setNumber('number2', e.target.textContent);
                    this.display.textContent += e.target.textContent;    
                    break;
            }
        })
    }
}

controller.init();

