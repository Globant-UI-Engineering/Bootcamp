function predictAge(){
    var sumOfPows = Object.values(arguments).reduce(function(acc,x){
      return acc+Math.pow(x,2);
    },0);
    return  Math.floor(Math.floor(Math.sqrt(sumOfPows))/2);
  }