function unluckyDays(year) {
    let unluckyDay = 0;
    let date = new Date();
    date.setFullYear(year);
    date.setDate(13);
    for (let i = 0; i < 12; i++) {
        date.setMonth(i);
        if (date.getDay() === 5) {
            unluckyDay++;
        }
    }
    return unluckyDay;
}
console.log(unluckyDays(2015));
console.log(unluckyDays(1986));