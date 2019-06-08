function unluckyDays(year) {
  var count = 0;
  for (let month = 0; month < 12; month++) {
    var evalYear = new Date(year, month, 13);
    if (evalYear.getDay() == 5) {
      count += 1;
    }
  }
  return count;
}

const days = unluckyDays(1586);
console.log(days);
