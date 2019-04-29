/**
 * Predicts how old a person would be, given the age of their great-grandparents.
 * @param  {...number} lastAges 
 */
function predictAge(...lastAges) {
    lastAges = lastAges.map(age => age * age);
    const sum = lastAges.reduce((last, current) => last + current);
    const halfSquareRoot = Math.sqrt(sum) / 2;
    return Math.floor(halfSquareRoot);
}