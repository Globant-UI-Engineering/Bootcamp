/*
 * I think that my Cyclomatic complexity is 3. Because it has:
 * M = E - N + 2
 * M = 6 - 5 + 2
 * M = 3
 *
 */


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){ 
  let sumAges = [...arguments]
    .map(value => value * value)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
  
  return Math.floor(Math.sqrt(sumAges) / 2)
}
