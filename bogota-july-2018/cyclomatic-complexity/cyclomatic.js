function predictAge(age0,age2,age3,age4,age5,age6,age7,age8){
    let solution=0;
    for (let i = 0; i <arguments.length ; i++) {
         solution += Math.pow(arguments[i],2);
    }
    solution=Math.floor((Math.sqrt(solution))/2);
    return solution;
 }
