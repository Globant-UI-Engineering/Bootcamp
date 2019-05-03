function unluckyDays(year) {
    let unluckyDay = 0;
    let d = new Date();
    d.setFullYear(year);
    d.setDate(13);
    for (let i = 0; i < 12; i++) {
        d.setMonth(i);
        if (d.getDay() === 5) {
            unluckyDay++;
        }
    }
    return unluckyDay;
}
console.log(unluckyDays(2015));
console.log(unluckyDays(1986));