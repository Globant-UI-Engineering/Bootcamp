function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let total = 0; 
  for( let item of arguments){
    total += item*item;
  }
  return Math.floor(Math.sqrt(total)/2);
}