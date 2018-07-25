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
        return numb1 / numb2;
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
    currentOperation(){

    }
    renderValue(){
        this.container.addEventListener('click'(e) =>{
            this.display.textContent += e.target.textContent; 
        })
    },

    getvalue(){
        this.display.textContent = con
    }
}

controller.init();