function predictAge(...arg){
    let multiple = 0;
    for(var i=0;i<arg.length;i++){
      multiple += (arg[i]*arg[i]);
    }
    return Math.floor((Math.sqrt(multiple))/2);
  }