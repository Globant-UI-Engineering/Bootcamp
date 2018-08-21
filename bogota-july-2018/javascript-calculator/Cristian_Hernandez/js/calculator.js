// Variables
  var 
    viewer = document.getElementById("viewer"),
    actualNumber = "", 
    oldNumber = "", 
    resultNumber,
    operator; 

  function clearAll() {
    oldNumber = "";
    actualNumber = "";
    viewer.innerHTML = "0";
  };

  function finalResult() {
    oldNumber = parseFloat(oldNumber);
    actualNumber = parseFloat(actualNumber);
    switch (operator) {
      case "plus":
        resultNumber = oldNumber + actualNumber;
        break;

      case "minus":
        resultNumber = oldNumber - actualNumber;
        break;

      case "times":
        resultNumber = oldNumber * actualNumber;
        break;

      case "divided by":
        resultNumber = oldNumber / actualNumber;
        break;

      default:
        resultNumber = actualNumber;
    }
      if (isNaN(resultNumber)) { 
        resultNumber = "Syntax Error";
      } 
    viewer.innerHTML = resultNumber;
    oldNumber = 0;
    actualNumber = resultNumber;
  }

  function saveNumber(number){
    actualNumber += number.getAttribute("data-value");
    viewer.innerHTML = actualNumber;
  }
  function saveOperator(operatorObject){
    oldNumber = actualNumber;
    actualNumber = "";
    operator = operatorObject.getAttribute("data-op");
  }