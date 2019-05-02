function unluckyDays(year) {
  const monthStartDays = Array(12)
    .fill(0)
    .map((e, i) => new Date(year, i, 13).getDay());
  return monthStartDays.filter(startDay => startDay === 5).length;
}
