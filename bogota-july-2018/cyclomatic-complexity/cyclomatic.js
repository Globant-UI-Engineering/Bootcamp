function predictionAge(...ages){
    let solution=0;
    for (let i = 0; i <arguments.length ; i++) {
         solution += Math.pow(arguments[i],2);
    }
    solution=(Math.sqrt(solution))/2;
    return solution;
}
