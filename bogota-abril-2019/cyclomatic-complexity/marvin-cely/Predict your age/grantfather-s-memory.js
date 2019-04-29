/**
 * Function that multiply each number of the list by itself 
 * @param {object}
 * @return {object}
 */
function multItself(ages) {
    for (let i = 0; i < ages.length; i++) {
        ages[i] = Math.pow(ages[i], 2);
    }
    return ages;
}

/**
 * Function that add all array's numbers
 * @param {intArray32}
 * @return {number}
 */
function addAges(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum;
}

/**
 * Function that predict how old the people would get
 * @param {object}
 * @return {number}
 */
function predictAge() {
    return Math.floor(Math.sqrt(addAges(multItself(arguments))) / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));