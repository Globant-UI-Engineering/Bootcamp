let arrayNumbers = [];
let numberComplete = [];
let numberCompleteSum = 0;
let indOperator = 0;
function showScreen(digit) {
  if (digit.length === 0) {
      digit = 0;
  }
  document.querySelector('.screen').innerHTML= `<p> ${digit}  </p>`;
}
function numberDetect(digit) {
  arrayNumbers.push(digit.textContent);
  showScreen(arrayNumbers);
  console.log("numberDetect: " + arrayNumbers);
  
}
function detectOperator(digit) {
  if((digit.textContent === '+')&&(arrayNumbers)){
      plusOperation(arrayNumbers);
  } else if ((digit.textContent === '-')&&(arrayNumbers)){
      minusOperation(arrayNumbers);
  } else if ((digit.textContent === '*')&&(arrayNumbers)){
      timesOperation(arrayNumbers);
  } else if ((digit.textContent === '/')&&(arrayNumbers)){
      divideOperation(arrayNumbers); 
  } else if ((digit.textContent === '=')&&(arrayNumbers)){
      equalOperation(arrayNumbers);
  } else{
      deleteDetect();
  }
  showScreen(numberComplete);
  console.log("Operation: " +numberComplete);
}
function deleteDetect(){
  arrayNumbers.length = 0;
  numberComplete.length = 0;
  showScreen(arrayNumbers);
  console.log("deleteDetect: " + arrayNumbers);
}
function plusOperation (arrayNumbers) {
  indOperator = 1;
  numberComplete.push(parseInt(arrayNumbers.join('')));
  arrayNumbers.length = 0;
  const result = justPlusOperation(numberComplete);
  numberComplete.length = 0;
  numberComplete.push(result);
}
function minusOperation (arrayNumbers) {
  indOperator = 2;
  numberComplete.push(parseInt(arrayNumbers.join('')));
  arrayNumbers.length = 0;
  const result = justMinusOperation(numberComplete);
  numberComplete.length = 0;
  numberComplete.push(result);
}
function timesOperation (arrayNumbers) {
  indOperator = 3;
  numberComplete.push(parseInt(arrayNumbers.join('')));
  arrayNumbers.length = 0;
  const result = justTimesOperation(numberComplete);
  numberComplete.length = 0;
  numberComplete.push(result);
}
function divideOperation (arrayNumbers) {
  indOperator = 4;
  numberComplete.push(parseInt(arrayNumbers.join('')));
  arrayNumbers.length = 0;
  const result = justDivideOperation(numberComplete);
  numberComplete.length = 0;
  numberComplete.push(result);
}
function equalOperation (arrayNumbers) {
  numberComplete.push(parseInt(arrayNumbers.join('')));
  if (indOperator === 1) {
    const result = justPlusOperation(numberComplete);
    numberComplete.length = 0;
    numberComplete.push(result);
  } else if (indOperator === 2) {
    const result = justMinusOperation(numberComplete);
    numberComplete.length = 0;
    numberComplete.push(result);
  } else if (indOperator === 3) {
    const result = justPlusOperation(numberComplete);
    numberComplete.length = 0;
    numberComplete.push(result);
  } else if (indOperator === 4) {
    const result = justDivideOperation(numberComplete);
    numberComplete.length = 0;
    numberComplete.push(result);
  }
  indOperator = 0;
  console.log(numberComplete);
  arrayNumbers.length = 0;
  numberComplete.length = 0;

}
function justPlusOperation (numberComplete) {
  const totalSum = numberComplete.reduce(function(totalSum, nextValue){
    return totalSum + nextValue;
  }, 0);  
  return totalSum;
}
function justTimesOperation (numberComplete) {
  const totalSum = numberComplete.reduce(function(totalSum, nextValue){
    return totalSum * nextValue;
  }, 0);  
  return totalSum;
}
function justDivideOperation (numberComplete) {
  const totalSum = numberComplete.reduce(function(totalSum, nextValue){
    return totalSum / nextValue;
  }, 0);  
  return totalSum;
}