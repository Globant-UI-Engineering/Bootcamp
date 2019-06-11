  function unluckyDays(year) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var numberDays = 0;
  for (let i = 0; i < 12; i++) {

    let date = new Date(year, i, 13);
    let day = date.getDay();

    if (days[day] == 'Friday') {
      numberDays = numberDays + 1;
    }

  }
  return numberDays;
} 