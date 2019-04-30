function unluckyDays(year) {
    var countUnlucky = 0;
    var dummyDate = new Date(year, 0, 1);
    
    while (dummyDate.getFullYear() != year + 1) {
        if (dummyDate.getDay() == 5 && dummyDate.getDate() == 13)
            countUnlucky++;
            
        dummyDate.setDate(dummyDate.getDate() + 1);
    }
    
    return countUnlucky;
}
