function unluckyDays(year) {
    var countUnlucky = 0;
    var mDate = new Date(year, 0, 1);
    
    while (mDate.getFullYear() != year + 1) {
        if (mDate.getDay() == 5 && mDate.getDate() == 13)
            countUnlucky++;
            
        mDate.setDate(mDate.getDate() + 1);
    }
    
    return countUnlucky;
}
