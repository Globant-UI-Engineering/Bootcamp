// SOLUTION 1: 
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1,age2,age3,age4,age5,age6,age7,age8];
  let sum = 0;
    ages.forEach(function(value) {
     let currentValue = value*value;
     sum = sum + currentValue;
   });
  
  sum = Math.sqrt(sum);
  sum = Math.floor(sum /2);
  return sum;
  
}

// SOLUTION 2: 
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [...arguments]
  return Math.floor(Math.sqrt(ages.map(value => value*value).reduce((a,b)=>a+b))/2);
}
