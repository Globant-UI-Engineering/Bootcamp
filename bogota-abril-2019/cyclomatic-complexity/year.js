function unluckyDays(year){
  let cont = 0;
  let day = 0;
  while(day < 12){
    let date = new Date(year,day,13);
    if(date.getDay() == 5){
        cont++;
    }
    day ++;
  }
  return cont;
}