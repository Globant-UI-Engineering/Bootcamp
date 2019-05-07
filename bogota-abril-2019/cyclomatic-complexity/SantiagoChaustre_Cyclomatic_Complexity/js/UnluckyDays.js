function unluckyDays(year){
  let NumUnluckyDays = 0;
  let AuxiliarDate = new Date(year,0,1);
  for (var i = 1 ; i <= 12 ; i++){
    NumUnluckyDays += (AuxiliarDate.getDay() == 0) ? 1 :0
    AuxiliarDate.setMonth(AuxiliarDate.getMonth() + 1);
  }
  return NumUnluckyDays;
}