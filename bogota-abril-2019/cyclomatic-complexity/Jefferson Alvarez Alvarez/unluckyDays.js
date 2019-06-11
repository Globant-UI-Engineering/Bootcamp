/*jshint esversion: 6*/

function unluckyDays(year) {
    let numOfBlackDays = 0;
    for(let i = 1; i < 13; i++) {
        let month = i;
        let date = new Date(year, month, 13);
        if(date.getDay() === 5) {
            numOfBlackDays++;
        }
    }
    return numOfBlackDays;
}

unluckyDays(2015);