function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var ages = [age1, age2, age3, age4, age5,age6,age7,age8];

  ages = ages.map((age,i) => {
    return age*age;
  });

  var agesSum = sumArray(ages);

  agesSum = Math.floor(Math.sqrt(agesSum) / 2);

  return agesSum;
}

function sumArray(array){
  var sum = 0;

  sum = array.reduce((prevValue, actValue) => {
    return prevValue + actValue;
  });

  return sum;
}
