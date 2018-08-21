const predictAge = (...ages) => {
  let total = 0;
  
  for(let age of ages){
    total += (age * age);
  }
  total = Math.floor(Math.sqrt(total) / 2);
  console.log(total);
}
