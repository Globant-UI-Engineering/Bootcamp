function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt(Array.from(arguments).reduce((a, b) => a + Math.pow(b,2), 0))/2);
}