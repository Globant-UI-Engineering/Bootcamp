function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  const x = Array.from(arguments);
  const potencial = (value) => Math.pow(value,2);
  const plus = (accu, curr) => accu + curr;

  let pow = x.map(potencial);

  let sum = pow.reduce(plus);

  return Math.floor((Math.sqrt(sum))/2);
}