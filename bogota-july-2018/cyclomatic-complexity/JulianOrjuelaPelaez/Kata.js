function numRaisedBy(num, index){
  index = 2;
  return Math.pow(num,index);
}

function numSum(total,actualNumber){
  return total + actualNumber;
}

function predictAge(...age){
  let raisedArray = age.map(numRaisedBy);
  let Age = raisedArray.reduce(numSum);
  return Math.floor(Math.sqrt(Age)/2);
}