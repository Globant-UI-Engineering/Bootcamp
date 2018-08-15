function numRaisedBy(num){
  return num*num;
}

function numSum(total,actualNumber){
  return total + actualNumber;
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  const ageArray = [age1,age2,age3,age4,age5,age6,age7,age8];
  let raisedArray = ageArray.map(numRaisedBy);
  let Age = raisedArray.reduce(numSum);
  return Math.floor(Math.sqrt(Age)/2);
}