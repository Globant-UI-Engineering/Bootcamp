/* ======= Model ======= */

let model = {
  number1: 0,
  number2: 0
};

/* ======= Controller ======= */

const controller = {
  setNumber(modelNumber, value) {
    model[modelNumber] = value;
  },

  reset() {
    model = {
      number1: 0,
      number2: 0
    };
  },

  getNumber(number) {
    return model[number];
  },

  sum(numb1, numb2) {
    return numb1 + numb2;
  },

  rest(numb1, numb2) {
    return numb1 - numb2;
  },

  multiplication(numb1, numb2) {
    return numb1 * numb2;
  },

  division(numb1, numb2) {
    return parseFloat(numb1 / numb2);
  },

  percentage(numb1, per) {
    return parseFloat((numb1 / 100) * per);
  },

  changeSymbol(modelNumber, symbol) {
    const change = symbol
      ? Math.abs(model[modelNumber])
      : -Math.abs(model[modelNumber]);
    model[modelNumber] = change;
    return change;
  }
};

/* ======= View ======= */

const view = {
  init() {
    this.container = document.getElementById("container");
    this.display = document.getElementById("display");
    this.isFirstNumber = true;
    this.typeOfOperation = "";
    this.changeSymbol = true;
    this.display.textContent = controller.getNumber("number1");
    this.newNumber = "";
    this.container.addEventListener("click", e => this.renderValue(e));
  },

  currentOperation(numb1, numb2, typeOfOperation) {
    switch (typeOfOperation) {
      case "+":
        return controller.sum(numb1, numb2);
      case "-":
        return controller.rest(numb1, numb2);
      case "/":
        return controller.division(numb1, numb2);
      case "x":
        return controller.multiplication(numb1, numb2);
      case "%":
        return controller.percentage(numb1, numb2);
      default:
        return 0;
    }
  },

  resetRenderValue() {
    controller.reset();
    this.display.textContent = "0";
    this.newNumber = "";
  },

  rendertypeOfOperation(e) {
    this.isFirstNumber = !this.isFirstNumber;
    this.typeOfOperation = e.target.textContent;
    this.newNumber = "";
  },

  equalOperator() {
    this.display.textContent = this.currentOperation(
      controller.getNumber("number1"),
      controller.getNumber("number2"),
      this.typeOfOperation
    );
    controller.setNumber("number1", parseInt(this.display.textContent, 10));
  },

  changeOperatorSymbol() {
    this.isFirstNumber
      ? controller.changeSymbol("number1", this.changeSymbol)
      : controller.changeSymbol("number2", this.changeSymbol);
    this.isFirstNumber
      ? (this.display.textContent = controller.getNumber("number1"))
      : (this.display.textContent = controller.getNumber("number2"));
  },

  renderAndSaveNumber(e) {
    this.newNumber += e.target.textContent;
    this.isFirstNumber
      ? controller.setNumber("number1", parseInt(this.newNumber, 10))
      : controller.setNumber("number2", parseInt(this.newNumber, 10));
    this.display.textContent = this.newNumber;
  },

  renderValue(e) {
    this.changeSymbol = !this.changeSymbol;
    switch (e.target.textContent) {
      case "+":
      case "-":
      case "x":
      case "/":
      case "%":
        this.rendertypeOfOperation(e);
        break;
      case "=":
        this.equalOperator();
        break;
      case "AC":
        this.isFirstNumber = true;
        this.resetRenderValue();
        break;
      case "+/-":
        this.changeOperatorSymbol();
        break;
      default:
        this.renderAndSaveNumber(e);
        break;
    }
  }
};

view.init();
