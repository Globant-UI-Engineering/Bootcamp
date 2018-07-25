function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  for( let i = 0; i < arguments.length; i++){
    arguments[i] = multiplyBySelf(arguments[i]);
  }
  
  let totalSum = sumAges(age1,age2,age3,age4,age5,age6,age7,age8);
  let sqrRoot = squareRoot(totalSum);
  let finalResult = divideByTwo(sqrRoot);
  
  return Math.floor(finalResult);
}

function multiplyBySelf(number){
  return number * number;
}

function sumAges(age1,age2,age3,age4,age5,age6,age7,age8){
  return age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8;
}

function squareRoot(number){
  return Math.sqrt(number);
}

function divideByTwo(number){
  return number / 2;
}