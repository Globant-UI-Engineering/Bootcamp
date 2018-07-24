function numRaisedBy(num, index){
  index = 2;
  return Math.pow(num,index);
}

function numSum(total,actualNumber){
  return total + actualNumber;
}

function divide(numerator,denominator){
  return numerator/denominator;
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  const ageArray = [age1,age2,age3,age4,age5,age6,age7,age8];
  let raisedArray = ageArray.map(numRaisedBy);
  let Age = raisedArray.reduce(numSum);
  return Math.floor(Math.sqrt(Age)/2)
}