/**
 * It predicts how old people would get based on my grandfather's secret formula.
 * @param {object} ages Great parents death ages.
 * @returns {number} The predicted age.
 */
function predictAge(...ages){
    let predictedAge = 0;
    
    for(let i = 0; i < ages.length; i++){
        predictedAge += ages[i] ** 2;
    }

    predictedAge = Math.floor((Math.sqrt(predictedAge)) / 2);

    return predictedAge;
}

//M = 6 - 6 + 2 = 2