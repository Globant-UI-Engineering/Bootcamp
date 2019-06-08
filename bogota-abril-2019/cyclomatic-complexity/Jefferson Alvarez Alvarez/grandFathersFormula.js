/*jshint esversion: 6*/

function predictAge(agesList) {
    let agesSum = 0;
    for(let i = 0; i < agesList.length; i++) {
        let ageSquared = agesList[i] * agesList[i];
        agesSum += ageSquared;
    }
    return Math.floor(Math.sqrt(agesSum)/2);
}

predictAge([65, 60, 75, 55, 60, 63, 64, 45]);