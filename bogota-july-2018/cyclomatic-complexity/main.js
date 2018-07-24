function predictAge(){
    var sumOfPows = Object.values(arguments).reduce(function(acc,x){
      return acc+Math.pow(x,2);
    },0);
    return  Math.floor(Math.floor(Math.sqrt(sumOfPows))/2);
  }
  console.log(predictAge(65,60,75,55,60,63,64,45));