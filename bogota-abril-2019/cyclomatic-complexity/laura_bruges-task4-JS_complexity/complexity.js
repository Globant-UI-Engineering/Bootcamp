function predictAge(...ages){
    /**
     * This function predicts how old would people get based on their grandparents ages.
     * @param {Int32Array} ages Great-grandparents ages.
     * @return {Number} Result of prediction
     */
    var squared = ages.map((age) => age * age);
    var squareSum = squared.reduce((accumulator, age) => accumulator + age)
    var resRoot = Math.sqrt(squareSum);
    return Math.floor(resRoot / 2);
}


console.log(predictAge(65,60,75,55,60,63,64,45));