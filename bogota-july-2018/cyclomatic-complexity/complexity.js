function predictAge(...ages){
  // your code
  let total = 0;
  
  for(let age of ages){
    age *= age;
    total += age;
  }
  total = Math.floor(Math.sqrt(total) / 2);
  console.log(total);
}
