function predictAge(...ages){
    /**
     * This function predicts how old would people get based on their grandparents ages.
     * @param {Int32Array} ages Great-grandparents ages.
     * @return {Number} Result of prediction.
     */
    var squared = ages.map((age) => age * age);
    var squareSum = squared.reduce((accumulator, age) => accumulator + age)
    var resRoot = Math.sqrt(squareSum);
    return Math.floor(resRoot / 2);
}

function unluckyDays(year) {
    /**
     * This function calculates the number of 'unlucky days' (Friday 13th) for a given year.
     * @param {Number} year Year for unlucky days calculation.
     * @return {Number} Number of unlucky days.
     */
    var date = new Date(year, 0, 13);
    var unluckyDates = 0;
    for(var i = 0; i < 12; i++) {
        date.setMonth(i);
        date.setDate(13);
        if(date.getDay() === 5) {
            unluckyDates += 1;
        }
    }
    return unluckyDates;
}


console.log("--------------- PREDICT AGE ---------------")
console.log("Test for 65,60,75,55,60,63,64,45")
console.log(predictAge(65,60,75,55,60,63,64,45));


console.log("--------------- UNLUCKY DAYS ---------------")
console.log("Test for 2015: ")
console.log(unluckyDays(2015));

console.log("Test for 1986: ")
console.log(unluckyDays(1986));
