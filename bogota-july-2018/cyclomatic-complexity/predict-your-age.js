function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = Array.from(arguments);
  let sumSquareAges = ages.reduce((a,b) => a + Math.pow(b,2), 0);
  
  return Math.floor(Math.sqrt(sumSquareAges)/2);
}
