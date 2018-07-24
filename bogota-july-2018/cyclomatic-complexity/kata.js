function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i]*arguments[i];
    }
    sum = Math.sqrt(sum);
    return parseInt(sum / 2);
  }