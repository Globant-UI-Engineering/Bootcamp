function predictAge(...arguments){
  var sumAge = 0;
  var sqrtAge;
  
  arguments.forEach(
    function powAge(item) {
      sumAge += (item*item);
    });
  sqrtAge = Math.sqrt(sumAge);
  return (Math.floor(Math.floor(sqrtAge)/2));
}